const newPlaceholder = () => {
	const val = document.getElementById("zipCodeDlist").value;
	const field = document.querySelector("#phoneField");
	switch (val) {
		case "Sudan":
			field.setAttribute("pattern", "[0-9]{2}-[0-9]{3}-[0-9]{4}");
			field.setAttribute("placeholder", "12-345-6789");
			break;
		case "United States":
			field.setAttribute("pattern", "[0-9]{3}-[0-9]{3}-[0-9]{4}");
			field.setAttribute("placeholder", "012-345-6789");
			break;
		case "United Kingdom":
			field.setAttribute("pattern", "[0-9]{2}-[0-9]{4}-[0-9]{4}");
			field.setAttribute("placeholder", "0123-4567-8900");
			break;
	}
};

const adminORmain = () => {
	const email = document.querySelector("#emailLogin").value;
	const pass = document.querySelector("#passLogin").value;
	if (email == "admin" && pass == "admin") {
		document
			.querySelector("#loginBtn")
			.setAttribute("href", "./admin.html");
	}
};

const displaySettingsModal = () => {
	const modal = document.querySelector("#settingsModal");
	modal.style.display = "block";
};

const hideSettingsModal = () => {
	const modal = document.querySelector("#settingsModal");
	modal.style.display = "none";
};

const displayHelpModal = () => {
	const modal = document.querySelector("#helpModal");
	modal.style.display = "block";
};

const hideHelpModal = () => {
	const modal = document.querySelector("#helpModal");
	modal.style.display = "none";
};

window.onclick = ev => {
	const helpModal = document.querySelector("#helpModal");
	const settingsModal = document.querySelector("#settingsModal");
	if (ev.target == helpModal) {
		helpModal.style.display = "none";
	} else if (ev.target == settingsModal) {
		settingsModal.style.display = "none";
	}
};

const setLotSpace = x => {
	localStorage.setItem("lotSpace", x);
};

const getLotSpace = () => {
	return localStorage.getItem("lotSpace");
};

const getCurrentTime = () => {
	let date = new Date();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let AMorPM = "AM";
	AMorPM = hour > 12 ? "PM" : "AM";
	if (hour === 0) {
		hour = 12;
	} else if (hour > 12) {
		hour %= 12;
	} else {
		hour = `0${hour}`;
	}
	return `${hour}:${minutes}${AMorPM}`;
};

const getCurrentDate = () => {
	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	return `${day}-${month}-${year}`;
};

const assignValues = () => {
	document.querySelector("#lotSpace").innerHTML += getLotSpace();
	document.querySelector("#curTime").innerHTML = getCurrentTime();
	document.querySelector("#curDate").innerHTML = getCurrentDate();
};
