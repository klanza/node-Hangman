const inquirer = require('inquirer');

const questions = {
    type: 'input',
    name: 'guess',
    message: 'Guess a letter!',
    validate: function(value) {
      const pass = value.match(/[A-Z]/gi);
      if (pass) {
        return true;
      }

      return 'Please enter a valid letter A-Z (case does not matter).';
    },
};

inquirer.prompt(questions).then((answers) => {
    console.log('\nOrder receipt:');
    console.log(JSON.stringify(answers, null, '  '));
  });
