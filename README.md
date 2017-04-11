# StarterKit for TypeScript with feeatures

- webpack
- sass
- livereload
- minify
- uglify

## Installation
```
git clone https://github.com/tettori/starter-typescript-webpack.git
cd starter-typescript-webpack
npm install
npm start
```

**Directories**
`dist` directory is for the compiled `.js` and `.css` files.   
`src/components` directory is for `.ts` and `.tsx` files.  
`src/sass` directory is for `.scss` files.


Usage
After the `npm start` command, access `http://localhost:8080/` to browse.
By editing `src/components/*.ts or *.tsx` or `src/sass/*.scss`, you can see the updated result automaticaly.

## Deployment
To get compiled code, run this command.
```
npm run build
```

You can also copy and use `dist` directory independently.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.