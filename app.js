// Se crea una constante y se asigna al boton

const botonsumar = document.getElementById("Btnsumar");

// El boton estará atento cuando de click y ejecutará la funcion "sumar"
botonsumar.addEventListener("click", sumar);

function sumar (){
    // Detectar las variables
    const num1= Number (document.getElementById("numero1").value);
    const num2= Number (document.getElementById("numero2").value);
    const divresultado = document.getElementById("result_suma");
    // Operacion logica
    resultado= num1 + num2;

    // Imprimir el resultado
    // alert("El resultado de la suma es: "+ resultado);
    divresultado.innerText= resultado;
}
//restar
const botonrestar = document.getElementById("Btnrestar");
botonrestar.addEventListener("click", restar);

function restar(){
    const num3= Number(document.getElementById("numero3").value);
    const num4= Number(document.getElementById("numero4").value);
    const divresultado2 = document.getElementById("result_resta");
    resultado2 = num3 - num4;
    divresultado2.innerText= resultado2;
}
///resta final
//multiplicacion
const botonmultiplicar = document.getElementById("Btnmultiplicar");
botonmultiplicar.addEventListener("click", multi);

function multi(){
    const num5= Number(document.getElementById("numero5").value);
    const num6= Number(document.getElementById("numero6").value);
    const divresultado3= document.getElementById("result_multi");
    resultado3= num5*num6;
    divresultado3.innerText=resultado3;
}
///fin multi
// inicio divicion
let boton4 = document.getElementById("Btndividir");
boton4.addEventListener("click", divnumeros);

function divnumeros(){
    let varnumero1;
    let varnumero2;
    let varresultado;
    varnumero1 = Number(document.getElementById("numero7").value);
    varnumero2 = Number(document.getElementById("numero8").value);
    varresultado = varnumero1 / varnumero2;
    let imprimir = document.getElementById("result_divi");
    imprimir.innerText = varresultado;
}

let botonas=document.getElementById("Btnnumeros");
botonas.addEventListener("click",asenso);

function asenso(){
    const imprimirnumeros = document.getElementById("resultnum");
    imprimirnumeros.innerHTML = " ";

    for(let x=100; x>=0; x--){

    const lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = `${x}`;
    imprimirnumeros.appendChild(lista);
    }
}

const botoncalif = document.getElementById("Btnverificar").addEventListener("click", verificarcalificación);
function verificarcalificación(){
    let varnumero1 = Number(document.getElementById("numero11").value);
    let printresult = document.getElementById("imprimirresultadoverificar");
    if(varnumero1 >= 8 ){
        printresult.innerText = "Aprobada";
    }else{
       printresult.innerText = "Reprobada";
    }

}

