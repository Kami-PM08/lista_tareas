// const argv = require('yargs').argv;

const argv = require('./Config/yargs').argv;

const colors = require('colors');

const { crear, getLista, actualizar, borrar } = require('./To-do/to-do');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let lista = getLista();
        console.log('=====Tareas por hacer====='.green);
        let extension = listaTareas.length;
        for (i = 0; i < extension; i++) {
            console.log(`${listaTareas[i].descripcion}.\nCompletado: ${listaTareas[i].completado}.`);
        }
        console.log('=========================='.green);
        break;
    case 'actualizar':
        actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        borrar(argv.descripcion);
        break;

}