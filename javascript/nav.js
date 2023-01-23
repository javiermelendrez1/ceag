
function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll < 200) {
        navbar.classList.remove('BgColour');

    } else {
        navbar.classList.add('BgColour');

    }
}

window.addEventListener('scroll', scrollValue);
function sendMail() {
    var params = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    const serviceId = 'service_hexj42l';
    const templateId = 'template_fb73fj8';
    console.log((params))
    emailjs.send(serviceId, templateId, params).then(function (res) {
        alert('Email Sent');
    });
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
};

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
    const form = document.getElementById('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        sendMail();
    });
};




