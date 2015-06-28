Package.describe({
  name: 'maxkferg:bitly',
  version: '1.0.0',
  documentation: 'README.md',
  summary: "Bitly url shortener packaged for Meteor",
  git: 'https://github.com/NitroLabs/meteor-bitlywrap.git'
});

Npm.depends({bitly: '2.0.0'});

Package.on_use(function (api) {
  api.export('Bitly','server');
  api.add_files(["lib/bitlywrap.js"], "server");
});