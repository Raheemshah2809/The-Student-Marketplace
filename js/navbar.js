fetch('./navbar.html').then(function (response) {
    // The API call was successful!
    return response.text();
}).then(function (html) {

    const navbarStylesheet = document.createElement('link');
    navbarStylesheet.rel = 'stylesheet';
    navbarStylesheet.href = 'css/Dashboard.css';

    const boxIcons = document.createElement('link');
    boxIcons.rel = 'stylesheet';
    boxIcons.href = 'https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css';
    document.head.append(navbarStylesheet, boxIcons);

    // This is the HTML from our response as a text string
    const nav = document.createElement('template');
    nav.innerHTML = html;
    document.body.prepend(nav.content.firstChild);

    const scriptDependency = document.createElement('script');
    scriptDependency.src = "/js/tester.js";
    document.body.append(scriptDependency);

}).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
});