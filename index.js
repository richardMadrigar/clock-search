(function showTime() {
  const date = new Date(); //pegando data completa

  this.hours = date.getHours();  //pegando horas
  this.minutes = date.getMinutes(); //pegando minutos

  let hoursFormat = (hours < 10) ? "0" + hours : hours; //passando um 0 antes do numero que ficar com um digito
  let minutesFormat = (minutes < 10) ? "0" + minutes : minutes; //passando um 0 antes do numero que ficar com um digito

  let timeFormat = hoursFormat + ":" + minutesFormat  //criando sequencia da data

  document.getElementById("clockDisplay").innerHTML = timeFormat; //atribuindo ao html

  setTimeout(showTime, 1000); //fazendo a funcao rodar a cada 1s
 
})();


function wellcome() {
  // regras - Bem vindo
  if (hours > 05 && hours < 12) {
    wellcome = "Good morning ❤"
  } else if (hours > 11 && hours < 18) {
    wellcome = "Good afternoon ❤"
  } else {
    wellcome = "Good evening ❤"
  }

  document.getElementById('welcome').innerHTML = wellcome
}
wellcome()


//add IMG na DOM
let wallpaper = document.getElementById("wallpaper");
wallpaper.style = "background-image: url('https://picsum.photos/1920/1080')"

