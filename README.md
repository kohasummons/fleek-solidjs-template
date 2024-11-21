# Solidjs Boilerplate
![Solid Boilerplate](./src/assets/fleek-solidjs.png)


## 🚀 Project Structure

Inside of your Next.js project, you'll see the following folders and files:

```
├ public
│  ├ fleek-logo.png
│  └ fleek-xyz.png
├ src
│  ├  assets
│  │  └ favicon.ico
│  ├ App.jsx
│  ├ App.module.css
│  ├ index.css
│  ├ index.jsx
│  └ solidLogo.svg
├ index.html
├ jsconfig.json
├ package.json
├ postcss.config.js
├ README.md
├ tailwind.config.js
└ vite.config.js

```

If you want to lern more about the `solidjs` you can checkout the [ documentation](https://docs.solidjs.com/).

Any static assets, like images, can be placed in the `public/` directory.


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run serve`      | Preview your build locally, before deploying     |

## ⚡ How to deploy to Fleek

### 1. Create a `fleek.json` config file:
You can configure this site deployment using [Fleek CLI]() and running:
```
 > fleek sites init
   WARN! Fleek CLI is in beta phase, use it under your own responsibility
   ? Choose one of the existing sites or create a new one. › 
   ❯ Create a new site
```
It will prompt you for a `name`, `dist` directory location & `build command`
- `name`: How you want to name the site
- `dist`: The output directory where the site is located, for this template it's `out`
- `build command`: Command to build your site, this will be used to deploy the latest version either by CLI or Github Actions

### 2. Deploy the site
After configuiring your `fleek.json` file, you can deployt the site by running

```
fleek sites deploy
```
After running it you will get an output like this:
```
 WARN! Fleek CLI is in beta, use it at your own discretion
 > Success! Deployed!
 > Site IPFS CID: QmP1nDyoHqSrRabwUSrxRV3DJqiKH7b9t1tpLcr1NTkm1M

 > You can visit through the gateway:
 > https://ipfs.io/ipfs/QmP1nDyoHqSrRabwUSrxRV3DJqiKH7b9t1tpLcr1NTkm1M
 ```

### Extra features
- **Continuous Integration (CI):** `fleek sites ci` [Documentation.](https://docs.fleek.xyz/services/sites/#continuous-integration-ci)
- **Adding custom domains:** `fleek domains create` [Documentation.](https://docs.fleek.xyz/services/domains/)


## 👀 Want to learn more?

Feel free to check [Solidjs documentation](https://docs.solidjs.com/) or visit the solidjs [playground](https://playground.solidjs.com).