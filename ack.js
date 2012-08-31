


var ack = function ack(m, n) {
	if (m == 0) {
		return n + 1;
	} else if (n == 0) {
		return ack(m - 1, 1);
	} else {
		return ack(m - 1, ack(m, n - 1));
	}
}


// console.log("A(2, 2) = " + ack(2, 2));
console.log("A(4, 1) = " + ack(4, 1));


