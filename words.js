const wordsArray = [
  "lucky",
  "push",
  "even",
  "found",
  "sugar",
  "especially",
  "lucky",
  "element",
  "smell",
  "property",
  "gate",
  "consist",
  "frog",
  "ill",
  "sign",
  "people",
  "room",
  "fog",
  "mix",
  "arrow",
  "spread",
  "other",
  "put",
  "building",
  "born",
  "classroom",
  "bright",
  "maybe",
  "laugh",
  "trick",
  "stove",
  "shelter",
  "problem",
  "plus",
  "subject",
  "draw",
  "account",
  "silence",
  "discovery",
  "graph",
  "basket",
  "require",
  "policeman",
  "garage",
  "fighting",
  "struggle",
  "slow",
  "tank",
  "eager",
  "greater",
  "badly",
  "it",
  "claws",
  "dawn",
  "from",
  "these",
  "coach",
  "zero",
  "slow",
  "everybody",
  "power",
  "score",
  "shout",
];

// LOGIC FOR END GAME STATS
let str = 0;
for (let i = 0; i < wordsArray.length; i++) {
  str += wordsArray[i].length;
}
let wordsCorrect = 94;
let avgcharpersecond = str / 60;
console.log("avg characters per second -", avgcharpersecond);
console.log("total character length -", str);
console.log("wordsArray length -", wordsArray.length);
console.log("words per second -", parseFloat((wordsCorrect / 60).toFixed(2)));
console.log("wpm -", wordsCorrect);
