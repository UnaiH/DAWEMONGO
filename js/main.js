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
	document.getElementById("form").action='/users/update'
	document.getElementById("nombre").value=$(this).data('nombre');
	document.getElementById("apellido").value=$(this).data('apellido');
	document.getElementById("email").value=$(this).data('email')
	//window.location.replace('/')
}
$(document).ready(function(){
	$('.editUser').on('submit',editUser);
});
function editUser(){
	console.log("Edicion")
	$.ajax({
		type: 'POST',
		url: '/'+$(this).data('id'),
		data: {first_name: document.getElementById("first_name").value, last_name: document.getElementById("last_name"), email: document.getElementById("email")}
	}).done(function(response){
		window.location.replace('/')
	});
}