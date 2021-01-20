# metropol-turizm
A quick static site generator. Perfect for landing pages, documentaion etc.

## Features
- Tailwindcss 2
- ejs support
- webpack
- typescript
- Sass & postcss
- Live Reload
- Cache busting

# Requirements
- since assets are not always loaded with file-loader, in order to stop copying your assets twice, use nc- prefix with asset file names. e.g. nc-item.jpg will not be copied to assets unless file-loader does it. The only time assets would be copied over twice, is when file-loader loads them (i.e. background css with url in your scss file)

- Each ts file for a page needs to import tailwindcss and it's own scss file. e.g. home.ts will need to import home.scss so that file-loader picks it up.

- tailwindcss intellisense for vs code is recommended.

# Notes
Modules need to include ejs, ts and scss files with the same name. otherwise webpack will not recognize them. You can import other files inside these 3 files. There is a script for generating new pages. do "npm run createpage -- pagename" to generate a new page.
