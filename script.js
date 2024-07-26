document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("year");
    yearSpan.textContent = new Date().getFullYear();

    // Slider functionality
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    
    function showNextSlide() {
        slides[currentSlide].classList.remove("current");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("current");
    }

    setInterval(showNextSlide, 5000);

    // Google Map initialization
    function initMap() {
        const locations = [
            {lat: 51.5074, lng: -0.1278}, // London
            {lat: 40.7128, lng: -74.0060}, // New York
            {lat: 35.6895, lng: 139.6917}  // Tokyo
        ];
        
        const map = new google.maps.Map(document.getElementById("googleMap"), {
            zoom: 2,
            center: locations[0]
        });

        locations.forEach(location => {
            new google.maps.Marker({
                position: location,
                map: map
            });
        });
    }

    window.initMap = initMap;
});
