exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
  	return arr.indexOf(item);
  },

  sum: function(arr) {
  	add = (a, b) => a + b;
  	 return arr.reduce(add);
  },

  remove: function(arr, item) {
  	return arr.filter(element => element !== item);
  },

  removeWithoutCopy: function(arr, item) {
  	var step;
  	for(step = 0; step < arr.length; step++) {
  		index = arr.indexOf(item);
  		if(index === -1)
  			break;

  		arr.splice(index, 1);
  	}
  	return arr;
  },

  append: function(arr, item) {
  	var newArray = new Array();
  	newArray = arr.slice();

  	newArray.push(item);
  	return newArray;
  },

  truncate: function(arr) {
  	arr.pop();
  	return arr;
  },

  prepend: function(arr, item) {
  	newArray = new Array();
  	newArray = arr.slice();
  	newArray.unshift(item);
  	return newArray;
  },

  curtail: function(arr) {
  	arr.shift();
  	return arr;
  },

  concat: function(arr1, arr2) {
  	var arr3 = arr1.concat(arr2);
  	return arr3;
  },

  insert: function(arr, item, index) {
  	arr.splice(index, 0, item);
  	return arr;
  },

  count: function(arr, item) {
  	occurences = arr.filter(element => element === item);
  	return occurences.length;
  },

  duplicates: function(arr) {
  	// (element, index) => 

  },

  square: function(arr) {
  	var newArray = new Array();
  	newArray = arr.slice();
  	arr2 = newArray.map(x => x * x);
  	return arr2;
  },

  findAllOccurrences: function(arr, target) {

  }
};
