// Importing and makes sure there is auto-completion.
import axios from "axios";
import * as fs from "fs/promises";

let response = await axios.get("https://jsonplaceholder.typicode.com/comments");
let emails = {
  count: 0,
  list: [],
};
for (let comment of response.data) {
  // Add to file
  emails.list.push(comment.email);
  // Up a fancy counter
  emails.count++;
}
await fs.appendFile("emails.json", JSON.stringify(emails));
