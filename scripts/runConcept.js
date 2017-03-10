const { execSync } = require('child_process');
const { statSync, mkdirSync } = require('fs');
const path = require('path');

const concept = process.argv[2];
if (!concept) {
  console.log('Usage: node runConcept.js <file/to/run>\n');
  process.exit(1);
}

const babelExecutable = path.resolve('.', 'node_modules', '.bin', 'babel');
const conceptPath = path.join('.', 'src', 'js-concepts', `${concept}.js`);
const compiledConceptPath = path.join('.', 'build', 'js-concepts', `${concept}.js`);
const command = `${babelExecutable} ${conceptPath} --out-file ${compiledConceptPath}`;

const buildPath = path.join('.', 'build');
try {
  statSync(buildPath);
} catch (err) {
  mkdirSync(buildPath);
}

const conceptsPath = path.join(buildPath, 'js-concepts');
try {
  statSync(conceptsPath)
} catch (err) {
  mkdirSync(conceptsPath);
}

try {
  execSync(command);
  require(path.join('..', 'build', 'js-concepts', concept));
} catch (err) {
  process.exit(err);
}
