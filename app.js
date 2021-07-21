const fs = require('fs');

const generatePage = require('./src/page-template.js');

// var profileDataArgs = process.argv.slice(2, process.argv.length);

const profileDataArgs = process.argv.slice(2);

const [Name,github] = profileDataArgs;

// const Name = profileDataArgs[0];

// const github = profileDataArgs[1];




fs.writeFile('./index.html', generatePage(Name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});


