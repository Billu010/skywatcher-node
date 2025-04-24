const fetch = require('node-fetch');

async function getSatellitePosition(satId) {
    const url = `https://api.wheretheiss.at/v1/satellites/${satId}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(`Satellite ${satId} Position: Lat ${data.latitude}, Lon ${data.longitude}`);
}

getSatellitePosition(25544); // ISS
