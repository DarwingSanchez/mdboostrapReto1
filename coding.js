window.addEventListener("DOMContentLoaded" , () => {
    var element = document.getElementById("custom-navbar");
    document.addEventListener("scroll", () => {
    element.setAttribute("style","background-color: rgba(255,255,255,10)");
    });
});