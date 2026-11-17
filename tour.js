/* A slow automatic tour; any fresh guest input returns control to native scrolling. */
(() => {
  class InvitationTour {
    constructor({ win = window, root = document.documentElement, clock = performance, onStateChange = () => {} } = {}) {
      this.win = win; this.root = root; this.clock = clock; this.onStateChange = onStateChange;
      this.state = 'idle'; this.frame = 0; this.timer = 0; this.resumeOnFocus = false;
      this.touching = false; this.pointerHeld = false; this.downwardTouch = false; this.touchY = 0;
      this.win.addEventListener('scroll', () => this.onScroll(), { passive: true });
      this.win.addEventListener('wheel', e => this.onWheel(e), { passive: true });
      this.win.addEventListener('touchstart', e => this.onTouchStart(e), { passive: true });
      this.win.addEventListener('touchmove', e => this.onTouchMove(e), { passive: true });
      this.win.addEventListener('touchend', () => this.onTouchEnd(), { passive: true });
      this.win.addEventListener('touchcancel', () => this.onTouchEnd(), { passive: true });
      this.win.addEventListener('pointerdown', e => {
        if (e.target?.closest?.('[data-tour-control]')) return;
        this.pointerHeld = true; this.interrupt();
      }, { passive: true });
      for (const type of ['pointerup','pointercancel']) this.win.addEventListener(type, () => { this.pointerHeld = false; this.queueResume(); }, { passive: true });
      this.win.addEventListener('keydown', e => this.onKey(e));
      this.win.addEventListener('blur', () => this.suspend());
      this.win.addEventListener('focus', () => this.restore());
      this.setState('idle');
    }
    setState(state) { this.state = state; this.root.dataset.tourState = state; this.onStateChange(state); }
    arm() {
      this.stop('idle'); this.touching = false; this.pointerHeld = false; this.downwardTouch = false;
      this.armY = this.win.scrollY; this.setState('armed');
    }
    autoplay(delay = 4000) {
      this.stop('idle'); this.touching = false; this.pointerHeld = false; this.downwardTouch = false;
      this.armY = this.win.scrollY; this.setState('scheduled');
      this.timer = this.win.setTimeout(() => {
        if (this.state !== 'scheduled') return;
        this.setState('armed'); this.start();
      }, delay);
    }
    play() { this.arm(); this.start(); }
    suspend() {
      if (!['running','scheduled','waiting'].includes(this.state)) return;
      this.stop('paused'); this.resumeOnFocus = true;
    }
    restore() {
      if (this.resumeOnFocus) this.autoplay(4000);
    }
    stop(state = 'paused') {
      this.resumeOnFocus = false;
      this.win.clearTimeout(this.timer); this.timer = 0;
      this.win.cancelAnimationFrame(this.frame); this.frame = 0;
      this.root.classList.remove('tour-running'); this.setState(state);
    }
    interrupt() {
      if (!['running','scheduled','waiting'].includes(this.state)) return;
      // Cancel the current animation frame without changing the scroll position.
      this.stop('waiting'); this.queueResume();
    }
    queueResume() {
      if (this.state !== 'waiting') return;
      this.win.clearTimeout(this.timer); this.timer = 0;
      if (this.touching || this.pointerHeld) return;
      this.timer = this.win.setTimeout(() => {
        if (this.state !== 'waiting' || this.touching || this.pointerHeld) return;
        this.setState('armed'); this.start();
      }, 4000);
    }
    schedule(delay = 220) {
      if (!['armed', 'pending'].includes(this.state)) return;
      this.win.clearTimeout(this.timer); this.setState('pending');
      if (this.touching) return;
      this.timer = this.win.setTimeout(() => this.start(), delay);
    }
    onScroll() {
      if (this.state === 'waiting') { this.queueResume(); return; }
      if (this.state === 'scheduled' && Math.abs(this.win.scrollY - this.armY) > 3) { this.interrupt(); return; }
      if (['armed', 'pending'].includes(this.state) && this.win.scrollY > this.armY + 3) this.schedule();
    }
    onWheel(e) {
      if (['running','scheduled','waiting'].includes(this.state)) { this.interrupt(); return; }
      if (e.deltaY > 0 && ['armed', 'pending'].includes(this.state)) this.schedule();
    }
    onTouchStart(e) {
      if (e.target?.closest?.('[data-tour-control]')) return;
      this.touching = true;
      this.interrupt(); this.downwardTouch = false;
      this.touchY = e.touches[0]?.clientY ?? 0;
      this.win.clearTimeout(this.timer); this.timer = 0;
    }
    onTouchMove(e) {
      const y = e.touches[0]?.clientY ?? this.touchY;
      if (this.touchY - y > 10) this.downwardTouch = true;
      if (this.downwardTouch && ['armed', 'pending'].includes(this.state)) this.schedule();
    }
    onTouchEnd() {
      this.touching = false;
      this.queueResume();
      if (this.downwardTouch && ['armed', 'pending'].includes(this.state)) this.schedule(240);
    }
    onKey(e) {
      if (e.target?.closest?.('[data-tour-control]')) return;
      if (e.key === 'Escape') { this.stop('paused'); return; }
      if (['running','scheduled','waiting'].includes(this.state)) { this.interrupt(); return; }
      const interactive = e.target?.closest?.('a,button,input,textarea,select,[contenteditable=true]');
      if (!interactive && ['ArrowDown', 'PageDown', ' '].includes(e.key)) this.schedule();
    }
    start() {
      if (!['armed', 'pending'].includes(this.state) || this.touching || this.pointerHeld) return;
      this.timer = 0;
      const startY = this.win.scrollY;
      const target = Math.max(0, this.root.scrollHeight - this.win.innerHeight);
      const distance = target - startY;
      if (distance < 4) { this.setState('complete'); return; }
      this.setState('running');
      // Disable CSS smooth-scroll while setting each frame. Numeric scrollTo
      // works on mobile Safari as well as Chrome, with no 'instant' enum needed.
      this.root.classList.add('tour-running');
      const duration = Math.max(1800, Math.min(60000, distance / 70 * 1000));
      const start = this.clock.now();
      const animate = now => {
        if (this.state !== 'running') return;
        const p = Math.max(0, Math.min(1, (now - start) / duration));
        const ramp = .05;
        const area = p < ramp ? p * p / (2 * ramp)
          : p > 1 - ramp ? 1 - ramp - (1 - p) ** 2 / (2 * ramp)
          : p - ramp / 2;
        const progress = area / (1 - ramp);
        const currentTarget = Math.max(0, this.root.scrollHeight - this.win.innerHeight);
        this.win.scrollTo(0, Math.min(currentTarget, startY + (currentTarget - startY) * progress));
        if (p < 1) this.frame = this.win.requestAnimationFrame(animate);
        else { this.frame = 0; this.root.classList.remove('tour-running'); this.setState('complete'); }
      };
      this.frame = this.win.requestAnimationFrame(animate);
    }
  }
  window.InvitationTour = InvitationTour;
})();
