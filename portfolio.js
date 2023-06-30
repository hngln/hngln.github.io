document.addEventListener('DOMContentLoaded', (e)=>{
	setTimeout(()=>{ document.getElementById('splash-screen').classList.toggle('display-none')}, 4950);
	setTimeout(()=>{ document.getElementById('portfolio-content').classList.remove('display-none')}, 4950);
	setTimeout(()=>{ document.getElementById('nav-bar').classList.remove('display-none')}, 4950);
})

window.onscroll = function(){scrollFunction()};

function navBarColor() {
	document.getElementById("nav-bar").style.background = "#dbdcdd";

	document.getElementById("nav-bar__logo").style.color = "#1e3f6a";
	document.getElementById("ham-menu__icon").style.color = "#000000";

	document.getElementById("1").style.color = "#000000";
	document.getElementById("2").style.color = "#000000";
	document.getElementById("3").style.color = "#000000";
	document.getElementById("4").style.color = "#000000";
	document.getElementById("5").style.color = "#000000";
}
function navBarTranparent() {
	document.getElementById("nav-bar").style.background = "none";
		
	document.getElementById("nav-bar__logo").style.color = "#FFFFFF";
	document.getElementById("ham-menu__icon").style.color = "#FFFFFF";		
		
	document.getElementById("1").style.color = "#FFFFFF";		
	document.getElementById("2").style.color = "#FFFFFF";		
	document.getElementById("3").style.color = "#FFFFFF";		
	document.getElementById("4").style.color = "#FFFFFF";		
	document.getElementById("5").style.color = "#FFFFFF";
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  if ($(".navbar-collapse").is(":visible")) {
	$(".navbar-collapse").collapse("hide");
	navBarTranparent()
  }
}
/*function hamMenu(x) {
	var navBar = document.getElementById("nav-bar");

	if ($(".navbar-collapse").is(":visible")) {
		x.classList.toggle("fa-xmark");
		navBar.style.background = "#dbdcdd";

		document.getElementById("nav-bar__logo").style.color = "#1e3f6a";
		
		document.getElementById("1").style.color = "#000000";
		document.getElementById("2").style.color = "#000000";
		document.getElementById("3").style.color = "#000000";
		document.getElementById("4").style.color = "#000000";
		document.getElementById("5").style.color = "#000000";
		document.getElementById("ham-menu__icon").style.color = "#000000";
	}  
	else if ($(".navbar-collapse").is(":hidden")) {
		x.classList.toggle("fa-bars");
			navBar.style.background = "none";
	}
}*/
function hamMenu(x) {

	x.classList.toggle("fa-xmark");
	if (x.classList.contains("fa-xmark")) {
		navBarColor();
	}
	else if (x.classList.contains("fa-bars") && document.documentElement.scrollTop < 20 ) {
		navBarTranparent();
	}
}

function scrollFunction() {
	var navBar = document.getElementById("nav-bar");
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		navBarColor();
	}
	else {
		navBarTranparent();	
	}
}

function hover() {
	if(document.getElementById("1").matches(':hover')){ 
		document.getElementById("1").style.color = "#2c7bca";
	}
	if(document.getElementById("2").matches(':hover')) { 
		document.getElementById("2").style.color = "#2c7bca";
	}
	if(document.getElementById("3").matches(':hover')) { 
		document.getElementById("3").style.color = "#2c7bca";
	}
	if(document.getElementById("4").matches(':hover')) { 
		document.getElementById("4").style.color = "#2c7bca";
	}
	if(document.getElementById("5").matches(':hover')) { 
		document.getElementById("5").style.color = "#2c7bca";
	}
	if(document.getElementById("nav-bar__logo").matches(':hover')) { 
		document.getElementById("nav-bar__logo").style.color = "#2c7bca";
	}

}
function noHover() {
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("1").style.color = "#000000";
		document.getElementById("2").style.color = "#000000";
		document.getElementById("3").style.color = "#000000";
		document.getElementById("4").style.color = "#000000";
		document.getElementById("5").style.color = "#000000";
		document.getElementById("nav-bar__logo").style.color = "#1e3f6a";
	}

	else {	
		document.getElementById("1").style.color = "#FFFFFF";	
		document.getElementById("2").style.color = "#FFFFFF";		
		document.getElementById("3").style.color = "#FFFFFF";		
		document.getElementById("4").style.color = "#FFFFFF";		
		document.getElementById("5").style.color = "#FFFFFF";		
		document.getElementById("nav-bar__logo").style.color = "#FFFFFF";
	}
}

function reveal() { 
	var revealLeft = document.querySelectorAll(".education__animation--left-to-right");
	var revealRight = document.querySelectorAll(".experience__animation--right-to-left");
	var windowHeight = window.innerHeight;
	var elementVisible = 150;

	for (var i = 0; i < revealLeft.length; i++) {
		var elementTopLeft = revealLeft[i].getBoundingClientRect().top;

		if (elementTopLeft < windowHeight - elementVisible) {
			revealLeft[i].classList.add("education__animation--active-left-to-right");
		}
	}
	
	for (var i = 0; i < revealRight.length; i++) {
		var elementTopRight = revealRight[i].getBoundingClientRect().top;

		if (elementTopRight < windowHeight - elementVisible) {
			revealRight[i].classList.add("experience__animation--active-right-to-left");
		} 	
	}
}
window.addEventListener("scroll", reveal);

function sendEmail() {
	window.location = "mailto:t.honglin10@gmail.com";
}

function linkedin() {
	window.open('https://www.linkedin.com/in/tan-hong-lin/', '_blank');
}

function resume() {
	window.open('', '_blank');
}
