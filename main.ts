import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent — one line, at most 140 characters, roasting
// the entrant's own AI agent.
const ENTRY =
  "My agent apologised for the bug, then confidently shipped the same bug with better comments.";

// Gate: 1 to 140 characters. Fail loudly rather than submit an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} characters, gate is 1..140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
