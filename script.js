
let iconos = []
let selecciones = []

generarTablero()

function cargarIconos() {
    iconos = [
        '<img src="img/taco.png">',
        '<img src="img/tostada.png">',
        '<img src="img/taza-de-cafe.png">',
        '<img src="img/galleta.png">',
        '<img src="img/hamburguesa.png">',
        '<img src="img/helado.png">',
        '<img src="img/magdalena.png">',
        '<img src="img/papas-fritas.png">',
        '<img src="img/platanos.png">',
        '<img src="img/cereza.png">',

        '<img src="img/pimiento-morron.png">',
        '<img src="img/manzana.png">',
        '<img src="img/queso.png">',
        '<img src="img/huevo-frito.png">',
        '<img src="img/galleta-de-la-fortuna.png">',
        '<img src="img/pizza.png">',
        '<img src="img/onigiri.png">',
        '<img src="img/uvas.png">',
        '<img src="img/chocolate">',
        '<img src="img/fresa.png">',

        '<img src="img/tocino.png">',
        '<img src="img/aji-picante">',
        '<img src="img/leche.png">',
        '<img src="img/rabano.png">',
        '<img src="img/melocoton.png">',
        '<img src="img/malteada.png">',
        '<img src="img/sandia.png">',
        '<img src="img/guisante.png">',
        '<img src="img/pudin.png">',
        '<img src="img/pierna-de-pollo.png">',

        '<img src="img/zanahoria.png">',
        '<img src="img/pera.png">',
        '<img src="img/pedazo-de-pastel.png">',
        '<img src="img/sushi.png">',
        '<img src="img/pancho">',
        '<img src="img/naranaja.png">',
        '<img src="img/brocoli.png">',
        '<img src="img/berenjena.png">',
        '<img src="img/albondiga.png">',
        '<img src="img/pina.png">',

        '<img src="img/paleta-de-hielo.png">',
    ]
}
// Se creo una funcion para crear un Arrar de 8 cartas aleatorias
function IconosAleatorios() {
    cargarIconos()
    let al = 0;
    cartas = []
    usados = []
   let rep = "";
    for (let i = 0; i < 8; i++) {   
        al =  Math.floor(Math.random()*41 );  
        console.log("this is AL" +al);
       
        rep = repetido(al);

        console.log (rep);
        if  (rep == false){       
              usados.push(al);    
            cartas[i] = iconos[al];   
            console.log("contador" + i); 
        } else{ i = i-1;
            // si la carta ya se uso se resta 1 de i para que busque otra carta.
            console.log("quitamos" + i);}            
   
    }
    console.log(cartas);

}
// Se creo funcion para ver si el numero o carta no es repetido.
function repetido(num) {
   let repe = false;
    for (i=0; i < usados.length; i++) {
       
    if (num == usados[i]) {
    repe = true;
    }
    }
    return repe;
    }

function generarTablero() {
    IconosAleatorios()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < 16; i++) {
         tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${cartas[0]}
                </div>
                <div class="cara superior">
                <i class="far fa-star"></i>
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            cartas.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.borderColor = '#FF0000'
            tarjeta2.style.borderColor = '#FF0000'
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            trasera1.style.background = "plum"
            trasera2.style.background = "plum"
        }
    }, 1000);
}
