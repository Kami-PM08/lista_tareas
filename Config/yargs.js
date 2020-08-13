const descripcion = {
    demand: true,
    alias: 'd'
}

const argv = require('yargs')
    .command('listar', 'Listar las tareas por hacer.')
    .command('crear', 'Crear tarea por hacer.', {
        descripcion
    })
    .command('actualizar', 'Actualizar una tarea por hacer.', {
        descripcion,
        completado: {
            alias: 'c',
            default: true
        }
    })
    .command('borrar', 'Borra una tarea de la lista de tareas por hacer.', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}