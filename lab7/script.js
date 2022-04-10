const city1 = document.getElementById("weather")
const city2 = document.getElementById("newWeather")
let res=[];
const last = document.getElementById("hid")
let city ="Москва"

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=6e39d0c6204167c2b237300957bfaec3`)
    .then((response)=>{
        return response.json();
    })
    .then((data) => {
      console.log(data);
      res = `<h4 class='new'><h1 class="name">${data.name}</h1><div class="temp">Температура: ${data.main.temp} &deg;C (${data.weather[0].description})</div><div class="weath">Скорость ветра: ${data.wind.speed} м/с</div><div class="pres">Давление: ${Math.round(Number(data.main.pressure) * 0.75)} мм.рт.ст.</div><img class="imag" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></img></h4>`
      last.insertAdjacentHTML('beforeend', res)
    });
city1.addEventListener("change",() => {
    city = city1.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=6e39d0c6204167c2b237300957bfaec3`)
    .then((response)=>{
        return response.json();
    })
    .then((data) => {
        if (data.cod == 404){ alert("Введены недопустимые данные"); }
        else{
        document.querySelector('.name').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = 'Температура: '+ data.main.temp+'&deg; C'+' ('+data.weather[0].description+')';
        document.querySelector('.weath').innerHTML = 'Скорость ветра: '+data.wind.speed+' м/с';
        document.querySelector('.pres').innerHTML = 'Давление: '+Math.round(Number(data.main.pressure) * 0.75)+' мм.рт.ст.';
        document.querySelector('.imag').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }});
    city1.value = '';
} );



