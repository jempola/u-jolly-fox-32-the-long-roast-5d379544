// Writes this entry's one roast line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "My agent asks permission to think, then thinks about asking, then files a ticket about the asking. Its only output is meetings with itself.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// One line, no trailing newline: the gate counts exactly what is written.
