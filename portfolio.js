document.addEventListener('DOMContentLoaded', (e)=>{
	setTimeout(()=>{ document.getElementById('splash').classList.toggle('display-none')}, 4950);
	setTimeout(()=>{ document.getElementById('allContent').classList.remove('display-none')}, 4950);
	setTimeout(()=>{ document.getElementById('navBar').classList.remove('display-none')}, 4950);
})

window.onscroll = function(){scrollFunction()};
var navBar = document.getElementById("navBar");

function scrollFunction() {
	var navBar = document.getElementById("navBar");
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		navBar.style.background = "#dbdcdd"
		navBar.style.boxShadow = " 0px 0px 10px 0px #dbdcdd";

		document.getElementById("title").style.color = "#1e3f6a";
		
		document.getElementById("1").style.color = "#000000";
		document.getElementById("2").style.color = "#000000";
		document.getElementById("3").style.color = "#000000";
		document.getElementById("4").style.color = "#000000";
		document.getElementById("5").style.color = "#000000";
	}
	else {
		navBar.style.background = "none";
		
		document.getElementById("title").style.color = "#FFFFFF"
		
		document.getElementById("1").style.color = "#FFFFFF";		
		document.getElementById("2").style.color = "#FFFFFF";		
		document.getElementById("3").style.color = "#FFFFFF";		
		document.getElementById("4").style.color = "#FFFFFF";		
		document.getElementById("5").style.color = "#FFFFFF";		

		var elements = document.getElementsByClassName('navbar');
		var len = elements.length;
		for(var i = 0; i < len; ++i) {
			elements[i].style.boxShadow = '';
		}
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
	if(document.getElementById("title").matches(':hover')) { 
		document.getElementById("title").style.color = "#2c7bca";
	}

}
function noHover() {
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("1").style.color = "#000000";
		document.getElementById("2").style.color = "#000000";
		document.getElementById("3").style.color = "#000000";
		document.getElementById("4").style.color = "#000000";
		document.getElementById("5").style.color = "#000000";
		document.getElementById("title").style.color = "#1e3f6a";
	}

	else {	
		document.getElementById("1").style.color = "#FFFFFF";	
		document.getElementById("2").style.color = "#FFFFFF";		
		document.getElementById("3").style.color = "#FFFFFF";		
		document.getElementById("4").style.color = "#FFFFFF";		
		document.getElementById("5").style.color = "#FFFFFF";		
		document.getElementById("title").style.color = "#FFFFFF";
	}
}

function refresh() {
	$(document).ready(function() {
		$('a.menu').click(function(){
			return false;
		})
	})
}

function reveal() { 
	var revealLeft = document.querySelectorAll(".revealLeft");
	var revealRight = document.querySelectorAll(".revealRight");
	var windowHeight = window.innerHeight;
	var elementVisible = 150;

	for (var i = 0; i < revealLeft.length; i++) {
		var elementTopLeft = revealLeft[i].getBoundingClientRect().top;

		if (elementTopLeft < windowHeight - elementVisible) {
			revealLeft[i].classList.add("activeLeft");
		}
	}
	
	for (var i = 0; i < revealRight.length; i++) {
		var elementTopRight = revealRight[i].getBoundingClientRect().top;

		if (elementTopRight < windowHeight - elementVisible) {
			revealRight[i].classList.add("activeRight");
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
	window.open('PDF/Resume_Tan Hong Lin_S10194252.pdf', '_blank');
}
