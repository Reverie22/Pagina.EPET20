
 addEventListener('DOMContentLoaded', () => {
 const boton_ir_arriba = document.querySelector('#boton11');


 const obtener_pixeles = () => document.documentElement.scrollTop || document.body.scrollTop
const irArriba = () => {
  if (obtener_pixeles() > 0) {
    requestAnimationFrame(irArriba)
    scrollTo (1, obtener_pixeles() - (obtener_pixeles() / 20))
  }
  
}
boton_ir_arriba.addEventListener('click', irArriba,);
})





        


/*alert ("Hola");
var etiquetas = document.createElement("h1");
var contenido = document.createTextNode("Caulher");
var contenido2 = document.createTextNode("Servicios Integrales");
etiquetas.appendChild.contenido;

*/



/*window.status


(function detectSO(){}
var osName = "Desconocido";
if(navigator.userAgent.indexOf("Win") !=1){
    osName = "Windows";
}
if(navigator.userAgent.indexOf("Android") !=1){
    osName = "Android";
}
   if (osName == "Windows"){
       window.location
    }
    else{  
         alert("No tenemos una web")*/