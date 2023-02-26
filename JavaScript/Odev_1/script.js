// let username = prompt("İsminizi giriniz");
let username = "M.Emin";
console.log(new Date().getDay())
function clock(){
    let currentDate = new Date(); 
    let currentDay = currentDate.getDate();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSecond = currentDate.getSeconds();

    console.log(currentDay);

    let usernameDOM = document.querySelector("#usernameDOM");
    let currentDateDOM = document.querySelector("#currentDateDOM");
    // console.log(currentDateDOM);
    // console.log(usernameDOM);
    // currentDateDOM.innerHTML = currentDate;  
    currentDateDOM.innerHTML = currentDate;  
    usernameDOM.innerHTML = username;
}
if(username !=""){
    setInterval(clock, 1000);
}else{
   alert("Gerçekten isminiz yok mu?");
   prompt("İsminizi giriniz");
};
