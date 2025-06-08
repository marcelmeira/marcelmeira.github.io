console.log("Welcome, I'm  Marcel Meira!");

function MobileNavigation() {
	const toggleNavigationElt = document.querySelector(".nav-mobile-toggle");
	toggleNavigationElt.addEventListener("click", () => {
		console.info("Mobile Nav Click")
		const navigation = document.querySelector(".navigation-container");
		navigation.classList.toggle("closed");

		if( !navigation.classList.contains("closed") ) {
			toggleNavigationElt.classList.add("close");
		} else {
			toggleNavigationElt.classList.remove("close");
		}
	});
}

document.addEventListener("DOMContentLoaded", () => {
	MobileNavigation();
});