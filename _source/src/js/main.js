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

function Zoom() {
	const clickableImages = document.querySelectorAll('.zoom-click');
	const zoomElt = document.querySelector('.zoom');
	const zoomImageElt = zoomElt.querySelector('img');

	if (zoomElt == null || zoomImageElt == null) {
		console.error("Zoom function not enabled");
		return;
	}

	const closeZoom = () => {
		zoomElt.classList.add("is-closed");
	}

	zoomElt.querySelector(".close").addEventListener('click', () => {
		closeZoom();
	});

	document.addEventListener('keydown', function(event) {
		if (event.key === 'Escape') {
			closeZoom();
		}
	});

	if (clickableImages.length > 0) {
		clickableImages.forEach( x => {
			x.addEventListener('click', () => {
				zoomImageElt.src = x.src;
				zoomElt.classList.remove("is-closed");
			});
		})
	}
}

document.addEventListener("DOMContentLoaded", () => {
	MobileNavigation();
	Zoom();
});