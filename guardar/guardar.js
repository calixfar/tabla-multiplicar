let fs = require ('fs');

let listarArchivo = ()


let empleados = [{
	id: 1,
	nombre: 'Juan'
},{
	id: 2,
	nombre: 'Pedro'
},{
	id: 3,
	nombre: 'Antonio'
}];


let productos = [{
	id : 1,
	nombre: 'arroz'
},{
	id : 2,
	nombre: 'Frijol' 
},{
	id : 3,
	nombre: 'Avena'
}];

let buscarEmpleado = async (id) => {
	let empleado = empleados.find(resp => id === resp.id);
	if(!empleado) throw new Error('No existe un empleado con el id: ' +id);
	else return empleado;
}

let buscarProducto = async (idProducto) => {
	let producto = productos.find(producto => idProducto === producto.id);
	if(!producto) throw new Error('No existe un producto con el id: ' +idProducto);
	else return producto;
}
let crearArhivo = async (idEmpleado, idProducto) => {
	let empleado = await buscarEmpleado(idEmpleado);
	let producto = await buscarProducto(idProducto);
	let data = 'ID Cliente: ' +empleado.id +'\n' +' Nombre Cliente: ' +empleado.nombre
			   +'\n------------------------\nID Producto: ' +producto.id +'\n Producto: '
			   +producto.nombre; 
	fs.writeFile('./Cliente-' +empleado.id +'.txt', data, (err) => {
		if(err) throw new Error('No se pudo crear el archivo');
	});
	return 'Archivo creado: Cliente-' +empleado.id +'.txt';
}

module.exports = {
	crearArhivo,
	buscarEmpleado
}