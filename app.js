const argv = require('./config/yargs.js').argv;
var colors = require('colors/safe');

const {crearArhivo, listarTabla} = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
	case 'listar' : 
		listarTabla(argv.base , argv.limite);
		break;
	case 'crear' :
		crearArhivo(argv.base, argv.limite)
		.then(archivo => console.log('Se creo exitosamente el archivo: ' +colors.yellow(archivo)))
		.catch(e => console.log(e));
		break;
	default :
		console.log('No se reconoce el comando');
		break;
}


	
