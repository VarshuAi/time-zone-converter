
            function updateTz() {
                const now = new Date();
                document.getElementById('tz-time').innerText = "UTC Time: " + now.toUTCString().split(' ')[4];
            }
            setInterval(updateTz, 1000);
            updateTz();
        