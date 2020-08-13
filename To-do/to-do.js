const fs = require('fs');


const cargarDB = () => {
    try {
        listaTareas = require('../DB/data.json');
    } catch (err) {
        let listaTareas = [];
    }
}

const guardarDB = () => {

    let data = JSON.stringify(listaTareas);

    fs.writeFile('DB/data.json', data, (err) => {
        if (err) throw new Error('La lista no se guardó.');
    });
}

const crear = (descripcion) => {
    cargarDB();
    let toDo = {
        descripcion,
        completado: false
    };

    listaTareas.push(toDo);

    guardarDB();

    return toDo;

}

const getLista = () => {
    cargarDB();


    if (listaTareas === []) {
        return console.log('No se encontrarón tareas.');
    } else {
        return listaTareas;
    }
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listaTareas.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listaTareas[index].completado = completado;
        guardarDB();
        return console.log(`El estado de la tarea "${listaTareas[index].descripcion}" se ha actualizado.`.green);
    } else {
        return console.log('No hay una tarea con esa descripción.'.red);
    }

}

// const borrar = (descripcion) => {
//     cargarDB();
//     let index = listaTareas.findIndex(tarea => tarea.descripcion === descripcion);

//     if (index >= 0) {
//         listaTareas.splice(index, 1);
//         guardarDB();
//         return console.log(`La tarea "${descripcion}" ha sido eliminada.`.green);
//     } else {
//         return console.log('No hay una tarea con esa descripción.'.red);
//     }
// }

const borrar = (descripcion) => {
    cargarDB();
    let nuevaLista = listaTareas.filter(tarea => {
        tarea.descripcion !== descripcion;
    })
    if (nuevaLista.lenght === listaTareas.lenght) {
        return console.log('No hay una tarea con esa descripción.'.red);
    } else {
        listaTareas = nuevaLista;
        guardarDB();
        return console.log(`La tarea "${descripcion}" ha sido eliminada.`.green);
    }
}

module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}