const locationInput = document.getElementById('location-input');
const locationSearch = document.getElementById('location-search');
const errorMsg = document.getElementById('error-msg');
const infoContainer = document.getElementById('info-container');
const overlay = document.getElementById('overlay');

async function getData() {
    overlay.style.display = 'block';

    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=6a9362f6d5ba45f9ed5420fcab460ff0', { mode: 'cors' })
    const data = await response.json();

    console.log(data)
    displayData(data);

    overlay.style.display = 'none';
}

getData();

locationSearch.addEventListener('click', async () => {
    overlay.style.display = 'block';
    infoContainer.classList.remove('animate');

    let location = locationInput.value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6a9362f6d5ba45f9ed5420fcab460ff0`, { mode: 'cors' })
    const data = await response.json();

    if(data.hasOwnProperty('message') && data.message !== 0) {
        errorMsg.textContent = data.message.slice(0, 1).toUpperCase() + data.message.slice(1) + '!';
    }
    else {
        errorMsg.textContent = '';
        displayData(data);
    }

    overlay.style.display = 'none';
})

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

    infoContainer.classList.add('animate');
}