const o = {name: 'Hallo, Stammtisch', values: [1, 4, 6, 4]};

function sum(array) {
	return array.reduce(function(item, acc) {
		return item + acc;
	}, 0);
}

console.log(o.name);
console.log(sum(o.values));

console.log('window', typeof window);
console.log('document', typeof document);

setTimeout(function() {
  console.log('5s later');
}, 5000);