window.onload = function () {
	var str = "";
	var operators = ["+", "-", "/", "*"];
	function getValue(input) {
		//if clr
		if (input === "clr") {
			str = ""
		}
		else if (input === "del") {
			str = str.slice(0, -1)
		}
		else if (input === ".") {
			!(/\d*\.\d*$/.test(str)) ? str += input : document.querySelector("#comments").innerHTML = "Decimal already applied";
		}

		else if (operators.includes(input)) {
			chk = str.charAt(str.length - 1);
			if (chk === ".") {
				document.querySelector("#comments").innerHTML = "Deimal should be followed by number"
			}

			else {
				operators.includes(chk) ? str = str.slice(0, -1) + input : str += input
			}
		}
		else if (input === "=") {
			document.querySelector("#comments").innerHTML = "Result";
			chk = str.charAt(str.length - 1);
			if (operators.includes(chk) || str.endsWith(".")) {
				str = str.slice(0, -1)
			}
			if (str === "2+2") {
				str = eval(str).toString();
				document.querySelector("#comments").innerHTML = "-1that's 3 quick maths";
			}
			else {
				str = eval(str).toString();
			}
		}
		else{
			str += input
		};
		return str;
	}
	let btn = document.querySelectorAll("button");
	btn.forEach((bb) => {
		bb.addEventListener("click", (tt) => {
			document.querySelector("#comments").innerHTML = "";
			getValue(tt.target.id)
			document.querySelector("#display").innerHTML = str;
		})
	})

};
