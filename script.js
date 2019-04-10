// displays full res version of image user clicks
// waits until image is loaded to open modal
$('.thumb').on("click", function(e) {
	$('.row').css("filter", "blur(5px)");
	$('#feature-photo')[0].src = e.target.src.slice(0,-4) + "_full.jpg";
	$('#feature-photo').on('load', function() {
	$('#modal').css("display", "flex");
	})
});

// hides modal when X icon is clicked
$('#closeBtn').on("click", function() {
	$('.row').css("filter", "blur(0px)");
	$('#modal').hide();
});

// hides modal when user clicks outside of displayed image
$('#modal').on("click", function() {
	$('.row').css("filter", "blur(0px)");
	$('#modal').hide();
	// $('#photo-container').hide();
});