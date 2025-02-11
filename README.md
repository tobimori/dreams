# Dreams for Ghost
👻 Dreams is a work-in-progress theme for the Node.js based CMS Ghost. 

Dreams is fully compatible with Ghost 3+ with 100/100 points in [Ghost's GScan](https://gscan.ghost.org/) test.

## Preview
A demo is available under [dreams.moeritz.cc](https://dreams.moeritz.cc/).

## Features
* Logo support
* Featured posts
* Post, Page, Tag & Author pages
* All Koenig editor elements
    * Images with different widths
    * Bookmark card
    * Gallery card
    * Embeds
* All Markdown elements
* Infinite scrolling on post lists
* Commenting with Disqus

## Installation
To install the latest version, head over to the [releases page](https://github.com/tobimori/dreams/releases) and download the latest release.

Then, head over to Ghost Admin and upload the theme on the Design page.

## Configuration
### Disqus

Download the release, unpack it, then open the `post.hbs` file with a text editor of your choice and uncomment the text under 

```
{{!-- Uncomment the code below, if you want to add Disqus Commenting --}}
```

by removing the `{{!--` in front of `<div class="container">` and the `--}}` behind `</script>`.
Then replace `CHANGE-THIS` with your Disqus shortname.

## Theme development
Use the package manager [npm](https://www.npmjs.com/) to install the required packages.
Inside the projects folder, execute:

```bash
npm install
```

To compile the SCSS files, run the following command:

```bash
npm start
```

## Credits
* Photos I used for demonstration purposes were taken from [Unsplash](https://unsplash.com).
* Montserrat - designed by Julieta Ulanovsky, Sol Matas, Juan Pablo del Peral & Jacques Le Bailly - is licensed under the [Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).
* [Fira Code](https://github.com/tonsky/FiraCode) - used for code blocks - is licensed under the [Open Font License](https://github.com/tonsky/FiraCode/blob/master/LICENSE).
* Dreams is inspired by an UI concept by my friend [Florentin](https://twitter.com/florentin) he published [here](https://twitter.com/florentin/status/1031146027334684673).

## License
This theme is released under the Creative Commons Attribution 4.0 License, which means you can:

* Use it for personal stuff
* Use it for commercial stuff
* Change it however you like

Without paying a penny! In exchange, just give me credit and tell your friends about my work :)