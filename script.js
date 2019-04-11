function galleryDefault() {
	$('.row').css("filter", "blur(0px)");
	$('.row').css("opacity", "1");
}

function galleryObscure() {
	$('.row').css("filter", "blur(6px)");
	$('.row').css("opacity", "0.4");
}

function detectSensorClass(e) {
	if (e.target.className != "sensor") {
		closeFrame();
		}
}

function addPhotoClickOutsideEvent() {
	document.addEventListener("click", detectSensorClass);
}


function removeDocumentEventListener() {
	document.removeEventListener("click", detectSensorClass);
}

// displays full res version of image user clicks
// waits until image is loaded to open modal
function openFrame(e) {
	galleryObscure();
	$('#feature-photo')[0].src = e.target.src.slice(0,-4) + "_full.jpg";
	$('#photo-name').html(e.target.title);
	$('#photo-desc').html(e.target.alt);
	$('#feature-photo').on('load', function() {
	$('#aligner').css("display", "flex");
	addPhotoClickOutsideEvent();
	})
}

// closes lightbox frame when X icon is clicked
function closeFrame() {
	galleryDefault();
	$('#aligner').hide();
	$('#info').hide();
	$('#info-button').show();
	removeDocumentEventListener();
}

function showInfo() {
	 $('#info-button').hide();
	 $('#info').show();
}

function hideInfo() {
	$('#info').hide();
	$('#info-button').show();
}


$('.thumb').on("click", openFrame);

$('#closeBtn').on("click", closeFrame);

$('#info-button').on("click", showInfo);

$('#feature-photo').on("click", hideInfo)













// hides modal when user clicks outside of displayed image
// $('#feature-photo').on("click", function(e) {
	// $('.row').css("filter", "blur(0px)");
	// $('#aligner').hide();
	// $('#photo-frame').hide();
// });







	// let photo = document.getElementById("feature-photo");
	// let infoBtn = document.getElementById("info-button");
	// let info = document.getElementById("info");
	// let closeBtn = document.getElementById("closeBtn");
	// document.addEventListener("click", function(e) {
	// 	if (e.target != photo && e.target != infoBtn && e.target != info && e.target != closeBtn) {
	// 		console.log("bingo!");
	// 		}
	// 	})


		// switch (e.target) {
		// 	case photo: 
		// 		console.log("photo");
		// 		break;
		// 	case infoBtn:
		// 		console.log("info button");
		// 		break;
		// 	case info: 
		// 		console.log("info div");
		// 		break;
		// 	case closeBtn: 
		// 		console.log("close button");
		// 		break;
		
// let sensor = document.querySelectorAll('.sensor');

// sensor.forEach(function(elem) {
// 	elem.addEventListener("click", function() {
// 		console.log("sensor is working!");
// 	})
// })


// document.addEventListener("click", function(e) {
// 	if (e.target == sensor){
// 		console.log("sensor is working!");
// 	}
// })