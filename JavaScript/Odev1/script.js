let username = prompt("İsminizi giriniz");

let days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
function clock(){
    let currentDate = new Date(); 
    let currentMonth = currentDate.getMonth() +1;
    let currentDay = currentDate.getDay();
    let currentHour = currentDate.getHours();
    // Saat, dakika ve saniye 10 dan küçük ise başına 0 ekle
    currentHour<10 ? currentHour = 0 + currentHour : currentHour;
    let currentMinute = currentDate.getMinutes();
    currentMinute<10 ? currentMinute = 0 + currentMinute : currentMinute;
    let currentSecond = currentDate.getSeconds();
    currentSecond<10 ? currentMinute = 0 + currentMinute : currentMinute;

    let usernameDOM = document.querySelector("#usernameDOM");
    let currentDateDOM = document.querySelector("#currentDateDOM");
    currentDateDOM.innerHTML = `${currentHour} : ${currentMinute} : ${currentSecond} ${days[currentDay]}`;  
    usernameDOM.innerHTML = `${username[0].toUpperCase()}${username.slice(1)}`;
}
if(username !=""){
    setInterval(clock, 1000);
}else{
   alert("Gerçekten isminiz yok mu?");
   prompt("İsminizi giriniz");
};
