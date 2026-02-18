// This file allows the package to be imported as a module in tools that expect JavaScript.
// It simply provides a side-effect import of the CSS file.
try {
	require("./reset.css");
} catch {
	// ESM environment or other
}
