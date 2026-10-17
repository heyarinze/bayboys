# Bay Boys Book Brunch

A one-page static site. No build step, no dependencies.

```
index.html            the page
styles.css            all styling (light and dark follow the visitor's system)
logo.png              the Boys Book Brunch logo, shown in the hero
logo-mark.png         the logo's B on its own: header mark and high-res tab icon
favicon.ico           browser tab icon (16, 32 and 48 px, the B on its own)
apple-touch-icon.png  iPhone and iPad home-screen icon (the full logo)
og.png                link-preview image for WhatsApp, iMessage, X, LinkedIn
```

To preview locally, open `index.html` in a browser.

## Deploy to Vercel

**From GitHub (recommended, so every push redeploys)**

1. Create a new GitHub repo and add these files at its root.
2. Go to vercel.com/new and import the repo.
3. Framework preset: **Other**. Leave the build command and output directory empty.
4. Click **Deploy**.

**From your terminal**

```
cd bay-boys-book-brunch
npx vercel          # first deploy, answer the setup prompts
npx vercel --prod   # publish to production
```

**Link previews:** the `og:url` and `og:image` tags in `index.html` point at `https://www.boysbookbrunch.com`. If the domain changes, update both; previews need the full address.

To use your own domain, add it in the Vercel project under Settings → Domains.

## Monthly update

Search `index.html` for `UPDATE MONTHLY`. There are two blocks:

1. **Next brunch card**: brunch number, date, place and address, book.
2. **Book of the Month band**: month and theme, title, subtitle, author and year, the short description, and the title on the cover.

Add new picks to **The shelf** by copying an existing `<li>` inside a theme.

## Newsletter

Search for `NEWSLETTER` in `index.html`. Replace the "Sign-up opens soon" line with your provider's embed code or a link to the sign-up page.
