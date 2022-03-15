const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? (Nicknames are also acceptable)", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question("What's an activity you like doing? ", (answer) => {
    console.log(`That's great! ${answer} sounds fun!`);
    rl.question("What do you listen to while doing that? ", (answer) => {
      console.log(`Nice!${answer} is a pretty good song!`);
      rl.question('Which meal is your favourite  ', (answer) => {
        console.log(`${answer} sounds delicious!`);
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          console.log(`Nice! ${answer} sounds like a good idea!`);
          rl.question('Which sport is your absolute favourite?', (answer) => {
            console.log(`${answer} sounds like a fun sport!`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Cool! I wanna try to ${answer}!`);
              rl.close();
            })
          })
        })
      })
    })
  })
});

