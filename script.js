function submit(){
    alert("Thank you for submitting a recommendation!");
}
// Check if the user has scrolled beyond a specific threshold and show the button accordingly
window.onscroll = function() {
var scrollBtn = document.querySelector(".scroll-up-btn");
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
scrollBtn.classList.add("show-scroll-btn");
} else {
scrollBtn.classList.remove("show-scroll-btn");
}
};

// Scroll to the top of the page when the button is clicked
document.querySelector(".scroll-up-btn").addEventListener("click", function(e) {
e.preventDefault();
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
});