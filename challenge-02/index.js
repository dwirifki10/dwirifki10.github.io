const myNavbar = () => {
	let myIcon = document.getElementById("topNav");
	if ( myIcon.className === "navbar" ){
		myIcon.className += " responsive";
	} else {
		myIcon.className = "navbar";
	}
}

const scrollToAbout = () => {
	const myAbout = document.getElementById("myAbout");
	myAbout.scrollIntoView();
}

const scrollToContact = () => {
	const myContact = document.getElementById("myContact");
	myContact.scrollIntoView();
}

let text = "Saya mahasiswa Politeknik Negeri Jember, jurusan Teknik Informatika angkatan 2019, Saya senang mempelajari programming khususnya Back-end Engineer, salam kenal"
let myTyped = document.getElementById("typed");
var i = 0;

const typing = () => {
	if(i < text.length) {
		myTyped.innerHTML += text.charAt(i);
    	i++
    	setTimeout(typing, 100)
    	if(i == text.length){
    		myTyped.innerHTML += " <i class='fa fa-smile-o'></i>"
    	}
    }
}

(() => {
    typing();
})();

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}