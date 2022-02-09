const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

    let dark = localStorage.getItem('dark');


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
        localStorage.setItem('theme', 'dark');
    } else {
        modeText.innerText = "Dark mode";
        localStorage.setItem('theme', 'light');

    }
});

document.addEventListener('DOMContentLoaded', function() {
    const theme = localStorage.getItem('theme');
    if(theme) {
        const toggleSwitcher = document.querySelector('.toggle-switch');
        if(toggleSwitcher && theme === 'dark') {
            toggleSwitcher.click();
        }
    }
});