const path = require("path");
const kebabCase = require("kebab-case");

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const name = kebabCase.reverse(basename);
    const upperCaseName = name.slice(0, 1).toUpperCase() + name.slice(1);
    const exportName = /^\d/.test(upperCaseName)
      ? `Svg${upperCaseName}`
      : upperCaseName;
    return `export { default as SVG${exportName} } from './${basename}'`;
  });
  return exportEntries.join("\n");
}

module.exports = defaultIndexTemplate;
