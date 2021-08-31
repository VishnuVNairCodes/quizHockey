var readlineSync = require("readline-sync");
var chalk = require("chalk");

var userName = readlineSync.question("May I know your name ? ");
console.clear();
var messageWelcome = "\nWelcome "+chalk.yellow(userName)+`! to 💥 ${chalk.white.bgYellow.bold(" QUIZ ON ")}${chalk.yellow.bgWhite.bold(" HOCKEY ")} 💥\nLet's start the quiz✨\n\n`;
var messageRightAnswer = chalk.bold.green("Right Answer")+ " 😍";
var messageWrongAnswer = chalk.bold.red("Wrong Answer")+ " 💔";
var score = 0;
function scoreMessage(){
   return "Score: "+score;
}

function checkAnswer(question, answer){
  var userAnswer = (readlineSync.question(chalk.bold.blueBright(question)+"\n"));
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    score += 1;
    console.log(messageRightAnswer);
    console.log(chalk.cyan(scoreMessage()));
    console.log("\n");
  }
  else{
    console.log(messageWrongAnswer);
    console.log("Right answer is '"+chalk.green(answer)+"'");
    console.log(chalk.cyan(scoreMessage()));
    console.log("\n");
  }
}

var questionsList = [
  {
    question: "Which among these is the highest governing body of Hockey ?\n\na. International Hockey Federation\nb. World Hockey Federation\nc. Federation of International Hockey\nd. International Hockey Association",
    answer: "a",
  },
  {
    question:  "Total no. of players playing on the pitch in a hockey match is?\n\na. 20\nb. 16\nc. 22\nd. 18",
    answer: "c",
  },
  {
    question: "Which player is allowed to touch the ball with his or her feet during a Hockey match ?\n\na. Goalkeeper\nb. Defender\nc. Centre-forward\nd. Winger",
    answer: "a",
  },
  {
    question: "The dimensions of a Hockey field are ?\n\na. 91.4m X 55m\nb. 92m X 55m\nc. 92.5m X 56m\nd. 91.4m X 56m",
    answer: "a",
  },
  {
    question: "What are the dimensions of the goal at each end of the hockey field ?\n\na. 2.14m X 3.7m\nb. 2.15m X 3.66m\nc. 2.15m X 3.7m\nd. 2.14m X 3.66m",
    answer: "d",
  },
  {
    question: "The distance between the penalty spot and the goal is ?\n\na. 6yrds\nb. 5yrds\nc. 8yrds\nd. 7yrds",
    answer: "d",
  },
  {
    question: "The shooting circle in a Hockey field is ?\n\na. 16yrd from the baseline\nb. 18yrd from the baseline\nc. 17yrd from the baseline\nd. 15yrd from the baseline",
    answer: "a",
  },
  {
    question: "The limit on numbers of substitutions per game is ?\n\na. 5\nb. 7\nc. 9\nd. No limit",
    answer: "d",
  },
  {
    question: "No. of field empires in a match is ?\na. 1\nb. 2\nc. 3\nd. 4",
    answer: "b",
  },
  {
    question: "Each half in a hockey game consist of ?\n\na. 30mins\nb. 35mins\nc. 40mins\nd. 45mins",
    answer: "b",
  },
  {
    question: "When does a player go to the penalty box ?\n\na. When the player gets a yellow card\nb. When the player gets a no card\nc. When the player gets a green card\nd. When the player gets a red card",
    answer: "a",
  },
  {
    question: "When was All India Women's Hockey Federation formed ?\n\na. 1947\nb. 1948\nc. 1949\nd. 1950",
    answer: "a",
  },
  {
    question: "Who is regarded as the best player in history of the sport ?\n\na. Dhyan Chand\nb. Roop Singh\nc. Dhanraj Pillay\nd. Niraj Singh",
    answer: "a",
  },
  {
    question: "Which nation has been crowned as World Champions of Hockey four times ?\n\na. India\nb. Pakistan\nc. Australia\nd. Netherlands",
    answer: "b",
  },
  {
    question: "When did India take part in Olympics for the first time ?\n\na. 1926\nb. 1927\nc. 1928\nd. 1929",
    answer: "c"
  }
];

var highScores = [
  {name: " M Vijayakumar", score: "12"},
  {name: " Pushpalatha S", score: "12"},
  {name: " Aswathy V Nair", score: "12"}
];

var highScore = 0;
var messageHighScores = "";
for (var i=0; i<highScores.length; i++){
  if(highScores[i].score > highScore){
    highScore = highScores[i].score;
  }
  messageHighScores += highScores[i].name+" : "+highScores[i].score+"\n";
}

console.log(messageWelcome);
for (var i=0; i<questionsList.length; i++){
  checkAnswer(questionsList[i].question, questionsList[i].answer);
}

console.log("\n🏅Your final score is ",score,"🏅\n");
if (score >= highScore){
  console.log("You broke the High Score 🔥🔥🔥\nPing me on twitter @_VishnuVNair and I will update the "+ chalk.bold.black.bgWhite(" High Scorers ")+" list ✌\n\n")
}
else if (score >= 11){
  console.log("You are pretty good with your knowledge in hockey!! 🔥\nPing me on twitter @_VishnuVNair and I will update the "+ chalk.bold.black.bgWhite(" High Scorers ")+" list ✌\n\n");
}

console.log(chalk.bold.black.bgWhite(" 🏆   HIGH SCORERS   🏆 "));
console.log(chalk.bold.magentaBright(messageHighScores));