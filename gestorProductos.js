const fs = require("fs");
const rutaArchivo = "./datos/productos.json";

module.exports = {
  productos: [],
  inicializarProductos: function () {
    const contenidoArchivoJSON = fs.readFileSync(rutaArchivo);
    const productosParseados = JSON.parse(contenidoArchivoJSON);
    this.productos = productosParseados;
  },
  guardarProductos: function (productos) {
    this.productos = productos;
    const cadenaJson = JSON.stringify(productos);
    fs.writeFileSync(rutaArchivo, cadenaJson);
  },
  obtenerProductosPorCategoria: function (categoria) {
    return this.productos.filter((producto) => false);
  },
  obtenerProductosConIva: function () {
      const productosLocales =  [...this.productos];
      const mapeados = productosLocales.map((producto) => {
      producto.precioConIva = producto.precio * 1.21;
      return producto;
    });
    return mapeados
  },
  obtenerProductoPorNombre: function(nombre) {
      return this.productos.find(
          (producto) => producto.nombre == nombre
      )
  },
  incrementarPrecioDeProductos: function () {
    return this.productos.map((producto) => {
    producto.precio = producto.precio * 1.50;
    return producto;
  });
},
};
