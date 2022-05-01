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

document.addEventListener('DOMContentLoaded', function () {
    const theme = localStorage.getItem('theme');
    if (theme) {
        const toggleSwitcher = document.querySelector('.toggle-switch');
        if (toggleSwitcher && theme === 'light') {
            toggleSwitcher.click();
        }
    }
});
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const prefersDarkScheme = e.matches ? "dark" : "light";
        document.body.classList.toggle("dark", prefersDarkScheme === "dark");
    });

// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// window.matchMedia('(prefers-color-scheme: dark)').addEventListener(function (e) {
//     if (prefersDarkScheme.matches) {
//         document.body.classList.add("dark");
//     } else {
//         document.body.classList.remove("dark");
    
//     }
// });



// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('theme', event => {
//     const prefersDarkScheme = event.matches ? "dark" : "light";
//     if (prefersDarkScheme.matches) {
//         document.body.classList.add("dark");
//     } else {
//         document.body.classList.remove("dark");
    
//     }
// });
