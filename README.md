# metropol-turizm
This is a placeholder temporary website. Not much to see here, except a tailwind 2, webpack, postcss, sass and typescript setup.

# Requirements
since assets are not always loaded with file-loader, in order to stop copying your assets twice, use nc- prefix with asset file names. e.g. nc-item.jpg will not be copied to assets unless file-loader does it.

tailwindcss intellisense for vs code is recommended

# Notes
Modules need to include html and ts files with the same name. otherwise webpack will not recognize them. You can import other files inside these 3 files.
