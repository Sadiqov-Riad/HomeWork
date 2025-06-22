function initMap() {
    
    const defaultLocation = { lat: 40.4093, lng: 49.8671 }; // Баку, Азербайджан

    const mapOptions = {
        zoom: 10,
        center: defaultLocation,
        zoomControl: false,
        streetViewControl: false,
        fullscreenControl: false,
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    let marker = null;
    const confirmBtn = document.getElementById('confirmBtn');
    confirmBtn.disabled = true;


    map.addListener('click', function (event) {
        if (marker) marker.setMap(null); 

        marker = new google.maps.Marker({
            position: event.latLng,
            map: map
        });

        confirmBtn.disabled = false;
    });

    // Потверждение местоположения
    confirmBtn.addEventListener('click', async () => {
        if (!marker) return console.error("No marker set on the map");

        const lat = marker.getPosition().lat();
        const lng = marker.getPosition().lng();
        const username = localStorage.getItem('username');

        if (!username) {
            alert("Username not found in localStorage.");
            return;
        }

        try {
            const res = await fetch('/location', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, lat, lng })
            });

            if (!res.ok) throw new Error("Server response was not OK");

            const data = await res.json();
            console.log("Location saved:", data);
            window.location.href = "../weather/weather.html";
        } catch (err) {
            console.error("Failed to submit location:", err);
            alert("Failed to save location.");
        }
    });
}
