
//Día 3 - Bucles: for, while, do while

// Bienvenida al juego
alert("Bienvenido al juego de desarrollo de habilidades en programación.");
alert("El juego consiste en que vayas eligiendo tu ruta de aprendizaje en programación.");
alert("Cada ruta te llevará a un destino diferente.");

// Elección de área: Front-End o Back-End
let ruta = prompt("¿Qué área te gustaría explorar? (Front-End / Back-End)").trim();  //Recordar: .trim elimina espacios en blanco.
if (ruta === "Front-End") {
    alert("¡Excelente elección! ¿Y qué tecnología te gustaría aprender: React o Vue?");
    let framework = prompt("React / Vue").trim();
    if (framework === "React") {
        alert("¡Excelente elección! React es muy popular y potente.");
    } else if (framework === "Vue") {
        alert("¡Genial! Vue es una gran opción, conocida por su simplicidad y flexibilidad.");
    } else {
        alert("Opción no válida. Por favor, selecciona 'React' o 'Vue'.");
    }
} else if (ruta === "Back-End") {
    alert("¡Excelente elección! Y qué tecnología te gustaría aprender: C# o Java?");
    let lenguaje = prompt("C# / Java").trim();
    if (lenguaje === "C#") {
        alert("¡Genial! C# es ideal para aplicaciones empresariales y juegos con Unity.");
    } else if (lenguaje === "Java") {
        alert("¡Excelente elección! Java es robusto y ampliamente utilizado en aplicaciones web y móviles.");
    } else {
        alert("Opción no válida. Por favor, selecciona 'C#' o 'Java'.");
    }
} else {
    alert("Opción no válida. Por favor, selecciona 'Front-End' o 'Back-End'.");
}

// Elección de especialización
let especializacion = prompt("¿Te gustaría seguir especializándote en tu área o desarrollarte como Fullstack? (Especializarme / Fullstack)").trim();
if (especializacion === "Especializarme") {
    alert("¡Genial! Profundizarás tus conocimientos en esta área.");
} else if (especializacion === "Fullstack") {
    alert("¡Perfecto! Ahora tendrás habilidades tanto en Front-End como en Back-End.");
} else {
    alert("Opción no válida. Por favor, selecciona 'Especializarme' o 'Fullstack'.");
}

// Bucle para aprender nuevas tecnologías
/*let mensaje = "ok"; // Inicializamos la variable para controlar el bucle
while (mensaje === "ok") {
    let nuevaTecnologia = prompt("¿Cuál tecnología te gustaría aprender? (Ingresa el nombre de la tecnología)").trim();
    if (nuevaTecnologia) {
        alert(`¡${nuevaTecnologia} es realmente una tecnología muy interesante!`);
    } else {
        alert("No ingresaste ninguna tecnología. Intenta nuevamente.");
    }
    mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.").trim();
}*/

// Objeto para mapear tecnologías con mensajes específicos
const mensajesTecnologias = {
    "python": "Python es versátil y excelente para IA y análisis de datos.",
    "kubernetes": "Kubernetes es clave para orquestar contenedores en la nube.",
    "docker": "Docker simplifica la creación de entornos portátiles y aislados.",
    "rust": "Rust es ideal para sistemas de alto rendimiento y seguridad."
    // Agrega más tecnologías y mensajes aquí
};

// Bucle para aprender nuevas tecnologías
let mensaje = "ok"; // Inicializamos la variable para controlar el bucle
while (mensaje.toLowerCase() === "ok") {   //toLowerCase maneja minúsculas y mayúsculas
    let nuevaTecnologia = prompt("¿Cuál tecnología te gustaría aprender? (Ej: Python, Kubernetes)").trim().toLowerCase();

    if (nuevaTecnologia) {
        // Buscar si la tecnología tiene un mensaje específico
        if (mensajesTecnologias[nuevaTecnologia]) {
            alert(mensajesTecnologias[nuevaTecnologia]);
        } else {
            alert(`¡${nuevaTecnologia} es una tecnología interesante!`);
        }
    } else {
        alert("No ingresaste ninguna tecnología. Intenta nuevamente.");
    }

    mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (ok / no)").trim().toLowerCase();
}

//Fin del juego
alert("Gracias por participar en este juego. ¡Esperamos que hayas disfrutado planificando tu camino en el desarrollo de software!");
