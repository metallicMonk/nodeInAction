#!/usr/bin/env node

const fs = require('fs');

const settings = require('./settings.json');

console.log(settings); // {"port":30}

settings.port = 4444;

fs.writeFileSync('./settings.json', JSON.stringify(settings));

const some = require('./some.js');

some.printSettings();

