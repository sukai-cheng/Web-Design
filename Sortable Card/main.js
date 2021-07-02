const dropItems = document.getElementById('drop-items');

new Sortable(dropItems, {
	// 两个items交换效果
	swap: true,
	// 动画的持续时间
	animation: 300,
	// 排序
	chosenClass: "sortable-chosen",
	//drag效果
	dragClass: "sortable-drag",

	// 当drag的时候调整item的css样式
	onMove: function (evt) {
		var el = evt.dragged;
		el.style.transform = 'rotate(-5deg)';
	}
});

