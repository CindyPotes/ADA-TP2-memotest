/* cuadro de alerta para poner el nombrer del jugador*/
function comenzar(){
	let nombre = $('.nombre').val()
	if (nombre != null) {
  $('.tuNombre').html(nombre)
  $('.paraNombre').hide()
	} 
}

$('.paraNombre').on('keypress', function(e){
	if (e.keyCode==13) {
		comenzar()
	}
})

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

/* aqui esta lo que pasa en cada turno*/
let turnoNumero = 15
let turno=[] //donde se pushean los dos clicks para se comparados
let gano = [] //donde se van metiendo las imagenes clickeadas correctamente, si llega a 12 gana

$('.img').on('click',function(e){
	let indice = $(this).index() //posicion de la imagen dentro de array de img's
	let imghtml = $(this) //contenido de la imagen clickeada
	imghtml.addClass('girar')
	imghtml.attr('src', imagenes[indice]) //aqui se busca en el array de imagenes desordenado la imagen que conicida con el indice clickeados para que sea esa mostrada
	let imagenClickeada = imagenes[indice]

	if (turno.length == 1)  {
		if (indice != turno[0].posicion) {
			turno.push({imagen: imagenClickeada,
				posicion: indice})
		}	
	} else {
		turno.push({imagen: imagenClickeada,
				posicion: indice})
	} //aqui si la imagen que se clickea de segunda el la misma que la primera no pasa nada nada, pero se es diferente se pushea en el array turno

	let ok1= $('.img').eq(turno[0].posicion)
	let ok2= $('.img').eq(turno[1].posicion)
	let turno1 = turno[0].imagen
	let turno2 = turno[1].imagen
	setTimeout(function(){
    if (turno1 == turno2) {
			ok1.attr('src', 'blanco.png')
			ok2.attr('src', 'blanco.png')
			ok1.addClass('nomas')
			ok2.addClass('nomas')
			gano.push(turno1)
			gano.push(turno2)
			turnoNumero--
			if(turno.length == 2){
				turno = []
			}	
		}else{
			ok1.attr('src', 'paulflor.png')
			ok2.attr('src', 'paulflor.png')
			ok1.removeClass('girar')
			ok2.removeClass('girar')
			turnoNumero--
			if(turno.length == 2){
				turno = []
			}
		} //aqui se compara y pasan cosas si son iguales o si son diferentes las imagenes y posiciones de los 2 clicks 
	  $('.turnoNumero').html(turnoNumero)
		
		/*Cuando pierden*/
		if (turnoNumero == 0) {
			$('#perdio').removeClass('noMostrar')
			$('#perdio').addClass('mostrar')
		}	

		/*Cuando ganan*/
		if (gano.length == 12) {
			$('#gano').removeClass('noMostrar')
			$('#gano').addClass('mostrar')
		}
  }, 400); //la funcion setimeout hace que el codigo espere 400 milisegundos asi el jugados puede ver la segunda imagen
})

function jugarNuevamente(){
	location.reload(true);	
}

