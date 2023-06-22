const form=document.getElementById('form');
const username = document.getElementById('username')
const password = document.getElementById('password')
const correo = document.getElementById('correo')
const button = document.getElementById('button')

form.addEventListener("submit",e=>{
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const usernameValue=username.value.trim();
    const passwordValue=password.value.trim();
    const correoValue=correo.value.trim();

    //Funcion del user
    if (usernameValue === '') {
        setErrorFor(username, 'No puede estar vacio')
    }else if (!isEmail(usernameValue)) {
        setErrorFor(username, 'User invalido')
    }else {
        setSuccessFor(username);
    }


    //Funcion del password
    if (passwordValue === '') {
        setErrorFor(password, 'Password no debe ingresar en blanco.');
    }else{
        setSuccessFor(password);
    }

    //Funcion del correo
    if (correoValue === '') {
        setErrorFor(correo, 'Debe de ingresar un correo')
    }else{
        setSuccessFor(correo);
    }

    
    // Validacion al user
    if( username.value=="tsukasa" && passwordValue=="123" && correoValue=="pablo123@gmail.com"){
        window.alert('Bienvenido');
        window.location="html/login.html";
    }else {
        window.alert('El nombre de Usuario es incorrecto')
    }
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}