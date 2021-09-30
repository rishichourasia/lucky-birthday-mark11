const date = document.querySelector(".date-input");
const number = document.querySelector(".number-input");
const btn = document.querySelector(".btn");
const message = document.querySelector(".message");
const gif = document.querySelector(".gif");

gif.style.display = "none";

function remove() {
	message.innerText = "";
	gif.innerHTML = "";
	gif.style.display = "none";
}

btn.addEventListener("click", function () {
	if (number.value == 0) {
		innerMsg("Please Enter Valid Number");
		remove();
	} else if (date.value == "") {
		innerMsg("Please Enter Valid Birth Date");
		remove();
		message.innerText = "";
		gif.innerHTML = "";
		let dateValue = parseInt(date.value.replaceAll("-", ""));
		const numberValue = number.value;

		let sumValue = 0;
		while (dateValue) {
			sumValue += dateValue % 10;
			dateValue = Math.floor(dateValue / 10);
		}

		checkLucky(sumValue, numberValue);
		date.value = "";
		number.value = "";
	}
});

function checkLucky(value, luckyNO) {
	const check = value % luckyNO;
	console.log(check);
	if (check == 0) {
		luckyMsg();
	} else {
		NotluckyMsg();
	}
}

function luckyMsg() {
	gif.style.display = "block";
	innerMsg("Yay 🥳 ! Your birthday is LUCKY ! 🎉 ");
	gif.innerHTML = `<img src="https://media2.giphy.com/media/8Iv5lqKwKsZ2g/giphy.gif?cid=ecf05e47znyvjiydiostfvs3921a09a5c0fbxc8nhco8ffog&rid=giphy.gif&ct=g" alt ="gif file"/>`;
}

function NotluckyMsg() {
	gif.style.display = "block";
	innerMsg("Looks like your Birthday is not Lucky 🥺 , Sorry 😢");
	gif.innerHTML = `<img src="https://media2.giphy.com/media/YLgIOmtIMUACY/giphy.gif?cid=ecf05e47jddgxc7utrk8o59sseq7g2mtj75979687b1gtir4&rid=giphy.gif&ct=g" alt ="gif file"/>`;
}

function innerMsg(msg) {
	message.innerText = msg;
}
