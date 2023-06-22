// recuperamos las varibles del formulario login.html
const form=document.getElementById('form');
const usuario = document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
// funcionalidad al boton Ingresar
form.addEventListener("submit",e=>{
    e.preventDefault();
    checkInputs();
})
// Toda la logica de lo que haga el boton Ingresar
function checkInputs(){
    const emailvalue=email.value.trim();
    const passwordValue=password.value.trim();
    // validamos el ingreso correcto de los datos
	if(emailvalue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailvalue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}

    if(passwordValue === '') {
		setErrorFor(password, 'Password no debe ingresar en blanco.');
	} else {
		setSuccessFor(password);
	}

    // Validacion al ingresar a la Intranet CERTUS
    if( email.value=="administrador@certus.edu.pe" && password.value=="123"){ 
        alert(' :::::    Bienvenido al Sistema de Certus Sr. Administrador    ::::::  ');
        window.location="intranet/administrador.html";
        // window.open("intranet/administrador.html","Certus","width=600, height=800");
            
    }else if( email.value=="colaborador@certus.edu.pe" && password.value=="456"){		
            alert(' :::::    Bienvenido al Sistema de Certus   Estimado Colaborador  ::::::  ');
            window.location="intranet/empleado.html";				  
    }else{
        alert('Estimado Usuario: Credenciales Incorrectas ...!! Favor de Comunicarse con el Area de Sistemas');
    }	

}

// Funciones reutilizables para futuro proyectos web.
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