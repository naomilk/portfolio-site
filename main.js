const navItems = document.querySelectorAll('nav ul a');

Array.prototype.forEach.call(navItems, function (item) {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        const hash = event.target.hash.substring(1);
        const section = document.getElementById(hash);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

