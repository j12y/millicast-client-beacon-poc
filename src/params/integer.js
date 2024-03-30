
// This is a route matching function to test that
// a URL parameter matches a numeric identifier.
export function match(param) {
    console.log("Path match attempt:");
    console.log(param);
	return /^\d+$/.test(param);
}