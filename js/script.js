let btn = document.querySelector('button');
let field1 = document.getElementById('field1');
let field2 = document.getElementById('field2');

btn.addEventListener('click', function() {
    let i = 0;
	let interval = setInterval(function() {
		if (i >= field1.value.length) {
			clearInterval(interval);
		} else {
			field2.value += field1.value[i];
			i++;
		}
	}, 50);
});