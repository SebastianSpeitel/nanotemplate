# nanotemplate
Minimalistic es6 template compiler producing reusable modules

# Examples

## HTML

`tsc example/html/index.ts`

`node example/html/index.js`

```html
<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <title>Generated from nanotemplate</title>
</head>
<body>
  <h1>Headline</h1>
  <article>
  <h2>First</h2>
  <p>Lorem</p>
  <img src="https://picsum.photos/200" />
</article><article>
  <h2>Second</h2>
  <p>Ipsum</p>
  
</article>
</body>
</html>
```
