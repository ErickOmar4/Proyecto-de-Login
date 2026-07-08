document.getElementById('formLogin').addEventListener('submit', function(e) {
    e.preventDefault();

    const correo = document.getElementById('loginCorreo').value.trim();
    const password = document.getElementById('loginPassword').value;

    const errorCorreo = document.getElementById('errorCorreo');
    const errorPassword = document.getElementById('errorPassword');

    let esValido = true;

    if (!validarCorreo(correo)) {
        errorCorreo.textContent = "Formato de correo inválido.";
        errorCorreo.classList.remove('hidden');
        esValido = false;
    } else {
        errorCorreo.classList.add('hidden');
    }

    if (!validarPassword(password)) {
        errorPassword.textContent = "Contraseña inválida (Mín. 8 caracteres, Mayús, Minús, Núm, Carácter Especial).";
        errorPassword.classList.remove('hidden');
        esValido = false;
    } else {
        errorPassword.classList.add('hidden');
    }

    if (esValido) {
        localStorage.setItem('usuarioSesion', correo);
        window.location.href = 'index.html';
    }
});