
// is-simple-object @ npm, to check if a value is a plain Object, or inherited from a plain Object.

var is_simple_object = function (value) {
	if (typeof value !== "object" || !value) return false;

	var prototype = Object.getPrototypeOf(value);
	return prototype === null ||
		(
			(
				prototype.constructor === Object ||
				!("constructor" in prototype)	//for inheriting from Object.create(null)
			) &&
			is_simple_object(prototype)
		);
}

module.exports = is_simple_object;
