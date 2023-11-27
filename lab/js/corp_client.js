const btn_corporative = document.getElementById("cooperate-btn");
const full_form = document.getElementById("full-form");
const close_button = document.getElementById("close-button");
const blur = document.getElementById("blur");

btn_corporative.addEventListener('click', () => {
    full_form.style.display = 'block';
    blur.style.display = 'block'; // Показываем размытый задний фон
});

close_button.addEventListener('click', () => {
    full_form.style.display = 'none';
    blur.style.display = 'none'; // Скрываем размытый задний фон
});