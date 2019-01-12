const opts = {
	base : {
			 	alias : 'b',
				demand : true
		 	},
	limite : {
		 		default : 10,
			 	alias : 'l'
			 }
}
const argv = require('yargs')
			 .command('listar' ,'Imprime en pantalla todos los registros',opts)
			 .command('crear' ,'Crea un archivo txt con la tabla', opts)
			 .help()
			 .argv;

module.exports = {
	argv
}