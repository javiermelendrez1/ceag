
function scrollValue() {
    var navbar = document.getElementById('navbar');
    var navbarImg = document.getElementById('navBarImg');
    var scroll = window.scrollY;
    if (scroll < 200) {
        navbar.classList.remove('BgColour');
        navbarImg.classList.remove('bg-opacity-25');
        navbarImg.classList.remove('bg-light');
    } else {
        navbar.classList.add('BgColour');
        navbarImg.classList.add('bg-opacity-25');
        navbarImg.classList.add('bg-light');

    }
}

window.addEventListener('scroll', scrollValue);

window.onload = function () {
    const copyright = document.getElementById('copyright');
    console.log(copyright);
    copyright.textContent = `© ${new Date().getFullYear()} CEAG Electric Company, Inc`

    const button = document.getElementById('menuButton');
    button.addEventListener('click', function () {
        var navbar = document.getElementById('navbar');
        if (navbar.classList.contains('BgColour') && window.scrollY < 200) {
            navbar.classList.remove('BgColour');
        } else {
            navbar.classList.add('BgColour');
        }
    })
    
};



function sendMail() {
    var params = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').valu
    };
    const serviceId = 'service_2m23p7o';
    const templateId = 'template_x34mbk6';
    emailjs.send(serviceId, templateId, params).then(function (res) {
        alert('Email Sent');
        });
};
