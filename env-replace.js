const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

if (process.argv.length < 5) {
  console.log('Missing arguments: templatePath outputPath envPath');
	process.exit(1);
}

const templateFilePath = path.resolve(process.argv[2]);
const outputFilePath = path.resolve(process.argv[3]);
const envConfig = dotenv.parse(fs.readFileSync(process.argv[4]));
let data = JSON.stringify(require(templateFilePath));

for (let key in envConfig) {
  console.log(key, envConfig[key]);
  data = data.replace(new RegExp(`{{${key}}}`,"g"), envConfig[key]);
}

fs.writeFileSync(outputFilePath, data);
console.log(`Output saved to ${outputFilePath}.`);
