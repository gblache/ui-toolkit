<img src="http://react-bootstrap.github.io/assets/logo.png" height="100" style="margin-top: 10px">


ReactJS & Bootstrap UI Toolkit
---

##### Under Active Development

Requirements:
---

* [Node.js v10+](http://nodejs.org/) ( For Application Development )

If you are using Cordova, you will also need:

* [Cordova v3.8.0+](http://cordova.apache.org/)
* [Xcode](http://docs.phonegap.com/en/3.5.0/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide)
* [Android SDK](http://docs.phonegap.com/en/3.5.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide)


Install:
---

To install `ui-toolkit` locally for development:

```bash
cd /path/to/ui-toolkit
git clone git@github.com:holidayextras/ui-toolkit.git .
npm install
```

Generate & View Documentation
---

You can view the React Components in your browser by generating and viewing the docs:

```bash
cd /path/to/ui-toolkit/docs
npm install && npm start
open http://localhost:4000
```

If you would like to build static HTML files of these docs, use:

```bash
cd /path/to/ui-toolkit/docs
node build.js
```

This will create HTML files you can upload to a remote docs server that does not require Node.

You will only need to upload the following static assets once generated:

+ assets/
+ vendor/
+ index.html
+ components.html
+ custom.html
+ getting-started.html


Grunt Terminal Commands:
---

You can use the following build commands via terminal:

#### Build for Distribution:

The following command will compile Less Styles into a CSS and Concat JS files for Distribution.

This is the most common command you will want to use and is required to view any changed you made in a browser or simulator.

```bash
grunt build:dist
```

#### Create a Major Release:

The following will:

1. Increase the build's major number ( e.g. v __1__.2.3 => v __2__.0.0 )
2. Build & Package Distribution Files
3. Create Tag Branch & Perform a git commit
4. Generated Documentation will be merged into `gh-pages`

```bash
grunt release-major
```

#### Create a Minor Release:

The following will:

1. Increase the build's minor number ( e.g. v 1.__2__.3 => v 1.__3__.0 )
2. Build & Package Distribution Files
3. Create Tag Branch & Perform a git commit
4. Generated Documentation will be merged into `gh-pages`

```bash
grunt release-minor
```

#### Create a Release Patch:

The following will:

1. Increase the build's patch number ( e.g. v 1.2.__3__ => v 1.2.__4__ )
2. Build & Package Distribution Files
3. Create Tag Branch & Perform a git commit
4. Generated Documentation will be merged into `gh-pages`

```bash
grunt release-patch
```