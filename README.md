# Yihao Mai's Personal Website

## Notes
1. When develop and run the website locally, the 'homepage' attribute in the package.json file would change our root directory, thus we can not access the image inside the public/images folder. Remove it, then develop.
2. After finish development, add the `homepage` attribute back, git push to main, then do `npm run deploy` - to deploy changes to `gh-pages` branch, which will be hosted
3. "homepage": "https://ma1h01.github.io/website",