# Antipode Finder

## About the project
This project aims at finding the antipodes (the other side of the world) of any place on Earth.

The Left Map presents the place for which you want to find the antipodal point. The Right Map shows the antipodal point for the selected location on the left map.
Type in the search box the country, city, address, zip code or geographical coordinates, hit enter to see the other side of the world which will be represented on Right Map.

You can check the antipode of your current location by clicking on the gps icon on the bottom right of the left map.

Both maps can be moved and zoomed in and out. Below each map you can view the selected location address and geographical coordinates (latitude and longitude).

Antipode of any location is calculated using the below Javascript helper function:
```js
function getAntipodeLat(lat) {
  return lat * -1;
}
```
```js
function getAntipodeLng(lng) {
  return lng > 0 ? lng - 180 : lng + 180;
}
```
## Stack used
React-leaflet - React components for 🍃 Leaflet maps<br />
leaflet-geosearch - For searching country, city, address, zip code or geographical coordinates<br />
leaflet-control-geocoder - To get address from  lat lng<br />
create-react-app - ReactJS Starter kit

## Getting started

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
