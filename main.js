/* =====================================
   MOBILE MENU
===================================== */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}



/* =====================================
   CLOSE MENU AFTER CLICK
===================================== */

const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});



/* =====================================
   WHATSAPP SERVICE FORM
===================================== */

const serviceForm =
    document.getElementById("serviceForm");


serviceForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();


        const phone =
            document.getElementById("phone").value.trim();


        const brand =
            document.getElementById("brand").value;


        const problem =
            document.getElementById("problem").value.trim();



        /* Your WhatsApp number */

        const whatsappNumber =
            "918191813081";



        /* WhatsApp message */

        const message =

            "Hello Ajay TV Service,%0A%0A" +

            "I want to book a TV service.%0A%0A" +

            "Name: " +
            encodeURIComponent(name) +

            "%0AMobile: " +
            encodeURIComponent(phone) +

            "%0ATV Brand: " +
            encodeURIComponent(brand) +

            "%0AProblem: " +
            encodeURIComponent(problem);



        /* WhatsApp URL */

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            message;



        /* Open WhatsApp */

        window.open(
            whatsappURL,
            "_blank"
        );

    }
);