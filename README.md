# Boilerplate

Node/Express + React + Babel/TypeScript

## Getting Started

Clone this repository:

```
git clone git@github.com:reichert621/boilerplate.git
cd boilerplate
```

Install the necessary packages:

```
npm install
```

## Using TypeScript

If you'd like to use TypeScript/TSX instead of JavaScript/Babel, go into `webpack.config.js` and update the `entry` from `'./client/App.js'` to `'./client/App.tsx'`.

That's it!

Feel free to delete all Babel-related dependencies afterward. (For example: the `.babelrc` file, any package with `@babel/*`, and the `babel-loader` used in the Webpack configuration.)

## Using JavaScript with Babel

By default, this project uses the JS app as the entry point, with the `babel-loader` used to parse JSX and other ESNext features. So you don't have to change anything to get up and running!

In this case, feel free to delete all TypeScript-related dependencies. (For example: the `client/tsconfig.json` file, the `typescript` dependency, any dependency with `@types/*`, and the `ts-loader` used in the Webpack configuration.)

## Running the app

Run the server in development mode:

```
npm run server
```

Run the UI in development mode:

```
npm run ui
```

Navigate to the correct port (e.g. `localhost:3000`). You should see something like this:
<img width="659" alt="Screen Shot 2019-06-16 at 4 33 20 PM" src="https://user-images.githubusercontent.com/5264279/59569221-81bfe400-9054-11e9-8753-cfd95b11c833.png">

## Production

Run the server in production mode:

```
npm start
```

Build the UI for production:

```
npm run build
```

## License

[MIT](LICENSE)
