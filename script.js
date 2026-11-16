"use strict";

/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }

});

/* ===========================
   CLOSE MENU AFTER CLICK
=========================== */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

/* ===========================
   STICKY HEADER
=========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#111827";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";

    } else {

        header.style.background = "rgba(17,24,39,.95)";
        header.style.boxShadow = "none";

    }

});

/* ===========================
   ACTIVE MENU
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================
   BOOKING FORM
=========================== */

const bookingForm = document.querySelector(".booking form");

bookingForm.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = bookingForm.querySelectorAll("input, select");

    let valid = true;

    inputs.forEach(input=>{

        if(input.value===""){

            valid=false;

        }

    });

    if(valid){

        alert("Room search completed successfully.");

        bookingForm.reset();

    }else{

        alert("Please fill in all fields.");

    }

});

/* ===========================
   ROOM BUTTON
=========================== */

document.querySelectorAll(".room .btn").forEach(button=>{

    button.addEventListener("click",function(e){

        e.preventDefault();

        alert("Booking page will open soon.");

    });

});

/* ===========================
   GALLERY EFFECT
=========================== */

document.querySelectorAll(".gallery img").forEach(image=>{

    image.addEventListener("click",()=>{

        image.classList.toggle("zoom");

    });

});

/* ===========================
   SCROLL ANIMATION
=========================== */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(
".room,.service,.about,.gallery img,.contact-container div"
).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

/* ===========================
   CURRENT YEAR
=========================== */

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML = `© ${year} Luxury Hotel. All Rights Reserved.`;