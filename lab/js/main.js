const desktop_dropdown_content = document.getElementById("dropdown-content");
const desktop_dropdown = document.getElementById("dropdown");

function dropdown_color_changer_mouse_over() {
    desktop_dropdown.style.backgroundColor = "#f09fe4"
};

function dropdown_color_changer_mouse_out() {
    desktop_dropdown.style.backgroundColor = "#5262ad"
};

const mobile_dropdown_content = document.getElementById("mobile-dropdown-content");
const mobile_dropdown = document.getElementById("mobile-dropdown-1");
const mobile_dropdown_btn = document.getElementById("dropdown-btn");
let dropdown_mobile_counter = 0;

function mobile_dropdown_function() {
    if (dropdown_mobile_counter === 0) {
        mobile_dropdown_content.style.display = "list-item";
        mobile_dropdown.style.backgroundColor = "#f09fe4";
        mobile_dropdown_btn.style.backgroundColor = "#f09fe4";
        dropdown_mobile_counter = 1;
    } else {
        mobile_dropdown_content.style.display = "none";
        mobile_dropdown.style.backgroundColor = "#5262ad";
        mobile_dropdown_btn.style.backgroundColor = "#5262ad";
        dropdown_mobile_counter = 0;
    }
}

const burger_menu = document.getElementById("tayler-szirden");
const open_button = document.getElementById("burger-knopka");
let counter_of_fat_clicks = 0;

open_button.addEventListener("click", function () {
    if (counter_of_fat_clicks === 0) {
        burger_menu.style.display = "block";
        counter_of_fat_clicks++;
    } else {
        burger_menu.style.display = "none";
        counter_of_fat_clicks = 0;
    }
});