const garbage = ["MGMGM", "GM", "PM", "P"],
  travel = [3, 5, 5];
const vechile = ["G", "P", "M"];
let arrayofloc = [];
let totalmin_travel = 0;
let min = 0;
let total_overall = 0;
let index = false;
for (t = 0; t < vechile.length; t++) {
  const truck = vechile[t];
  for (g = garbage.length - 1; g >= 0; g--) {
    for (w = 0; w < garbage[g].length; w++) {
      if (garbage[g][w] === truck) {
        min += 1;
        index = true;
      }
    }
    if (index == true && arrayofloc.length === 0) {
      arrayofloc.push(g);
    }
  }
  for (i = 0; i < arrayofloc[0]; i++) {
    totalmin_travel += travel[i];
  }
  total_overall += totalmin_travel + min;
  min = 0;
  arrayofloc = [];
  index = false;
  totalmin_travel = 0;
}
console.log(total_overall);
