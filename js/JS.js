console.log("holas")


        /*CARROUSEL*/
        window.addEventListener('load', function() {
          console.log("carga");
          var imagenes = [];
          imagenes[0] = 'imagenes/Torre1.jpg';
          imagenes[1] = 'imagenes/Torre2.jpg';
          imagenes[2] = 'imagenes/Torre3.jpg';
          imagenes[3] = 'imagenes/Torre4.jpg';
          imagenes[4] = 'imagenes/Torre5.jpg';
          imagenes[5] = 'imagenes/Torre6.jpg';
          imagenes[6] = 'imagenes/Torre10.jpg';
          imagenes[7] = 'imagenes/Torre22.jpg';
          imagenes[8] = 'imagenes/Torre18.jpg';
    
          var IndiceImagenes = 0;
          function CambiarImagenes() {
    
            document.slider.src = imagenes [IndiceImagenes];
            if (IndiceImagenes < 8) {
              IndiceImagenes++ ;
            } else{
              IndiceImagenes = 0;
            }
    
            
          }
          setInterval(CambiarImagenes, 2000)
        });

        console.log("holas")


                      /*CARROUSEL HORIZONTALES*/
                      window.addEventListener('load', function() {
                        console.log("carga");
                        var imagenesH = [];
                        imagenesH[0] = 'imagenes/Torre9.jpg';
                        imagenesH[1] = 'imagenes/Torre11.jpg';
                        imagenesH[2] = 'imagenes/Torre12.jpg';
                        imagenesH[3] = 'imagenes/Torre13.jpg';
                        imagenesH[4] = 'imagenes/Torre14.jpg';
                        imagenesH[5] = 'imagenes/Torre15.jpg';
                        imagenesH[6] = 'imagenes/Torre19.jpg';
                        imagenesH[7] = 'imagenes/Torre20.jpg';
                        imagenesH[8] = 'imagenes/Torre21.jpg';
                  
                        var IndiceImagenesH = 0;
                        function CambiarImagenesH() {
                  
                          document.slider2.src = imagenesH [IndiceImagenesH];
                          if (IndiceImagenesH < 8) {
                            IndiceImagenesH++ ;
                          } else{
                            IndiceImagenesH = 0;
                          }
                  
                          
                        }
                        setInterval(CambiarImagenesH, 2000)
                      });
                  
    









/* addEventListener('DOMContentLoaded', () => {
 const boton_ir_arriba = document.querySelector('#boton11');


 const obtener_pixeles = () => document.documentElement.scrollTop || document.body.scrollTop
const irArriba = () => {
  if (obtener_pixeles() > 0) {
    requestAnimationFrame(irArriba)
    scrollTo (1, obtener_pixeles() - (obtener_pixeles() / 20))
  }
  
}
boton_ir_arriba.addEventListener('click', irArriba,); 
})*/





        


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