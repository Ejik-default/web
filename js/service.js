const orderButtons = document.getElementsByClassName('order-button');
const analyse_info = document.getElementById('analyse_info_form');
const full_form = document.getElementById("full-form");
const close_button = document.getElementById("close-button");
const blur = document.getElementById("blur");
for (let i = 0; i < orderButtons.length; i++) {
    orderButtons[i].addEventListener('click', () => {
        const myValue = orderButtons[i].value;
        analyse_info.value = myValue
        full_form.style.display = 'block';
        blur.style.display = 'block'; // Показываем размытый задний фон
    });
}
close_button.addEventListener('click', () => {
    full_form.style.display = 'none';
    blur.style.display = 'none'; // Скрываем размытый задний фон
});