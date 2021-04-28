function clicke(){
var count = 1;
	var btn = document.getElementById("btn");
	var disp = document.getElementById("count");
	var icon = document.getElementById("icon")
	icon.innerHTML = `<i class="fas fa-heart"></i>`
	disp.innerHTML = count;
	btn.onclick = function () {
		count++;
		disp.innerHTML = count;
		if (count %2 === 0) {
			icon.innerHTML = `<i class="far fa-heart"></i>`
		} else {
			icon.innerHTML = `<i class="fas fa-heart"></i>`
		}

	}
}
