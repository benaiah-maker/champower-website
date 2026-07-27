const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mainNavigation =
    document.querySelector(".main-navigation");


mobileMenuButton.addEventListener("click", () => {

    mainNavigation.classList.toggle("active");

});