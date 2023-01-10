const locationInput = document.getElementById('location-input');
const locationSearch = document.getElementById('location-search');
const errorMsg = document.getElementById('error-msg');
const infoContainer = document.getElementById('info-container');
const overlay = document.getElementById('overlay');

async function getData() {
    overlay.style.display = 'block';

    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=6a9362f6d5ba45f9ed5420fcab460ff0&units=metric', { mode: 'cors' })
    const data = await response.json();

    displayData(data);

    overlay.style.display = 'none';
}

getData();

locationSearch.addEventListener('click', async () => {
    infoContainer.classList.remove('animate');
    overlay.style.display = 'block';

    let location = locationInput.value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6a9362f6d5ba45f9ed5420fcab460ff0&units=metric`, { mode: 'cors' })
    const data = await response.json();

    if(data.hasOwnProperty('message') && data.message !== 0) {
        errorMsg.textContent = data.message.slice(0, 1).toUpperCase() + data.message.slice(1) + ', please try again!';
        overlay.style.display = 'none';
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

    location.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}, ${data.sys.country}`;
    weatherMain.textContent = data.weather[0].main;
    weatherDesc.textContent = data.weather[0].description.slice(0, 1).toUpperCase() + data.weather[0].description.slice(1);
    temperature.innerHTML = `${data.main.temp} &deg;C`;
    feelsLike.innerHTML = `${data.main.feels_like} &deg;C`;
    humidity.innerHTML = `${data.main.humidity}%`;
    pressure.innerHTML = `${data.main.pressure}mb`;
    windSpeed.innerHTML = `${data.wind.speed}m/s`;

    switch(data.weather[0].main) {
        case 'Clear':
            background.style.backgroundImage = 'url(./images/clear-sky.jpg)'
            break;

        case 'Clouds':
            background.style.backgroundImage = 'url(./images/cloudy.jpg)'
            break;

        case 'Rain':
            background.style.backgroundImage = 'url(./images/rain.jpg)'
            break;
    }

    infoContainer.classList.add('animate');
}
