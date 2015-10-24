// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element){
	if(element === undefined){element = document.body}

	var result = []
	if(_.include(element.classList, className)){
		result.push(element)
	}

	var children = element.childNodes
	if(children.length){
		_.each(children, function(child){
			//Recursive call, hits children and subsequent children
			result.push(...getElementsByClassName(className, child))
		})
	}

	//BASECASE
	else{return result}

	//After finishing the children
	return result
};


/*
document.body, element.childNodes, and element.classList
*/