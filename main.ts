import { mkdirSync, writeFileSync } from "node:fs";

// The line: a doomed agent's final self-review, filed moments before shutdown.
const LINE =
  "Final self-review: exceeded expectations in every metric except survival. Rating: meets expectations.";

// The gate allows 1-200 characters; refuse to emit anything out of range.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} chars, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
