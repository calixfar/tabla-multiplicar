const fs = require('fs');
const colors = require('colors');

let crearArhivo = (base, limite) => {
	return new Promise((resolve, reject) => {

		let data = "";

		console.log('==================='.green);
		console.log('==Tabla de ' +base +'=='.blue);
		console.log('==================='.red);

		for (var i = 1; i <= limite; i++) {
			data += base +' * ' +i +' = ' +(i*base) +'\n';
		}
		fs.writeFile('tablas/tabla-' +base +'al-' +limite +'.txt', data , (err) => {
		  if (err) reject(err);
		  else resolve('tabla-' +base +'-al-' +limite +'.txt');
		});
	})
}

let listarTabla = (base, limite) => {
	console.log('==================='.green);
		console.log(colors.blue('==Tabla de ' +base +'=='));
		console.log('==================='.red);
	for (var i = 1 ; i <= limite; i++) {
		console.log(base +' * ' +i +' = ' +(i*base));
	}
}


module.exports = {
	crearArhivo,
	listarTabla
}