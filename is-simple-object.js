
// is-simple-object @ npm
// To check if a value is a simple object, that is, it's a plain Object, or its prototype is a plain Object.

var is_simple_object = function (value) {
	if (typeof value !== "object" || !value) return false;

	var prototype = Object.getPrototypeOf(value);

	return prototype === null ||
		!("constructor" in prototype) ||		//for Object.create(null)
		(prototype.constructor === Object && is_simple_object(prototype));
}

module.exports = is_simple_object;
