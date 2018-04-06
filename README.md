# gulp-jade-sass template

An automated build environment for static websites making front-end development a breeze.

## Quick Start

Install dependencies
```bash
$ npm install
```

Start tasks for development
```bash
$ gulp dev
```

Open your web browser and navigate to [http://localhost:3000](http://localhost:3000)

---

## Directory Layout

    assets/           --> Contents are compiled, minified, copied, etc.. to the public directory
      images/
      fonts/
      js/               --> Javascript files
      sass/             --> Sass files
      data/             --> Json, HTML data
      media/            --> video, sound
    bower.json        --> For bower to install bower components
    gulp/
      tasks/            --> Individual task files
      util/             --> Helpers
      config.js         --> File Src and dest configuration
    gulpfile.js
    package.json      --> For npm to install node modules
    public/           --> Static assets. Generated files are added here. No work should be done in this directory
    views/            --> Jade files
      layout/layout.jade       --> Doctype, html, head, body template
      index.jade        --> Main page
      block/         --> View block