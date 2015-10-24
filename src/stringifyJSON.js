// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

function addQuotes(variable){return "\"" + variable.toString() + "\""}

var stringifyJSON = function(obj) {
	if(typeof(obj) === "function" || obj === undefined){return undefined}
	else if(typeof(obj) === "string"){return  addQuotes(obj) }
	else if(typeof(obj)!== "object"){return obj.toString()}
	else if(obj === null){return 'null'}

	// only array and objects left
	var array = Array.isArray(obj);
	var result = ""; 

	if(array){result += "["}
	else{result += '{'}
	// no elements added yet
	var repeated = false;

	_.each(obj, function(el, key){
		//recursive call
		var recursiveEl = stringifyJSON(el)

		//don't want commas or : for unstringfiable items
		if(recursiveEl){
			// start adding commas after the first object
			if(repeated){result += ","}
			if(!array){result += addQuotes(key) +":"}

			result += recursiveEl;
			repeated = true;		
		}
	})

	if(array){result += "]"}
	else{result += '}'}

	return result
};
