/* cuadro de alerta para poner el nombrer del jugador*/
let nombre = prompt("Cual es tu nombre");
if (nombre != null) {
    $('.tuNombre').html(nombre) 
} else {
	let nombre = prompt("Cual es tu nombre");
}

/* aqui se mezcla el array con las imagenes, esto ocuarre cada vez se carga la pagina*/
let img = $('.img')
let imagenes = ['amarillo.png', 
								'amarillo.png', 
								'amarillo.png',
								'amarillo.png',
								'azul.png',
								'azul.png',
								'azul.png',
								'azul.png',
								'harry.png',
								'harry.png',
								'harry.png',
								'harry.png',
]

imagenes = imagenes.sort(function() {
	return Math.random() - 0.5});
	console.log(imagenes)

/* aqui esta lo que pasa en cada turno*/
let turnoNumero = 15
var turno=[]
console.log(turno)

$('.img').on('click',function(e){
	let indice = $(this).index()
	let imghtml = $(this)
	imghtml.attr('src', imagenes[indice])
	let imagenClickeada = imagenes[indice]
	turno.push({imagen: imagenClickeada,
							posicion: indice})
	let position1 = turno[0].posicion
	let position2 = turno[1].posicion
	let ok1= $('.img').eq(position1)
	let ok2= $('.img').eq(position2)
	let turno1 = turno[0].imagen
	let turno2 = turno[1].imagen
	setTimeout(function(){
    if (turno1 == turno2) {
		ok1.attr('src', 'blanco.png')
		ok2.attr('src', 'blanco.png')
		turnoNumero--
			if(turno.length == 2){
				turno = []
			}	
		} else{
		ok1.attr('src', 'paulflor.png')
		ok2.attr('src', 'paulflor.png')
		turnoNumero--
			if(turno.length == 2){
				turno = []
			}
		}  
  }, 400);
	$('.turnoNumero').html(turnoNumero)
	if (turnoNumero==0) {
		console.log('perdio')
		$('.filas').hide()
	}
})










	
