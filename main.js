const navItems = document.querySelectorAll('nav ul a');

Array.prototype.forEach.call(navItems, function (item) {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        const hash = event.target.hash.substring(1);
        const section = document.getElementById(hash);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});


// my javascript

const arrowButton = document.getElementById('arrow-button')
const contactMenu = document.getElementById('contact-menu')

function showItems (){
    contactMenu.classList.remove('hidden');
};

arrowButton.addEventListener('click', showItems);

