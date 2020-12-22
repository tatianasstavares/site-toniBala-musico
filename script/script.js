const modalButton = document.querySelector(".contact-btn")
const closeButton = document.querySelector(".close-modal")
const modalBg = document.querySelector(".modal-bg")

const openModal = () => {
    modalBg.classList.add("modal-active");
}

const closeModal = () => {
    modalBg.classList.remove("modal-active");
}

modalButton.addEventListener("click", openModal)
closeButton.addEventListener("click", closeModal)

$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});
