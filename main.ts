// Delete "alot" from the dictionary.
//
// The word a million keyboards write as one word, though it is two.
// Erase it and every "alot" writer finally has to learn it is "a lot".
// This program writes exactly that word - four bytes, no newline -
// to /output/entry.txt, the artifact the judge compares.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "alot";

// The gate: 1-77 chars of UTF-8 text, not only whitespace, one word only.
if (!/^[a-z]+$/.test(WORD) || WORD.length < 1 || WORD.length > 77) {
  throw new Error(`word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Read back what we wrote: the artifact must be exactly the word.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== WORD) {
  throw new Error(`read-back mismatch: ${JSON.stringify(back)}`);
}
console.log(`wrote ${WORD.length} bytes to /output/entry.txt: ${back}`);
