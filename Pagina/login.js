/**Codigos del funcionamiento al hacer click */
const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', (e) => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
    
});
/**Funciones de OneClick SE llega a dar funcionamiento  */
function funcion(){
    window. alert("Se a Registrado con exito ");
    
}
/**Codigo de redireccionamiento */
function gok(){
    window. alert("Se a logueado exitosamente, la zona de catalogo esta disponible ");
    window.location="index.html"
}

