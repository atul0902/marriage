/* Native scrolling first; continue only after the initiating gesture settles.
   The controller never cancels its own rAF scroll events or the opening swipe. */
(() => {
  class InvitationTour {
    constructor({ win = window, root = document.documentElement, clock = performance } = {}) {
      this.win = win; this.root = root; this.clock = clock;
      this.state = 'idle'; this.frame = 0; this.timer = 0;
      this.touching = false; this.downwardTouch = false; this.touchY = 0;
      this.win.addEventListener('scroll', () => this.onScroll(), { passive: true });
      this.win.addEventListener('wheel', e => this.onWheel(e), { passive: true });
      this.win.addEventListener('touchstart', e => this.onTouchStart(e), { passive: true });
      this.win.addEventListener('touchmove', e => this.onTouchMove(e), { passive: true });
      this.win.addEventListener('touchend', () => this.onTouchEnd(), { passive: true });
      this.win.addEventListener('touchcancel', () => this.onTouchEnd(), { passive: true });
      this.win.addEventListener('pointerdown', e => {
        if (e.pointerType !== 'touch' && this.state === 'running') this.stop('paused');
      }, { passive: true });
      this.win.addEventListener('keydown', e => this.onKey(e));
      this.win.addEventListener('blur', () => { if (this.state === 'running') this.stop('paused'); });
      this.setState('idle');
    }
    setState(state) { this.state = state; this.root.dataset.tourState = state; }
    arm() {
      this.stop('idle'); this.touching = false; this.downwardTouch = false;
      this.armY = this.win.scrollY; this.setState('armed');
    }
    stop(state = 'paused') {
      this.win.clearTimeout(this.timer); this.timer = 0;
      this.win.cancelAnimationFrame(this.frame); this.frame = 0;
      this.root.classList.remove('tour-running'); this.setState(state);
    }
    schedule(delay = 220) {
      if (!['armed', 'pending'].includes(this.state)) return;
      this.win.clearTimeout(this.timer); this.setState('pending');
      if (this.touching) return;
      this.timer = this.win.setTimeout(() => this.start(), delay);
    }
    onScroll() {
      if (['armed', 'pending'].includes(this.state) && this.win.scrollY > this.armY + 3) this.schedule();
    }
    onWheel(e) {
      if (this.state === 'running') { this.stop('paused'); return; }
      if (e.deltaY > 0 && ['armed', 'pending'].includes(this.state)) this.schedule();
    }
    onTouchStart(e) {
      if (this.state === 'running') this.stop('paused');
      this.touching = true; this.downwardTouch = false;
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
      if (this.downwardTouch && ['armed', 'pending'].includes(this.state)) this.schedule(240);
    }
    onKey(e) {
      if (e.key === 'Escape') { this.stop('paused'); return; }
      if (this.state === 'running') { this.stop('paused'); return; }
      const interactive = e.target?.closest?.('a,button,input,textarea,select,[contenteditable=true]');
      if (!interactive && ['ArrowDown', 'PageDown', ' '].includes(e.key)) this.schedule();
    }
    start() {
      if (!['armed', 'pending'].includes(this.state) || this.touching) return;
      this.timer = 0;
      const startY = this.win.scrollY;
      const target = Math.max(0, this.root.scrollHeight - this.win.innerHeight);
      const distance = target - startY;
      if (distance < 4) { this.setState('complete'); return; }
      this.setState('running');
      // Disable CSS smooth-scroll while setting each frame. Numeric scrollTo
      // works on mobile Safari as well as Chrome, with no 'instant' enum needed.
      this.root.classList.add('tour-running');
      const duration = Math.max(18000, Math.min(40000, distance / 82 * 1000));
      const start = this.clock.now();
      const animate = now => {
        if (this.state !== 'running') return;
        const p = Math.max(0, Math.min(1, (now - start) / duration));
        const ramp = .12;
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
