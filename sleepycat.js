const fs = require('fs');

const Beau = require('../beau');
const yaml = require('js-yaml');

const program = require('commander');

const config = yaml.safeLoad(fs.readFileSync('./example.yaml', 'utf-8'));
const beau = new Beau(config);


program
	.version('0.0.1')
	.option('-r, --request [alias]', `The request's alias`, 'hello')
	.parse(process.argv);

beau.requests.execByAlias(program.request);
