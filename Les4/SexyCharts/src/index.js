import Cleave from "cleave.js";

var cleave = new Cleave(".demoinput", {
  blocks: [2, 2, 2, 3, 2],
});

var cleave = new Cleave(".name", {
  prefix: "STUDENT-",
});

var cleave = new Cleave(".date", {
  date: true,
  datePattern: ["d", "m", "y"],
});

var cleave = new Cleave(".rrn", {
  blocks: [2, 2, 2, 3, 2],
  delimiters: [".", ".", ".", "-"],
});
