# Bay Boys Book Brunch

The site at [boysbookbrunch.com](https://www.boysbookbrunch.com): a homepage and a journal of stories. It's built with [Eleventy](https://www.11ty.dev), and Vercel rebuilds and publishes it on every push to `main`.

```
index.html            the homepage (monthly blocks are marked UPDATE MONTHLY)
journal/posts/        journal stories, one Markdown file each
journal/index.njk     the journal front page
journal/section.njk   one page per section (Masculinity, Health, ...)
_includes/            shared page shell, story layout and story card
_data/                site name and address, and the list of sections
styles.css            all styling
images/journal/       images uploaded with stories
images/still-life-*   the hero painting, at 800 and 1200 px
source/               full-size originals (not published)
favicon.ico           browser tab icon (16, 32 and 48 px, the full logo)
icon-192.png          the full logo: header logo (top right) and high-res tab icon
apple-touch-icon.png  iPhone and iPad home-screen icon (the full logo)
og.png                default link-preview image; a story uses its own cover
.pages.yml            settings for the web editor (fields, sections, image folder)
eleventy.config.js    build settings
vercel.json           tells Vercel to run the build and serve _site/
```

## Publishing a story

Stories are written in [Pages CMS](https://pagescms.org), a free web editor that saves straight to this GitHub repo.

**One-time setup**

1. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub.
2. When it asks, install Pages CMS on your GitHub account and give it access to only the `bayboys` repository.
3. Open `bayboys`. **Journal** appears in the sidebar.

**Each story**

1. In **Journal**, add an entry.
2. Fill in the headline, standfirst, section, author, date, and cover image with its description, then write the story.
3. Leave **Draft** on while you work. Saving a draft keeps it off the site.
4. When it's ready, switch **Draft** off and save. It's live about a minute later.

Good to know:

- Every save is a commit to `main`, and every commit to `main` redeploys the site.
- A story's address is `/journal/` plus its headline, for example `/journal/consciencism/`, so two stories can't share a headline.
- Keep cover images under about 1 MB. Landscape works best.
- To add or rename a section, change both `_data/sections.js` and the section list in `.pages.yml`.

## Previewing on your computer

```
npm install
npm start
```

Then open http://localhost:8080. Drafts show up here, but never on the live site.

## Monthly update

1. **RSVP link**: in `_data/site.json`, set `rsvp` to the next brunch's Partiful link. It feeds both RSVP buttons, the one in the header on every page and the one on the brunch card.
2. **Envelope** (the next-brunch card): search `index.html` for `UPDATE MONTHLY`. Set the brunch number on the seal and the date (both the visible text and the `datetime` value).
3. **Book of the Month band**: the second `UPDATE MONTHLY` block in `index.html`. Month and theme, title, subtitle, author and year, and the short description. Put the book's cover in `images/botm/` and point the band's `<img>` at it (Open Library at covers.openlibrary.org is a good free source).

Add new picks to **The shelf** by copying an existing `<li>` inside a theme.

## Newsletter

Search for `NEWSLETTER` in `index.html`. The sign-up form posts to a Google Form: replace `FORM_ID` in the form's `action`, and `entry.NAME_ID` and `entry.EMAIL_ID` with that form's field IDs. Until then the form shows "Sign-up opens soon."

## Link previews

The `og:url` and `og:image` tags point at `https://www.boysbookbrunch.com` (set in `_data/site.json`). If the domain changes, update it there.
