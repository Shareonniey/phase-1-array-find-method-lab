const superbowlResults = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]
function superbowlWin(record) {
  const game = record.find(game => game.result === "W");
  return game ? game.year : undefined;
}
console.log(superbowlWin(superbowlResults));
console.log(superbowlWin([]));

