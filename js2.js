let opcionesJuegos = []


class Juegos
{
     constructor  (nombreJuego, precioJuego)
      {
           this.nombreJuego = nombreJuego
           this.precioJuego = precioJuego
     }
    }

async function fetchJuegos(){

    const response = await fetch ('./app.json')
    return await response.json()
    
    
    }

    fetchJuegos().then(productos => {
  
      opcionesJuegos = productos
  
        
    })

    console.log(opcionesJuegos)