new Vue({
    el: '#app',
    data: {
        productRange: {
            title: "Our Product Range",
            products: [
                { image: "images/products/backpack-zippers.jpeg", name: "Backpack Zippers", description: "Available in Gun metal, Matte Silver, Black matte, Silver finishes", link: "backpack_zip.html" },
                { image: "images/products/bag-buckles.png", name: "Buckles", description: "Available in Matte gun metal, Pearl Nickel, Matte nickel finishes", link: "buckles.html" },
                { image: "images/products/clothings-zips.png", name: "Garment Zippers", description: "Available in Matte gun metal, Pearl Nickel, Matte nickel finishes", link: "garment_zip.html" },
                { image: "images/products/hard-luggage-zips.png", name: "Hard Luggage Zippers", description: "Available in Matte gun metal, Pearl Nickel, Matte nickel finishes", link: "hardluggage.html" },
                { image: "images/products/labels.png", name: "Labels", description: "Available in Gold, Rose Gold, Silver, Chrome, Gun metal Finishes", link: "labels.html" },
                { image: "images/products/ladies-bag-zip.png", name: "Ladies Bag Zippers", description: "Available in Gold, Rose Gold, Silver, Chrome, Gun metal Finishes", link: "ladiesbag_zipper.html" },
                { image: "images/products/soft-luggage-zips.png", name: "Soft Luggage Zippers", description: "Available in Matte gun metal, Pearl Nickel, Matte nickel finishes", link: "softluggage.html" },
                { image: "images/products/backpack-zippers.jpeg", name: "Backpack Zippers", description: "Available in Gun metal, Matte Silver, Black matte, Silver finishes", link: "backpack_zip.html" },
                { image: "images/products/bag-buckles.png", name: "Buckles", description: "Available in Matte gun metal, Pearl Nickel, Matte nickel finishes", link: "buckles.html" },
                { image: "images/products/clothings-zips.png", name: "Garment Zippers", description: "Available in Matte gun metal, Pearl Nickel, Matte nickel finishes", link: "garment_zip.html" },
                { image: "images/products/hard-luggage-zips.png", name: "Hard Luggage Zippers", description: "Available in Matte gun metal, Pearl Nickel, Matte nickel finishes", link: "hardluggage.html" },
                { image: "images/products/labels.png", name: "Labels", description: "Available in Gold, Rose Gold, Silver, Chrome, Gun metal Finishes", link: "labels.html" },
                { image: "images/products/ladies-bag-zip.png", name: "Ladies Bag Zippers", description: "Available in Gold, Rose Gold, Silver, Chrome, Gun metal Finishes", link: "ladiesbag_zipper.html" },
                { image: "images/products/soft-luggage-zips.png", name: "Soft Luggage Zippers", description: "Available in Matte gun metal, Pearl Nickel, Matte nickel finishes", link: "softluggage.html" },

            ]
        },
        companyStats: {
            title: "Company Statistics",
            stats: [
                { id: 1, label: "Happy Clients", number: 150, icon: "fa-solid fa-smile" },
                { id: 2, label: "Production Capacity", number: 200000, icon: "fa-solid fa-industry" },
                { id: 3, label: "Employee Strength", number: 60, icon: "fa-solid fa-users" },
                { id: 4, label: "Years of Experience", number: 7, icon: "fa-solid fa-briefcase" }
            ]
        },
        howWeWork: {
            title: "How We Work",
            steps: [
                { step: "1", title: "Initial Design", description: "Client will need to provide either drawings, samples, CAD files, or technical specifications to start the development process." },
                { step: "2", title: "Consultation", description: "These specs are sent to our development team for review and advisement on construction methods, price, minimum requirement, and mold fees." },
                { step: "3", title: "3D Design", description: "Our factory will provide a 3D sketch for client’s approval (takes 1-2 days to make the drawing)" },
                { step: "4", title: "Metal Samples", description: "Once the client approves the plastic sample, we will begin the zinc or other metal sampling process, which takes about weeks to deliver." },
                { step: "5", title: "Production", description: "When the metal sample is approved and any molds are made, production begins, which takes approximately 2 weeks." },
                { step: "6", title: "Delivery", description: "Hardware is packed and delivered anywhere in the world with your choice of ocean or air." }
            ]
        }
    },
    mounted() {
        const track = this.$refs.carouselTrack;

        // Pause animation on hover
        track.addEventListener("mouseover", () => {
            track.style.animationPlayState = "paused";
        });

        // Resume animation when not hovered
        track.addEventListener("mouseleave", () => {
            track.style.animationPlayState = "running";
        });
    }
});
function animateStats() {
    const statsSection = document.querySelector('.company-stats');
    const counters = statsSection.querySelectorAll('.stat-number');

    // Add a flag to prevent multiple animations
    if (statsSection.dataset.animated) return;
    statsSection.dataset.animated = 'true';

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 100; // Adjust speed as needed

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

document.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.company-stats');
    const sectionPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition) {
        animateStats();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const landingSection = document.getElementById('landing');
    const images = JSON.parse(landingSection.getAttribute('data-images'));
    let currentImageIndex = 0;

    function changeBackgroundImage() {
        // Set the background image
        landingSection.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        // Update the index to cycle through images
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Change the background image every 5 seconds
    setInterval(changeBackgroundImage, 5000);
    // Set the initial background image
    changeBackgroundImage();
});
