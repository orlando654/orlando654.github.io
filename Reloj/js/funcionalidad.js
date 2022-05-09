function clock (){
    let hora = document.getElementById("hora");
    let minuto = document.getElementById("minuto");
    let segundo = document.getElementById("segundo");
    let ampm = document.getElementById("ampm"); 

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = "AM";

    if (h > 12){
        h = h - 12;
        let am = "PM";
    
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
   


    hora.innerHTML = h;
    minuto.innerHTML = m;
    segundo.innerHTML = s;
    ampm.innerHTML = am;

}


let interval = setInterval(clock,1000);


