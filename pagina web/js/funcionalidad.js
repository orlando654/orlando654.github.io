
document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".menu").classList.toggle("mostrar_menu");
    
}
//efecto paradax
window.onscroll=function (){
    let posicion = window.pageXOffset|| document.documentElement.scrollTop;
    let elemento1= document.getElementById("icon_heart");
    let elemento2 =document.getElementById("icon_fire");
    elemento1.style.bottom=posicion* 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
}

