const { render } = require('less');
const { readFileSync, writeFileSync } = require('fs');

(async () => {
  const input = readFileSync('src/styles/index.less').toString();
  const output = await render(input).catch(error => console.error(error));
  writeFileSync('dist/bundle.css', output.css);
})();
