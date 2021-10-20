# is-simple-object
to check if a value is a plain Object, or inherited from a plain Object.

# Install
```
npm install is-simple-object
```

# Usage
```javascript
var is_simple_object= require("is-simple-object");

assert(is_simple_object({}));					//true
assert(is_simple_object(new Object()));			//true

assert(is_simple_object(Object.create(null)));	//true, inherited object, ref. Object.create().
assert(is_simple_object(Object.create({})));	//true
assert(is_simple_object(Object.create(new Object())));	//true
assert(is_simple_object(Object.create(Object.create(null))));		//true
assert(is_simple_object(Object.create(Object.create({}))));			//true
assert(is_simple_object(Object.create(Object.create(new Object()))));		//true

assert(!is_simple_object(Object.create([])));				//false, the ancestor is not simple.
assert(!is_simple_object(Object.create(new Array())));		//false
assert(!is_simple_object(Object.create(new Date())));		//false
assert(!is_simple_object(Object.create(/reg/)));			//false
assert(!is_simple_object(Object.create(Object.create([]))));		//false
assert(!is_simple_object(Object.create(Object.create(new Date()))));		//false

assert(!is_simple_object(null));		//false
assert(!is_simple_object(undefined));	//false
assert(!is_simple_object(123));			//false
assert(!is_simple_object("abc"));		//false
assert(!is_simple_object(true));		//false
assert(!is_simple_object(false));		//false
assert(!is_simple_object(new Date()));	//false
assert(!is_simple_object(123));			//false
assert(!is_simple_object(new Number(5)));		//false
assert(!is_simple_object([]));			//false
assert(!is_simple_object(new Array(1, 2)));		//false
assert(!is_simple_object(/reg/));		//false
assert(!is_simple_object(new RegExp("reg")));	//false
assert(!is_simple_object(function () { }));		//false

var func1 = function () { };
assert(!is_simple_object(new func1()));						//false
assert(!is_simple_object(Object.create(new func1())));		//false

func1.prototype = {};
assert(is_simple_object(new func1()));						//!!! true, it's just like Object.create({})
assert(is_simple_object(Object.create(new func1())));		//!!! true

func1.prototype = [];
assert(!is_simple_object(new func1()));						//false
assert(!is_simple_object(Object.create(new func1())));		//false

func1.prototype.constructor = Object;
assert(!is_simple_object(new func1()));						//false
assert(!is_simple_object(Object.create(new func1())));		//false

var o2 = [];
o2.constructor = Object;
assert(!is_simple_object(o2));								//false
assert(!is_simple_object(Object.create(o2)));				//false

```
