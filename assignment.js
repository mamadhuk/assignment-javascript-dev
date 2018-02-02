function getObjPath(jsObj, path) {
	// split the path 
	var path_fragments = path.split('.')
	var result = jsObj
    // find for valid path
	path_fragments.forEach(function (singlePath) {
		result = result[singlePath]
	})

	if (result) {
		return result
	} else {
		return null
	}
}
