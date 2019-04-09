const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//nav buttons

let nav = document.querySelector('nav');
let navColor = document.querySelectorAll('nav a');

let newNavOne = document.createElement('a');
newNavOne.textContent = 'Something';

let newNavTwo = document.createElement('a');
newNavTwo.textContent = 'Something 2';

newNavTwo.setAttribute('style', 'padding-right: 1em;');
nav.appendChild(newNavOne);



let navItem1 = document.querySelector('nav a:nth-child(1)');
navItem1.textContent = siteContent['nav']['nav-item-1'];
navItem1.style.color = 'green';

navItem1.prepend(newNavTwo);

let navItem2 = document.querySelector('nav a:nth-child(2)');
navItem2.textContent = siteContent['nav']['nav-item-2'];
navItem2.setAttribute('style', 'color: green;')

let navItem3 = document.querySelector('nav a:nth-child(3)');
navItem3.textContent = siteContent['nav']['nav-item-3'];
navItem3.setAttribute('style', 'color: green;')

let navItem4 = document.querySelector('nav a:nth-child(4)');
navItem4.textContent = siteContent['nav']['nav-item-4'];
navItem4.setAttribute('style', 'color: green;')

let navItem5 = document.querySelector('nav a:nth-child(5)');
navItem5.textContent = siteContent['nav']['nav-item-5'];
navItem5.setAttribute('style', 'color: green;')

let navItem6 = document.querySelector('nav a:nth-child(6)');
navItem6.textContent = siteContent['nav']['nav-item-6'];
navItem6.setAttribute('style', 'color: green;')

// cta buttons

let ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];

let ctaButtonText = document.querySelector('.cta-text button');
ctaButtonText.textContent = siteContent['cta']['button'];

ctaButtonText.addEventListener('click', yourFunction);

function yourFunction() {
  navItem5.setAttribute('style', 'color: red;')
}



// cta image

let ctaImage = document.querySelector('#cta-img');
ctaImage.src = 'img/header-img.png';


// main content

// features

let featuresHeader = document.querySelector('.top-content .text-content:nth-child(1) h4');
featuresHeader.textContent = siteContent['main-content']['features-h4'];


let featuresContent = document.querySelector('.top-content .text-content:nth-child(1) p');
featuresContent.textContent = siteContent['main-content']['features-content'];

// about

let aboutHeader = document.querySelector('.top-content .text-content:nth-child(2) h4');
aboutHeader.textContent = siteContent['main-content']['about-h4'];

let aboutContent = document.querySelector('.top-content .text-content:nth-child(2) p');
aboutContent.textContent = siteContent['main-content']['about-content'];



// image

let middleImage = document.querySelector('#middle-img');
middleImage.src = 'img/mid-page-accent.jpg';

// three paragraphs

// services

let servicesHeader = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
servicesHeader.textContent = siteContent['main-content']['services-h4'];

let servicesContent = document.querySelector('.bottom-content .text-content:nth-child(1) p');
servicesContent.textContent = siteContent['main-content']['services-content'];

// product

let productHeader = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
productHeader.textContent = siteContent['main-content']['product-h4'];

let productContent = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productContent.textContent = siteContent['main-content']['product-content'];

// vision

let visionHeader = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
visionHeader.textContent = siteContent['main-content']['vision-h4'];

let visionContent = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionContent.textContent = siteContent['main-content']['vision-content'];


// content footer

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

let selectParagraphs = document.querySelectorAll('.contact p');



selectParagraphs[1].textContent = siteContent['contact']['phone'];

let newString = siteContent['contact']['address'];
let newString1 = newString.slice(0, 18);
let newString2 = newString.slice(18, 32);
let brElement = document.createElement('br');
console.log(newString1);
console.log(newString2);

selectParagraphs[0].textContent = siteContent['contact']['address'];
selectParagraphs[2].textContent = siteContent['contact']['email'];


//footer

let footer1 = document.querySelector('footer p');
footer1.textContent = siteContent['footer']['copyright'];
