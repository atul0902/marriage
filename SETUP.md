# Put atulastha.com on GitHub Pages

## 1. Upload the website

1. Extract atulastha-github.zip.
2. Sign in to https://github.com and create a repository named atulastha.com.
3. Choose Public for free GitHub Pages hosting. This makes the code and artwork visible publicly. Select Add a README, then create the repository.
4. Open Add file → Upload files.
5. Drag the CONTENTS of the extracted atulastha-github folder into the upload area, including the assets folder. Do not upload the ZIP itself or put everything inside another enclosing folder.
6. Commit the upload to main. Replacing the initial README with the supplied one is fine.

Your repository root must contain index.html, style.css, script.js, engagement.ics, CNAME, and assets/. The asset paths must remain assets/lucknow-garden.png and assets/chikankari.svg. The hidden .nojekyll file is supplied but is optional for these filenames.

## 2. Turn on hosting

1. Go to repository Settings → Pages.
2. Under Build and deployment, choose Deploy from a branch.
3. Choose main and /(root), then Save.
4. Under Custom domain, enter atulastha.com and Save. The included CNAME already contains this domain; confirm that Settings → Pages shows it too.
5. Configure this domain on GitHub BEFORE changing DNS. The first deployment may take several minutes; see the repository's Actions tab for progress.

GitHub guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 3. Connect Namecheap

1. Sign in to Namecheap → Domain List → Manage beside atulastha.com → Advanced DNS → Host Records.
2. Replace only existing conflicting website records at @ or www (parking, URL redirect, old A/AAAA/ALIAS records or www CNAME). Leave email/MX and unrelated TXT records intact.
3. If you added the earlier ChatGPT Sites A records, remove 162.159.143.30 and 172.66.3.26 at @ when switching to GitHub Pages. Use the GitHub values below instead.
4. Add these records, with TTL set to Automatic:

| Type | Host | Value |
| --- | --- | --- |
| A Record | @ | 185.199.108.153 |
| A Record | @ | 185.199.109.153 |
| A Record | @ | 185.199.110.153 |
| A Record | @ | 185.199.111.153 |
| CNAME Record | www | YOUR-GITHUB-USERNAME.github.io |

Replace YOUR-GITHUB-USERNAME with your actual GitHub username. Do not include https:// or the repository name. Example: if your username is sampleuser, use sampleuser.github.io.

Save the records. If Host Records is unavailable because your nameservers use another DNS provider, make these changes at that provider instead.

Namecheap guide: https://www.namecheap.com/support/knowledgebase/article.aspx/434/2237/how-do-i-set-up-host-records-for-a-domain/
GitHub domain guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## 4. Enable HTTPS and check

1. Return to GitHub Settings → Pages and wait for the DNS check and certificate to finish. DNS changes can take up to 24 hours.
2. Turn on Enforce HTTPS when it becomes available.
3. Open https://atulastha.com and https://www.atulastha.com. Check the envelope opens, artwork loads, and the directions and calendar download work.

No separate hosting purchase is needed for this static site on GitHub Pages. This package does not itself create a repository or change DNS; complete the steps above to go live.
