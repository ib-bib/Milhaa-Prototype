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
