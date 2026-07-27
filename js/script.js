const mobileMenuButton =
    document.getElementById("mobile-menu-button");

const navigation =
    document.querySelector(".main-navigation");


mobileMenuButton.addEventListener("click", () => {

    navigation.classList.toggle("mobile-navigation");

});