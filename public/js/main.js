$(document).ready(function(){
	$('.deleteUser').on('click', deleteUser);
});

function deleteUser(){
	//alert('Borrar!');
	alert($(this).data('id'));
}

function deleteUser(){
    var confirmation = confirm('Are You Sure?');
	if(confirmation){
		$.ajax({
			type: 'DELETE',
			url:  '/users/delete/'+$(this).data('id')
		}).done(function(response){
			window.location.replace('/')
		});
	} else {
		return false;
	}

}
$(document).ready(function(){
	$('.editUser').on('click',getUser);
});
function getUser(){
	var boton = document.getElementById("boton");
    boton.value = "Editar";
	document.getElementById("nombre").value=$(this).data('nombre');
	document.getElementById("apellido").value=$(this).data('apellido');
	document.getElementById("email").value=$(this).data('email');
	document.getElementById("form").action='/users/update/'+$(this).data('id');
}

$(document).ready(function() {
    $('.editUser').on('submit', updateUser);
});

function updateUser() {
    var boton = document.getElementById('boton');
    $.ajax({
        type: 'POST',
        url: '/users/update/' + $(this).data('id')
    }).done(function(response) {
        window.location.replace('/')
    });
    boton.value = "Enviar";
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('email').value = "";
}