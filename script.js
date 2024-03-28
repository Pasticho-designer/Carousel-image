var index = 0;


 
carousel = (direccion) => {

    index += direccion;

    var images = document.getElementsByClassName('contenedor_imagen');
    var puntos = document.getElementsByClassName('punto');

    for (i = 0; i < images.length; i++) 
        images[i].style.display = "none";

   
    if (index > images.length - 1) 
    index = 0 ;

    for (i = 0; i < puntos.length; i++ )
    puntos[i].className = puntos[i].className.replace(' active', '')
  
    
    if (index < 0)
    index = images.length - 1;

    images[index].style.display = "block";
    puntos[index].className += ' active';
    

}
carousel(index);
