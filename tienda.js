const argv = require('yargs')
				.command('listar', 'Imprime en pantalla todos los registros' , {
					idCliente : {
						demand : true,
						alias : 'b'
					}, 
					limite: {
						alias : 'l',
						default : 10
					},
					idProducto : {
						demand : true,
						alias :'c'
					}

				})
				.help()
				.argv;
const {crearArhivo} = require('./guardar/guardar.js');

let comando = argv._[0];

switch (comando) {
	case 'listar':
		 console.log(comando);
		break;
	case 'crear':
		crearArhivo(argv.idCliente, argv.idProducto )
	 	.then(archivo => console.log(archivo))
	 	.catch(err => console.log(err));
		break;
	default:
		console.log('Comando no reconocido');
		break;
}



