const randomInRange = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};
var name = prompt("Welcome WISEONE, What is your name?");

console.log("welcome " + name + ", nice to meet you.");

var ready = prompt("Are you ready to play, " + name + " ? Select yes or no. ");

if (ready === "yes") {
  console.log("lets begin " + name);

  console.log(
    "this is a number guessing game, you play by guessing a number within a range of numbers. if correct you move to the next stage, if wrong you crash out"
  );

  var stage1 = parseInt(prompt("Stage 1, select a number between 1 and 2"));
  if (stage1 === randomInRange(1, 2)) {
    var score = 1;
    console.log("congratulations you got it right" + " your score is " + score);

    var stage2 = parseInt(prompt("Stage 2. guess a number between 1 and 3"));
    if (stage2 === randomInRange(1, 3)) {
      var stage2score = score + 1;
      console.log(
        "congratulations you got it right + your score is " + stage2score
      );

      var stage3 = parseInt(prompt("stage3, guess a number between 1 and 4 "));
      if (stage3 === randomInRange(1, 4)) {
        var stage3score = stage2score + 1;
        console.log(
          "congratulations you got it right + your score is " + stage3score
        );

        var stage4 = parseInt(
          prompt("stage4, guess a number between 1 and 5 ")
        );
        if (stage4 === randomInRange(1, 5)) {
          var stage4score = stage3score + 1;
          console.log(
            "congratulations you got it right + your score is " + stage4score
          );

          var finalstage = parseInt(
            prompt(
              "congratulations " +
                name +
                "you made it to the final stage ,select a number from 1 to 5"
            )
          );
          if (finalstage === randomInRange(1, 6)) {
            var finalscore = stage4score + 1;
            console.log(
              "hurray, you completed the game, your final score is " +
                finalscore
            );
          } else {
            console.log(
              "sorry you got it wrong, try again. your score is " + stage4score
            );
          }
        } else {
          console.log(
            "sorry you got it wrong. try again, your score is " + stage3score
          );
        }
      } else {
        console.log(
          "sorry you got it wrong, try again. your score is " + stage2score
        );
      }
    } else {
      console.log("sorry you got it wrong, try again");
    }
  } else {
    console.log("ishh, sorry you were wrong try again.");
  }
} else {
  console.log("ok " + name + " next time then, bye bye");
};
