export default function escapeStringRegexp(string) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	// Escape characters with special meaning either inside or outside character sets.
	// Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
	// Escape the null character as `\x00` so it is readable in logs and editors and still valid with the `u` flag.
	return string
		.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
		.replace(/-/g, '\\x2d')
		.replace(/\0/g, '\\x00');
}
