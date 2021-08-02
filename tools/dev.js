/*
	A really long and confusing warning message! (Because ANSI codes are used)
*/
console.log("\x1b[0;33mWARNING: Using a development build. If you meant to use a production build, run \x1b[0;32m\"npm run build\"\x1b[0m\x1b[0;33m and then run \x1b[0;32m\"npm run start\"\x1b[0m\x1b[0;33m.\n");

require("./../src/index.js")(); // This seems too easy, but it works!