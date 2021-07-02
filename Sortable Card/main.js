const dropItems = document.getElementById('drop-items');

new Sortable(dropItems, {
	swap: true,
	animation: 300,
	chosenClass: "sortable-chosen",
	dragClass: "sortable-drag",

	onMove: function (evt) {
		var el = evt.dragged;
		el.style.transform = 'rotate(-5deg)';
		console.log(el.style.transform);
	}
});

