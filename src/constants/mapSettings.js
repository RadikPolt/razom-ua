
let w = window.innerWidth;

const mapSettings = {
	clickableIcons: true,
	streetViewControl: false,
	panControlOptions: false,
	gestureHandling: "cooperative",
	backgroundColor: "transparent",
	mapTypeControl: false,
	zoomControlOptions: {
		style: "SMALL"
	},
	zoom: w < 640 ? 4.6 : w < 1024 ? 5.8 : 6,
	minZoom: 2,
	maxZoom: 20,
};

export { mapSettings};
