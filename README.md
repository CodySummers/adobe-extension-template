# adobe-extension-template
Bundling template for adobe extensions

`npm i`

`npm start`

This will start webpack in watch mode and any change will get bundled. 

`npm run deploy:dev`

Make a symbolic link between the build folder and adobe extension folder.
Restart After Effects if needed, by default the extension will be in

`window > extensions > Extension Template` 

If you want to hot reload changes set up an extension that redirects to your localhost settings.
Although I've found when I start using node modules the hot reload breaks.