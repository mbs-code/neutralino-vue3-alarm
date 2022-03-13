# Neutralino + Vue 3 + TypeScript + Webpack

- [Build lightweight cross\-platform desktop apps with JavaScript, HTML, and CSS \| Neutralinojs](https://neutralino.js.org/)
- [Vue\.js](https://jp.vuejs.org/index.html)
- [TypeScript: JavaScript With Syntax For Types\.](https://www.typescriptlang.org/)
- [webpack](https://webpack.js.org/)

Combined by `mbs-code`.  


## dev

Execute two commands in parallel.  

```bash
$ cd clent

# run webpack dev server
$ yarn dev

# run neu dev server
$ yarn neu
```


## release

```bash
$ neu build
```

Output to `/dist`  


## Tips

### If you are on Windows, you might get a blank white screen.

You need to run the command.  

ref:  
[Your First Neutralinojs App \| Neutralinojs](https://neutralino.js.org/docs/getting-started/your-first-neutralinojs-app/#step-1-creating-a-new-app)  

### enableInspector does not show "inspect element" window.

You need to install `Webview2`.  

ref:  
- [enableInspector does not show "inspect element" window\. · Issue \#692 · neutralinojs/neutralinojs](https://github.com/neutralinojs/neutralinojs/issues/692)  
- [WebView2 \- Microsoft Edge Developer](https://developer.microsoft.com/ja-jp/microsoft-edge/webview2/)  
