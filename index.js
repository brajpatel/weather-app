const locationInput = document.getElementById('location-input');
const locationSearch = document.getElementById('location-search');
const errorMsg = document.getElementById('error-msg');

async function getData() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=6a9362f6d5ba45f9ed5420fcab460ff0', { mode: 'cors' })
    const data = await response.json();
}

function displayData(data) {
    const background = document.getElementById('background');
    const location = document.getElementById('location');
    const weatherMain = document.getElementById('weather-main');
    const weatherDesc = document.getElementById('weather-desc');
    const temperature = document.getElementById('temperature');
    const feelsLike = document.getElementById('feels-like');
    const humidity = document.getElementById('humidity');
    const pressure = document.getElementById('pressure');
    const windSpeed = document.getElementById('wind-speed');
}