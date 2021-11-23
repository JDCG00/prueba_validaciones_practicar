/** 
    mecatron3000.js
    Controladro principal del juego Mecatron3000
    @author Juan Diego Carretero Granado <jcarreterogranado.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/

'use strict'

console.log('Cargado JS')

/*Validaciones*/


//Inicialización
window.onload = iniciar

function iniciar() {
    media()
}


//Función para añadir módulos 1DAW


function unoDaw() {
    /*console.log('funciona');*/
/*
    //Selecciona el párrafo de curso
    let pCurso = document.getElementById('pCurso')
    //Crea el br
    let br = document.createElement('br')
    pCurso.appendChild(br)
    //Crea el label
    let label = document.createElement('label')
    pCurso.appendChild(label)
    let textoLabel = document.createTextNode('Módulos 1DAW')
    label.appendChild(textoLabel)
    //Crea el select
    let select = document.createElement('select')
    pCurso.appendChild(select)
    //Crea los options
    let option1 = document.createElement('option')
    select.appendChild(option1)
    let texto1 = document.createTextNode('SI')
    option1.appendChild(texto1)
    let option2 = document.createElement('option')
    select.appendChild(option2)
    let texto2 = document.createTextNode('LM')
    option2.appendChild(texto2)
    let option3 = document.createElement('option')
    select.appendChild(option3)
    let texto3 = document.createTextNode('PROG')
    option3.appendChild(texto3)
    */
}
//Función para añadir módulos 2DAW

function dosDaw() {
    //console.log('funciona');
/*
    if (document.getElementById==('o1DAW')) {
        document.get
    }
    //Selecciona el párrafo de curso
    let pCurso = document.getElementById('pCurso')
    //Crea el br
    let br = document.createElement('br')
    pCurso.appendChild(br)
    //Crea el label
    let label = document.createElement('label')
    pCurso.appendChild(label)
    let textoLabel = document.createTextNode('Módulos 2DAW')
    label.appendChild(textoLabel)
    //Crea el select
    let select = document.createElement('select')
    pCurso.appendChild(select)
    //Crea los options
    let option1 = document.createElement('option')
    select.appendChild(option1)
    let texto1 = document.createTextNode('DWEC')
    option1.appendChild(texto1)
    let option2 = document.createElement('option')
    select.appendChild(option2)
    let texto2 = document.createTextNode('DIW')
    option2.appendChild(texto2)
    let option3 = document.createElement('option')
    select.appendChild(option3)
    let texto3 = document.createTextNode('DWES')
    option3.appendChild(texto3)
    */
}

//Función para añadir módulos de 1DAW y 2DAW

function addModulo() {
    switch (document.getElementById()) {
        case 'o1DAW':
            //Selecciona el párrafo de curso
            let pCurso = document.getElementById('pCurso')
            //Crea el br
            let br = document.createElement('br')
            pCurso.appendChild(br)
            //Crea el label
            let label = document.createElement('label')
            pCurso.appendChild(label)
            let textoLabel = document.createTextNode('Módulos 1DAW')
            label.appendChild(textoLabel)
            //Crea el select
            let select = document.createElement('select')
            pCurso.appendChild(select)
            //Crea los options
            let option1 = document.createElement('option')
            select.appendChild(option1)
            let texto1 = document.createTextNode('SI')
            option1.appendChild(texto1)
            let option2 = document.createElement('option')
            select.appendChild(option2)
            let texto2 = document.createTextNode('LM')
            option2.appendChild(texto2)
            let option3 = document.createElement('option')
            select.appendChild(option3)
            let texto3 = document.createTextNode('PROG')
            option3.appendChild(texto3)
            break;
        case 'o2DAW':
            //Selecciona el párrafo de curso
            let pCurso = document.getElementById('pCurso')
            //Crea el br
            let br = document.createElement('br')
            pCurso.appendChild(br)
            //Crea el label
            let label = document.createElement('label')
            pCurso.appendChild(label)
            let textoLabel = document.createTextNode('Módulos 2DAW')
            label.appendChild(textoLabel)
            //Crea el select
            let select = document.createElement('select')
            pCurso.appendChild(select)
            //Crea los options
            let option1 = document.createElement('option')
            select.appendChild(option1)
            let texto1 = document.createTextNode('DWEC')
            option1.appendChild(texto1)
            let option2 = document.createElement('option')
            select.appendChild(option2)
            let texto2 = document.createTextNode('DIW')
            option2.appendChild(texto2)
            let option3 = document.createElement('option')
            select.appendChild(option3)
            let texto3 = document.createTextNode('DWES')
            option3.appendChild(texto3)
    }
}
//Función para calcular la media y establacer dicho valor en el span

function media() {
    //Selecciona el span de la media
    let span = document.getElementById('spanMedia')

    //Selecciona los tres inputs tipo number pasándolos a int, para que no se concatenen como si fuera un text
    // a la hora de hacer la media
    let input1 = parseInt(document.getElementById('iCalculo1').value)
    let input2 = parseInt(document.getElementById('iCalculo2').value)
    let input3 = parseInt(document.getElementById('iCalculo3').value)

    /*console.log(input1);*/
    /*console.log(span);*/

    //Se calcula la media

    let media = (input1 + input2 + input3)/3

    //Se modifica el texto con la media indicada
    span.textContent = media

    /*console.log('funciona');*/


}

//Función para poner todos los valores a 0

function cero() {
    //console.log('funciona');

    //Selecciona los tres inputs tipo number y cambia su valor a cero
   
    let input1 = document.getElementById('iCalculo1').value = ('0')
    let input2 = document.getElementById('iCalculo2').value = ('0')
    let input3 = document.getElementById('iCalculo3').value = ('0')

}

//Función para enviar
function enviar() {

    //console.log('funciona');

    //Selecciona el divError
    let div = document.getElementById('divError')

    //Selecciona los tres inputs tipo number pasándolos a int, para que no se concatenen como si fuera un text
    // a la hora de hacer la suma 
    let input1 = parseInt(document.getElementById('iCalculo1').value)
    let input2 = parseInt(document.getElementById('iCalculo2').value)
    let input3 = parseInt(document.getElementById('iCalculo3').value)

    //Se hace la suma
    let suma = (input1 + input2 + input3)

    //Si está bien sigue normal, si está mal manda un error 
    if (suma>=10&&suma<=20) {
        /*console.log('perfe');*/        
    }
    else{
        /*console.log('error');*/

        //Cambia el estilo poniendo display flex
        div.style.display='flex'
        //Pone un texto de error
        div.textContent='Error'
    }

}
