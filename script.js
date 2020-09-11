const btnShowForm = document.querySelector('.button');
const form = document.querySelector('.register__form');
const overlay = document.querySelector('.modal-overlay');
const formClose = form.querySelector('.form__close');

btnShowForm.onclick = function () {
    form.classList.remove('form--hide');
    form.classList.add('form--show');
    overlay.classList.add('overlay-show');
}
formClose.onclick = function () {
    closeForm();
}
overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    closeForm();
});
const closeForm = function () {
    form.classList.remove('form--show');
    form.classList.add('form--hide');
    overlay.classList.remove('overlay-show');
}
window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
        evt.preventDefault();
        if (form.classList.contains("form--show")) {
            closeForm();
        }
    }
});

var element = document.getElementById('tel');
var maskOptions = {
    mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);