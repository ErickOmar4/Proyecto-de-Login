document.addEventListener('DOMContentLoaded', function() {
    const usuarioLogueado = localStorage.getItem('usuarioSesion');
    if (!usuarioLogueado) {
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('navbarUsuario').textContent = usuarioLogueado;

    const sidebar = document.getElementById('sidebar');
    const btnHamburguesa = document.getElementById('btnHamburguesa');
    const btnMenuUsuarios = document.getElementById('btnMenuUsuarios');
    const submenuCaptura = document.getElementById('submenuCaptura');
    const flechaUsuarios = document.getElementById('flechaUsuarios');
    const btnUserDropdown = document.getElementById('btnUserDropdown');
    const userDropdownMenu = document.getElementById('userDropdownMenu');
    const btnSalir = document.getElementById('btnSalir');

    const linkCaptura = document.getElementById('linkCaptura');
    const linkAlumnos = document.getElementById('linkAlumnos');
    const seccionCaptura = document.getElementById('seccionCaptura');
    const seccionAlumnos = document.getElementById('seccionAlumnos');

    // Animación colapsable del Menú Lateral
    btnHamburguesa.addEventListener('click', () => {
        sidebar.classList.toggle('w-64');
        sidebar.classList.toggle('w-0');
        sidebar.classList.toggle('overflow-hidden');
    });

    btnMenuUsuarios.addEventListener('click', () => {
        submenuCaptura.classList.toggle('hidden');
        flechaUsuarios.classList.toggle('rotate-180');
    });

    btnUserDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropdownMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', () => userDropdownMenu.classList.add('hidden'));

    btnSalir.addEventListener('click', () => {
        localStorage.removeItem('usuarioSesion');
        window.location.href = 'login.html';
    });

    linkCaptura.addEventListener('click', () => {
        seccionCaptura.classList.remove('hidden');
        seccionAlumnos.classList.add('hidden');
    });
    linkAlumnos.addEventListener('click', () => {
        seccionAlumnos.classList.remove('hidden');
        seccionCaptura.classList.add('hidden');
    });

    // Validar Formulario Usuarios
    document.getElementById('formUsuario').addEventListener('submit', function(e) {
        e.preventDefault();
        const correo = document.getElementById('usrCorreo').value.trim();
        const password = document.getElementById('usrPassword').value;
        const txtResultado = document.getElementById('resultadoUsr');

        const errorCorreo = document.getElementById('mensajeCorreo');

        if (!validarCorreo(correo)) {
            errorCorreo.textContent = "x Error: El correo no tiene un formato válido.";
            errorCorreo.className = "mt-3 text-sm font-medium text-red-500";
            return;
        }

        if (!validarPassword(password)) {
            txtResultado.textContent = "x Error: Contraseña insegura.";
            txtResultado.className = "mt-3 text-sm font-medium text-red-500";
            return;
        }

        txtResultado.textContent = " ¡Usuario validado y registrado con éxito!";
        txtResultado.className = "mt-3 text-sm font-medium text-green-600";
        this.reset();
    });

    // Validar Alumnos + Modal
    const modalEdad = document.getElementById('modalEdad');
    const modalTextoEdad = document.getElementById('modalTextoEdad');

    document.getElementById('formAlumnos').addEventListener('submit', function(e) {
        e.preventDefault();
        const noControl = document.getElementById('alNoControl').value.trim();
        const fechaNac = document.getElementById('alFechaNac').value;
        const txtResultado = document.getElementById('resultadoAl');

        if (!validarLongitud(noControl, 6)) {
            txtResultado.textContent = " El número de control debe tener exactamente 6 dígitos numéricos.";
            return;
        }
        txtResultado.textContent = "";

        if (esMayorDeEdad(fechaNac)) {
            modalTextoEdad.textContent = "El alumno cumple con la condición de regulación del sistema debido a que es MAYOR DE EDAD.";
        } else {
            modalTextoEdad.textContent = "Atención: El alumno está clasificado como MENOR DE EDAD.";
        }

        modalEdad.classList.remove('hidden');
    });

    document.getElementById('btnCerrarModal').addEventListener('click', () => {
        modalEdad.classList.add('hidden');
        document.getElementById('formAlumnos').reset();
    });
});