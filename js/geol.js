    const geolocate = function () {
        const $status = $("#status");
        const $latitude = $("#latitude");
        const $longitude = $("#longitude");
        const $altitude = $("#altitude");
        const $accuracy = $("#accuracy");
        const $altitudeAccuracy = $("#altitudeAccuracy");
        const $result = $(".result");
        const $trigger = $("#trigger");
        const $timestamp = $("#timestamp");

        const success = (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const altitude = position.coords.altitude ? position.coords.altitude : "N/A";
            const timestamp = new Date(+position.timestamp).toUTCString()
            const accuracy = (position.coords.accuracy / 1609).toFixed(3);
            const altitudeAccuracy = (position.coords.altitudeAccuracy / 1609).toFixed(3);

            $latitude.html(latitude + "&deg;");
            $longitude.html(longitude + "&deg;");
            $timestamp.html(timestamp);
            $altitude.html(altitude);
            $accuracy.html(accuracy + " mile" + (accuracy > 1 ? "s" : ""));
            $altitudeAccuracy.html(altitudeAccuracy + " mile" + (altitudeAccuracy > 1 ? "s" : ""));

            $status.html("");

            $result.show();
            $status.hide();

            $trigger.html("Refresh location");

            console.log(position);
        };

        const error = () => {
            $status.html('Unable to retrieve your location. This may be due to your browser security settings').show();
            $trigger.html("Use").click(function (e) {
                e.preventDefault();
            });
        };

        if (navigator.geolocation) {
            $status.html("Locating...").show();
            $trigger.html("Locating...");
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            $trigger.html("Not supported.");
            $status.html("Geolocation is not supported by your browser.").show();;
        }
    };
    
    window.onload = geolocate();
    