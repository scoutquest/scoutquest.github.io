// build-clues.js
import { readFileSync, writeFileSync } from "fs";
import { join, resolve } from "path";

// 0) Pick up a folder argument (or default to the script’s own directory)
const baseDir = process.argv[2]
	? resolve(process.cwd(), process.argv[2])
	: __dirname;

// 0.1) Define where your HTML lives
const htmlDir = join(baseDir, "html");

// 1) Load your base JSON
const raw = readFileSync(join(baseDir, "clues.base.json"), "utf8");
const clues = JSON.parse(raw);

// 2) Inline each HTML snippet from the `html/` folder
clues.forEach((clue) => {
	if (clue.secretText && clue.secretText.endsWith(".html")) {
		const htmlPath = join(htmlDir, clue.secretText);
		clue.secretText = readFileSync(htmlPath, "utf8");
	}
});

// 3) Write out the “built” JSON
writeFileSync(
	join(baseDir, "clues.json"),
	JSON.stringify(clues, null, 2),
	"utf8"
);

console.log(`Built clues.json in ${baseDir}`);
