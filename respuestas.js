let autos = [{
    marca: "Ford",
    modelo: "Fiesta",
    color: "Azul",
    precio: 150000,
    km: 200,
    cuotas: 12,
    anio: 2019,
    patente: "APL123",
    vendido: false
},{
    marca: "Toyota",
    modelo: "Corolla",
    color: "Blanco",
    precio: 100000,
    km: 0,
    cuotas: 14,
    anio: 2019,
    patente: "JJK116",
    vendido: false
}];

let concesionaria = {
   autos: autos,
   buscarAuto: function(patente){
      for(let i = 0;i<autos.length;i++){
         if(autos[i].patente == patente) {
            return autos[i];
         }
      }
      return null;
   },
   venderAuto: function(patente) {
      let auto = this.buscarAuto(patente);
      if (auto != null ){
         auto.vendido = true;
      }
   },
   autosParaLaVenta: function(){
      let autos = this.autos.filter(function (elemento){
                                       return !elemento.vendido
                                  })
      return autos;                           
   },

   
   autosNuevos: function(){
     let disponibles= this.autosParaLaVenta();
     let nuevos= disponibles.filter(function(elemento){
                                       return elemento.km <100;
                                  })
     return nuevos;           
   },

   listaDeVentas: function(){
      let ventas = [];
      for(let i = 0; i <this.autos.length; i++) {
         if (this.autos[i].vendido) {
            ventas.push(this.autos[i].precio);
         }

      }
      return ventas;
   },

   totalDeVentas: function(){
     return this.listaDeVentas().reduce(function(acum,elemento){
         return acum + elemento;
      },0)
   }, // este dio bien antes. lo hice con rettig ayer. 

 puedeComprar: function(auto,persona){
        let costoTotal = persona.capacidadDePagoTotal >= auto.precio;
        let capacidadDePagoEnCuotas = persona.capacidadDePagoEnCuotas >= auto.precio/auto.cuotas;
        return (capacidadDePagoEnCuotas && costoTotal);
    },
    
    autosQuePuedeComprar: function(persona){
        let arrayDisponibles = this.autosParaLaVenta();
        const puedeComprarLista = arrayDisponibles.filter(auto => persona.capacidadDePagoTotal >= auto.precio && 
            persona.capacidadDePagoEnCuotas >= auto.precio/auto.cuotas);
        return puedeComprarLista;
    }
};

    
                             
  
