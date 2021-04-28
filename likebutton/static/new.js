function clicke(){
var count = 1;
var count2 = 0;
	var btn = document.getElementById("btn");
	var disp = document.getElementById("count");
	var icon = document.getElementById("icon")
	icon.innerHTML = `<i class="fas fa-heart"></i>`
	disp.innerHTML = count;
	btn.onclick = function () {
		// count++;
		disp.innerHTML = count;
		if (count2 %2 === 0) {
			disp.innerHTML = count2++;
			icon.innerHTML = `<i class="far fa-heart"></i>`
		} else {
			disp.innerHTML = count2--;
			icon.innerHTML = `<i class="fas fa-heart"></i>`
		}

	}
}
