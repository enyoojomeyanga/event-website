# Event Business Website (HTML + CSS + JavaScript)

A one-page, mobile-first website that sends visitors to WhatsApp for quotes.
No framework, no Node.js, no build step, no `.env` file needed. Just open `index.html`.

## What's in the folder

```
site/
├── index.html      Page content (text, sections, links)
├── styles.css      Colours, fonts, layout
├── script.js       Mobile menu, gallery filter
├── favicon.svg     Browser tab icon
├── vercel.json     Optional Vercel settings
├── .gitignore      Files Git should ignore
├── images/         PUT YOUR PHOTOS HERE
└── README.md       This file
```

---

## 1. Edit your details first

Open the folder in a text editor (recommended: free **VS Code**, https://code.visualstudio.com). Use Find & Replace (Ctrl+H on Windows/Linux, Cmd+Option+F on Mac). Search the whole folder (Ctrl/Cmd+Shift+H) for each item.

| What | Find | Replace with |
|---|---|---|
| Business name | `[BUSINESS NAME]` (index.html) | Her business name |
| WhatsApp quote links | Search **index.html** for `wa.me/2349026995371` | Update all matching numbers together. Each link includes its own URL-encoded inquiry. |
| Location | `[CITY/STATE]` | e.g. `Abuja` |
| Prices | `₦[PRICE]` | e.g. `Starting from ₦150,000`, or change the whole line to `Custom quote` |
| Testimonials | search `REPLACE: Testimonials` | real quotes and names |
| FAQ answers | search `[EDIT]` | her real policies |
| Favicon letter | `favicon.svg` | change the `B` to her initial |

**Photos:** put images in the `images/` folder with these exact names (JPG): `hero.jpg`, `decor-1` to `decor-4`, `cake-1` to `cake-4`, `food-1` to `food-4`. Resize each to about 1200px wide and under 300 KB (free: https://squoosh.app) so the site loads fast on mobile data. `hero.jpg` also appears when the link is shared on WhatsApp. To change captions, edit the `<figcaption>` and `alt` text in the Portfolio section of index.html. Until you add photos, pink placeholder tiles show.

**Google Maps (optional):** In Google Maps find the location, click Share, then Embed a map, then Copy HTML. In index.html find `REPLACE: Google Maps embed` and replace the commented-out `<iframe ...>` line with the code you copied. If she works from home, skip this.

---

## 2. Set up on your computer

You do not need Node.js or any installs to view the site.

1. **Download** the ZIP file you received and **extract** it (Windows: right-click, Extract All. macOS: double-click. Linux: `unzip event-website.zip`).
2. Open the extracted `site` folder.

### Run locally

**Easiest (all systems):** double-click `index.html`. It opens in your browser.

**Better (a local server, so it behaves like the live site):**

Windows (PowerShell or Command Prompt), inside the `site` folder:
```
py -m http.server 8000
```
(if `py` isn't found, try `python -m http.server 8000`)

macOS / Linux (Terminal), inside the `site` folder:
```
python3 -m http.server 8000
```

Then open http://localhost:8000. Stop the server with Ctrl+C.

Tip: in VS Code you can instead install the "Live Server" extension, right-click `index.html`, and choose "Open with Live Server".

**Test on your phone:** WhatsApp buttons only open properly on a device with WhatsApp. Check every button after you go live.

---

## 3. Install Git (one time)

Check if you have it:
```
git --version
```
If not:
- **Windows:** download from https://git-scm.com/download/win and install with default options. Reopen your terminal.
- **macOS:** run `xcode-select --install` (or `brew install git`).
- **Linux (Ubuntu/Debian):** `sudo apt update && sudo apt install git`. Fedora: `sudo dnf install git`.

Tell Git who you are (one time, use your GitHub email):
```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---

## 4. Create a GitHub repository and push

1. Create a free account at https://github.com/signup.
2. Click the **+** (top right), then **New repository**.
3. Name it e.g. `event-website`. Choose **Public** or **Private** (both work with Vercel). **Do NOT** tick "Add a README", ".gitignore" or a licence. Click **Create repository**.
4. In your terminal, go into the project folder:
   - Windows: `cd C:\Users\YourName\Downloads\site`
   - macOS/Linux: `cd ~/Downloads/site`
5. Run these (the same on all systems). Replace `YOUR-USERNAME`:
```
git init
git add .
git commit -m "First version of website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/event-website.git
git push -u origin main
```
6. When asked to sign in, a browser window may open (approve it). If it asks for a password in the terminal, GitHub no longer accepts your account password: create a **Personal Access Token** at GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic) > Generate (tick `repo`), and paste it as the password.

Refresh the GitHub page. You should see your files.

---

## 5. Deploy on Vercel

1. Go to https://vercel.com/signup and choose **Continue with GitHub**.
2. Click **Add New... > Project**.
3. Find `event-website` and click **Import**. (If it's missing, click "Adjust GitHub App Permissions" and allow access to the repository.)
4. Leave all settings as they are:
   - Framework Preset: **Other**
   - Build Command: *(leave empty)*
   - Output Directory: *(leave empty)*
5. Click **Deploy**. After about 30 seconds you get a live link like `https://event-website-xyz.vercel.app`.
6. Open it on your phone and test every button.

**Alternative (no GitHub):** install the Vercel CLI (`npm i -g vercel`, needs Node.js from https://nodejs.org), then run `vercel` inside the folder and follow the prompts. `vercel --prod` publishes.

---

## 6. Connect a custom domain

You need a domain (e.g. `www.herbusiness.com` or `.com.ng`), bought from a registrar such as Namecheap, GoDaddy, Whogohost or Qservers.

1. In Vercel open your project, then **Settings > Domains**, type your domain, click **Add**.
2. Vercel shows the DNS records to create. Usually:
   - For `www.herbusiness.com`: **CNAME**, name `www`, value shown by Vercel (e.g. `cname.vercel-dns.com`).
   - For `herbusiness.com` (root): **A** record, name `@`, value shown by Vercel (e.g. `76.76.21.21`).
   Always copy the exact values Vercel displays.
3. Log into your registrar, open **DNS settings / Manage DNS**, add those records, and delete any old conflicting A/CNAME record for the same name.
4. Go back to Vercel and wait. This takes minutes, sometimes up to 24 to 48 hours. When it shows **Valid Configuration**, HTTPS is added automatically.

Prefer to keep DNS at the registrar? That's fine. Alternatively, change the domain's nameservers to Vercel's (shown in the Domains page) and Vercel manages everything.

---

## 7. Update the website after launch

1. Edit the files on your computer (text, prices, photos in `images/`).
2. Check them locally (see section 2).
3. In the project folder, run:
```
git add .
git commit -m "Update prices and photos"
git push
```
4. Vercel rebuilds automatically and the live site updates in about a minute. See progress under the project's **Deployments** tab. If something breaks, open an older deployment there and click **Promote to Production** (rollback).

Tip: small text changes can be made directly on github.com (open the file, click the pencil icon, then Commit changes). Vercel updates automatically.

---

## 8. Fixing common problems

**Setup**
- *Photos don't show:* file names are case-sensitive on the live site. Use exactly `decor-1.jpg` (lowercase, `.jpg` not `.jpeg`/`.JPG`), or edit the `src` in index.html.
- *WhatsApp button opens wrong number:* check the recipient in every `wa.me/` link in **index.html**. Format `2348012345678`, no `+`, no leading 0.
- *Buttons do nothing / menu doesn't open:* `script.js` must be in the same folder as `index.html`. Press F12 and check the Console for errors.
- *`py` or `python3` not found:* install Python from https://python.org (tick "Add to PATH" on Windows), or just double-click `index.html`.
- *Port already in use:* use another number, e.g. `8080`.
- *Changes don't appear:* hard refresh (Ctrl+Shift+R, or Cmd+Shift+R on Mac).

**Git / GitHub**
- *`git is not recognized` / `command not found`:* install Git (section 3) and reopen the terminal.
- *`fatal: not a git repository`:* you're in the wrong folder. `cd` into `site`.
- *`remote origin already exists`:* run `git remote set-url origin https://github.com/YOUR-USERNAME/event-website.git`.
- *`Authentication failed` / password rejected:* use a Personal Access Token (step 6 in section 4) or sign in through the browser prompt.
- *`failed to push some refs` / `rejected`:* you ticked "Add a README" on GitHub. Run `git pull origin main --allow-unrelated-histories`, then `git push -u origin main`.
- *`src refspec main does not match`:* run `git add . && git commit -m "First version"` first, then push.
- *`Author identity unknown`:* run the two `git config --global` commands in section 3.

**Vercel**
- *Repository not listed:* Vercel > Settings > Git, or GitHub > Settings > Applications > Vercel > Configure, and grant access to the repo.
- *404 NOT_FOUND:* `index.html` must be at the top level of the repo, not inside an extra folder. If your repo has a `site/` folder inside it, go to Project Settings > General > Root Directory and set it to `site`.
- *Site updates not showing:* confirm the `git push` succeeded, check the Deployments tab for errors, then hard refresh.
- *Domain says "Invalid Configuration":* the DNS record is wrong or still propagating. Re-copy values from Vercel and check for an old duplicate record. Test at https://dnschecker.org.
- *Domain works on `www` but not root (or vice versa):* add both in Vercel, and set one to redirect to the other.
