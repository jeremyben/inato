import { Drug, Pharmacy } from "./pharmacy.js";
import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40)
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
try {
  fs.writeFileSync("output-received.txt", log.toString());
  console.log("success");
} catch (error) {
  console.log("error");
}
/* eslint-enable no-console */
