# svgr-ts-lib

Example ts library using svgr

##Build using tsc

```
npm run build-tsc
```

That works fine, but the compiled Icon.js file still points to
`.scss` and `.svgr` files--not `.css` or `.js`

##Build using webpack

```
npm run build-webpack
```

That bundles everything, but now there are no `.d.ts` definitions

##Hybrid option

Copy the `.d.ts` files from tsc into the webpack `dist` directory?
