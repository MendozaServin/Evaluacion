const lista = document.getElementById('listTareas');
const input = document.getElementById('inputTarea')

class ListaTareas{
    constructor() {
        this.allTareas = []
    }

    mostrarLista = () => {
        const ul = document.createElement('ul')
        lista.appendChild(ul)

        for(let i = 0; i < this.allTareas.length; i++) {
            const tareas = this.allTareas[i]
            
            const li = document.createElement('li');
            li.innerText = tareas
            
            ul.appendChild(li)
        }
    }

    limpiarLista = () => {
        while (lista.hasChildNodes()) {
            lista.removeChild(lista.firstChild);
        }

        this.mostrarLista()
    }

    agregarTarea = (tarea) => {
        this.allTareas.push(tarea);
        input.value = ''
        this.limpiarLista()
    }

    mostrarListaInicial = () => {
        if(this.allTareas.length === 0){
            const p = document.createElement('p')
            p.setAttribute('id', 'sinTarea')
            p.innerText = 'Sin tareas'

            lista.appendChild(p)
        }
    }
}

const tarea = new ListaTareas()
tarea.mostrarListaInicial()

input.value = ''