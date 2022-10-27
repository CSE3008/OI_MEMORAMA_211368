
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
        '<img src="img/">',
        '<img src="img/">',
        '<img src="img/">',
    ]
}
function IconosAleatorios() {
    cargarIconos()
    let al = 0;
    cartas = []
    usados = []
   let rep = "";
    for (let i = 0; i < 8; i++) {   
        al =  Math.floor(Math.random()*9 );  
        console.log("this is AL" +al);
       
        rep = repetido(al);

        console.log (rep);
        if  (rep == false){       
              usados.push(al);    
            cartas[i] = iconos[al];   
            console.log("contador" + i); 
        } else{ i = i-1;
            console.log("quitamos" + i);}
        
      /*  while (rep != false) {
            console.log(rep);
            al =  Math.floor(Math.random()*8 +1);
            console.log(al);
            
            console.log(rep);
            usados.push(al);  
            }
        */                        
        
            
    }
    console.log(cartas);

}
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
