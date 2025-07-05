//Sistema de gestion de biblioteca

//Punto uno: Estructura de datos
/*a)Crear un array de objetos llamado libros que contenga al menos 10 libros. */

let libros = [
  {
    id: 1,
    titulo: 'Canto a mí mismo',
    autor: 'Walt Whitman', 

    año: 1912,
    genero: 'Poesía', 
    disponible: false
  },
  {
    id: 2,
    titulo: 'Si tuviera que escribirte',
    autor: 'Alejandra Correa',
    año: 2023,
    genero: 'Poesía',
    disponible: false
  },
  {
    id: 3,
    titulo: 'Surco abierto surco abierto', 
    autor: 'Liliana Mainardi', 
    año: 2015,
    genero: 'Poesía',
    disponible: true
  },
  {
    id: 4,
    titulo: 'La inmortalidad',
    autor: 'Milan Kundera',
    año: 1990,
    genero: 'Novela',
    disponible: false
  },
  {
    id: 5,
    titulo: 'Todas las cosas brillantes y hermosas',
    autor: 'James Herriot',
    año: 1976,
    genero: 'Novela',
    disponible: false
  },
  {
    id: 6,
    titulo: 'Hombres de maíz',
    autor: 'Miguel Ángel Asturias',
    año: 1949,
    genero: 'Novela',
    disponible: false
  },
  {
    id: 7,
    titulo: 'Proceso y realidad',
    autor: 'A. N. Whitehead',
    año: 2021,
    genero: 'Filosofía',
    disponible: false
  },
  {
    id: 8,
    titulo: 'Reactivar el sentido común: Whitehead en tiempos de debacle',
    autor: 'Isabelle Stengers',
    año: 2022,
    genero: 'Filosofía',
    disponible: false
  },
  {
    id: 9,
    titulo: 'El concepto de naturaleza',
    autor: 'A. N. Whitehead',
    año: 2019,
    genero: 'Filosofía',
    disponible: true
  },
  {
    id: 10,
    titulo: 'Modos de pensamiento',
    autor: 'A. N. Whitehead',
    año: 2022,
    genero: 'Filosofía',
    disponible: false
  },
  {
    id: 11,
    titulo: 'Pensar con Whitehead: una creación de conceptos libres y salvajes',
    autor: 'Isabelle Stengers',
    año: 2020,
    genero: 'Filosofía',
    disponible: false
  }
];

/*b)Crear un array de objetos llamado usuarios que contenga al menos 5 usuarios. */

let usuarios = [
  {
    id: 1,
    nombre: 'Sofia Chiliguay',
    email: 'sofiCh@gmail.com',
    librosPrestados: [1, 2],
  },
  {
    id: 2,
    nombre: 'Celeste Naninni',
    email: 'celennn@gmail.com',
    librosPrestados: [5, 6],
  },
  {
    id: 3,
    nombre: 'Lourdes Chiliguay',
    email: 'lou.ten@gmail.com',
    librosPrestados: [4],
  },
  {
    id: 4,
    nombre: 'Sofia Casiva',
    email: 'soficas@gmail.com',
    librosPrestados: [7],
  },
  {
    id: 5,
    nombre: 'Giuliano Gamba',
    email: 'Giulix@gmail.com',
    librosPrestados: [11, 10, 8],
  }
]

// Punto dos: funciones de gestion de libro

/*a)Implementar una función agregarLibro(id, titulo, autor, año, genero) que agregue un nuevo 
libro al array libros.*/

function agregarLibros( id, titulo, autor, año, genero){
  //se creo un objeto que representa al nuevo libro
  let nuevoLibro = {
    id: id,
    titulo: titulo,
    autor: autor,
    año: año,
    genero: genero,
    disponible: true //se marca como disponible porque se agrega recien a la biblioteca
  };
//con .push() agregamos el nuevo libro al array libros
libros.push(nuevoLibro);
//mostramos el libro agregado
console.log( 'Agregado: ' + nuevoLibro);
}

/*b)Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o 
género utilizando el algoritmo de búsqueda lineal.*/

function buscarLibro(criterio, valor) {
  //creo un array vacio para guardar los resultados que coincidan
  let encontrado = [];
  //recorremos los libros
  for (let buscado = 0; buscado < libros.length; i++) {
    // verificamos que el criterio exista en el objeto libro y comparamos convirtiendo todo a minusculas con .toLowerCase
    if (libros[buscado][criterio] && libros[buscado][criterio].toLowerCase().includes(valor.toLowerCase())) {
      encontrado.push(libros[buscado]);//si coincide lo agregamos al array de encotrados con .push()
    
    }
  }//usamos if ternario para mostrar los resultados
  encontrado.length > 0 
   ? console.log('Libros encontrados:', encontrado)
   : console.log('No encontrado'); 
   //Mostramos el array de libros encontrados
  return encontrado;
}

/*c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título 
o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego 
muestre los libros ordenados en la consola*/

function ordenarLibros(criterio) {
  // hago una copia del array original para no modificar el original
  let librosOrdenados = libros.slice();
  //bucle bubble sort
  for (let i = 0; i < librosOrdenados.length - 1; i++) {
    for (let j = 0; j < librosOrdenados.length - i - 1; j++) { 
      //si el criterio es 'titulo', comparamos los títulos
      if (criterio === 'titulo') {
        if (librosOrdenados[j].titulo.toLowerCase() > librosOrdenados[j + 1].titulo.toLowerCase()) {
          //intercambio de libros
          let intercambio = librosOrdenados[j];
          librosOrdenados[j] = librosOrdenados[j + 1];
          librosOrdenados[j + 1] = intercambio;
        }
      //si el criterio es 'año', comparamos los años
      } else if (criterio === 'año') {
        if (librosOrdenados[j].año > librosOrdenados[j + 1].año) {
          //intercambio de libros
          let intercambioo = librosOrdenados[j];
          librosOrdenados[j] = librosOrdenados[j + 1];
          librosOrdenados[j + 1] = intercambioo;
        }
      }
    }
  }
//mostramos el array ordenado
  console.log('Libros ordenados por ' + criterio + ':', librosOrdenados);
  return librosOrdenados;
}

/*d)Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.*/

function borrarLibro(id) {
  //busca el índice del libro con el id dado
  let index = libros.findIndex(libro => libro.id === id);
  //si existe un libro con ese id
  if (index !== -1) {
    // se crea un nuevo array que excluye el libro con ese id
    libros = libros.filter(libro => libro.id !== id);
    console.log('Libro borrado correctamente.');
  } else {
    // si no existe avisamos
    console.log('No se encontró un libro con ese id.');
  }
}

// Punto tres: gestion de usuarios

/*a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al 
array usuarios.*/ 

function registrarUsuario(nombre, email) {
  //buscamos el id 
  let nuevoId;
  
  if (usuarios.length > 0) {
    //si hay usuarios, se toma el id del último y se suma 1
    nuevoId = usuarios[usuarios.length - 1].id + 1;
  } else {
    // si no hay usuarios, empezamos con id = 1
    nuevoId = 1;
  }

  // Creamos el nuevo usuario como objeto
  let nuevoUsuario = {
    id: nuevoId,
    nombre: nombre,
    email: email,
    librosPrestados: []
  };

  // Lo agregamos al array de usuarios con .push()
  usuarios.push(nuevoUsuario);

  // Mostramos mensaje para saber que se agregó
  console.log('Usuario registrado correctamente:', nuevoUsuario);
}

/*b)Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios*/

function mostrarTodosLosUsuarios() {
  if (usuarios.length > 0) {
    console.log('Lista de usuarios registrados:');
    console.log(usuarios);
  } else {
    console.log('No hay usuarios registrados.');
  }
}

 /*c)Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.*/ 

 function buscarUsuario(email) {
  //buscamos el usuario cuyo email sea igual al que pasamos
  let usuarioEncontrado = usuarios.find(usuario => usuario.email.toLowerCase() === email.toLowerCase());

  if (usuarioEncontrado) {
    console.log('Usuario encontrado:', usuarioEncontrado);
  } else {
    console.log('No se encontró un usuario con ese email.');
  }
}

/*d)Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.*/

function borrarUsuario(nombre, email) {
  //buscamos el índice del usuario que tenga ese nombre y email (ignorando mayúsculas),usamos .findIndex()
  let index = usuarios.findIndex(
    usuario => usuario.nombre.toLowerCase() === nombre.toLowerCase() &&
               usuario.email.toLowerCase() === email.toLowerCase()
  );

  if (index !== -1) {
    //si lo encontramos, lo borramos del array con .splice()
    usuarios.splice(index, 1);
    console.log('Usuario borrado correctamente.');
  } else {
    console.log('Usuario no encontrado.');
  }
}

//Punto cuatro: sistema de prestamos 1

/*a)Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no 
disponible y lo agregue a la lista de libros prestados del usuario.*/
// En este punto me parecio mejor empezar a usar const para evitar reasignaciones accidentales y porque el valor de la variable no cambia
 
function prestarLibro(idLibro, idUsuario) {
  //buscamos el libro usando su id y .find()
  const libro = libros.find(l => l.id === idLibro);

  //buscamos el usuario con su id y .find()
  const usuario = usuarios.find(u => u.id === idUsuario);
//validamos que existen
  if (!libro) {
    console.log('Libro no encontrado.');
  } else if (!usuario) {
    console.log('Usuario no encontrado.');
  } else if (!libro.disponible) {
    console.log('Libro no disponible');
  } else {
    //prestamos el libro
    libro.disponible = false;// marcamos el libro como no disponible
    //resgistramos el prestamo, lo agregamos al array de libros prestados del usuario
    usuario.librosPrestados.push(idLibro);
    console.log('Libro prestado correctamente al usuario:', usuario.nombre);
  }
}

 /*b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible 
 y lo elimine de la lista de libros prestados del usuario.*/ 

function devolverLibro(idLibro, idUsuario) {
  //buscamos el libro por su id y .find()
  const libro = libros.find(l => l.id === idLibro);

  //buscamos el usuario por su id y .find()
  const usuario = usuarios.find(u => u.id === idUsuario);

  //verificamos que existan
  if (!libro) {
    console.log('El libro no existe.');
    return;
  }

  if (!usuario) {
    console.log('El usuario no existe.');
    return;
  }

  //verificamos si el usuario realmente tenía prestado el libro
  const loTeniaPrestado = usuario.librosPrestados.includes(idLibro);

  if (!loTeniaPrestado) {
    console.log('El usuario no tenía prestado este libro.');
    return;
  }

  //marcamos el libro como disponible no ponemos otro else porque ya sabemos que queda solo la opcion de que si lo tiene
  libro.disponible = true;

  //sacamos el id del libro de la lista de librosPrestados usando .filter
  usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);

  console.log(`El libro "${libro.titulo}" fue devuelto por ${usuario.nombre}.`);
}

// Punto cinco: sistema de prestamos 2

 /*a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), 
 .filter(), .reduce()) para generar un reporte con la siguiente información: Cantidad total de libros,
 cantidad de libros prestados, cantidad de libros por género y libro más antiguo y más nuevo*/

 function generarReporteLibros() {
  //cantidad total de libros
  const totalLibros = libros.length;

  //cantidad de libros prestados (los que NO están disponibles)
  const cantidadPrestados = libros.filter(l => !l.disponible).length;

  //cantidad de libros por genero
  //usamos reduce para recorrer todos los libros y contar por género
  const cantidadPorGenero = libros.reduce((acumulador, libro) => {
    //si ya tenemos ese género, sumamos 1; si no, empezamos desde 1
    if (acumulador[libro.genero]) {
      acumulador[libro.genero]++;
    } else {
      acumulador[libro.genero] = 1;
    }
    return acumulador;
  }, {}); // El acumulador empieza como un objeto vacío

  // Libro más antiguo 
  const libroMasAntiguo = libros.reduce((masAntiguo, libro) => {
    return (libro.año < masAntiguo.año) ? libro : masAntiguo;
  }, libros[0]); //empezamos comparando desde el primer libro

  // Libro más nuevo 
  const libroMasNuevo = libros.reduce((masNuevo, libro) => {
    return (libro.año > masNuevo.año) ? libro : masNuevo;
  }, libros[0]);

  // Mostramos el reporte 
  console.log('Reporte de libros:');
  console.log('Cantidad total de libros:', totalLibros);
  console.log('Cantidad de libros prestados:', cantidadPrestados);
  console.log('Cantidad de libros por género:', cantidadPorGenero);
  console.log('Libro más antiguo:', libroMasAntiguo.titulo, '-', libroMasAntiguo.año);
  console.log('Libro más nuevo:', libroMasNuevo.titulo, '-', libroMasNuevo.año);
}

//Punto seis: Identificacion avanzada de libros
/*a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros
cuyo título contiene más de una palabra (no títulos que contengan números ni otros caracteres).
La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola. */

function librosConPalabrasEnTitulo() {
  const librosFiltrados = libros.filter(libro => {
    const palabras = libro.titulo.split(' ');

    //verificamos que tenga más de una palabra
    if (palabras.length <= 1) {
      return false;
    }

    //verificamos cada palabra
    for (let i = 0; i < palabras.length; i++) {
      const palabra = palabras[i];

      // recorremos cada letra de la palabra
      for (let j = 0; j < palabra.length; j++) {
        const letra = palabra[j].toLowerCase();

        // Si no es una letra (a-z), ni áéíóú, ni ñ, descartamos
        if (
          (letra < 'a' || letra > 'z') &&
          letra !== 'á' && letra !== 'é' && letra !== 'í' &&
          letra !== 'ó' && letra !== 'ú' &&
          letra !== 'ñ'
        ) {
          return false; // si hay un carácter raro, no queremos este título
        }
      }
    }

    // Si todas las palabras tienen solo letras, lo queremos
    return true;
  });

  //creamos un array solo con los títulos usando .map()
  const titulos = librosFiltrados.map(libro => libro.titulo);

  console.log('Títulos válidos:', titulos);
  return titulos;
}

//Punto siete: Calculos estadisticos
/*a)Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
 Promedio de años de publicación de los libros, año de publicación más frecuente, diferencia en años
entre el libro más antiguo y el más nuevo.*/

function calcularEstadisticas() {
  //sacamos todos los años en un array usando map
  const años = libros.map(libro => libro.año);

  //calcula el promedio. Uso funcion anonima, entonces no pongo fuction
  const suma = años.reduce((total, año) => total + año, 0);
  const promedio = Math.round(suma / años.length); // usamos Math.round para redondear

  //encuentra el año más frecuente
  const contador = {}; // objeto para contar cuántas veces aparece cada año
  for (let i = 0; i < años.length; i++) {
    const año = años[i];
    if (contador[año]) {
      contador[año]++;
    } else {
      contador[año] = 1;
    }
  }

  let añoMasFrecuente = años[0];
  let maxRepeticiones = contador[añoMasFrecuente];

  //creamos un array con los años distintos
  let añosUnicos = [];
  for (let i = 0; i < años.length; i++) {
    if (!añosUnicos.includes(años[i])) {
      añosUnicos.push(años[i]);
    }
  }

  //Recorremos esos años únicos y comparamos las repeticiones
  for (let i = 0; i < añosUnicos.length; i++) {
    let año = añosUnicos[i];
    if (contador[año] > maxRepeticiones) {
      maxRepeticiones = contador[año];
      añoMasFrecuente = año;
    }
  }

  //calcular diferencia entre el libro más antiguo y el más nuevo
  const añoMasAntiguo = Math.min(...años);
  const añoMasNuevo = Math.max(...años);
  const diferencia = añoMasNuevo - añoMasAntiguo;

  //mostrar resultados en consola
  console.log('📊 Estadísticas de los libros:');
  console.log('Promedio de años de publicación:', promedio);
  console.log('Año de publicación más frecuente:', añoMasFrecuente);
  console.log('Diferencia en años entre el libro más antiguo y el más nuevo:', diferencia);
}

//Punto ocho: Manejo de cadenaas
/* a) Crear una función normalizarDatos() que utilice métodos de strings para: Convertir todos los
 títulos a mayúsculas, eliminar espacios en blanco al inicio y final de los nombres de autores y 
formatear los emails de los usuarios a minúsculas.*/

function normalizarDatos() {
  //convierte todos los títulos de libros a mayúsculas
  for (let i = 0; i < libros.length; i++) {
    libros[i].titulo = libros[i].titulo.toUpperCase();
  }

  //elimina espacios en blanco al inicio y final de los nombres de autores
  for (let i = 0; i < libros.length; i++) {
    libros[i].autor = libros[i].autor.trim();
  }

  //Formatear los emails de los usuarios a minúsculas
  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].email = usuarios[i].email.toLowerCase();
  }

  console.log('Datos normalizados correctamente');
}

//Punto nueve: interfaz d eusuario por consola
/* a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita
interactuar con el sistema utilizando prompt().El menú debe incluir opciones para todas las 
funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar la l
ógica*/

//usamos prompt-sync
const prompt = require('prompt-sync')({ sigint: true });

function esperarEnter() {
  prompt('\nPresioná Enter para volver al menú...');
}

function menuPrincipal() {
  let opcion;
  do {
    console.clear(); // Limpia la consola para que el menú se vea más ordenado
    console.log('\n Menú Principal');
    console.log('1. Agregar libro');
    console.log('2. Buscar libro');
    console.log('3. Ordenar libros');
    console.log('4. Borrar libro');
    console.log('5. Registrar usuario');
    console.log('6. Mostrar todos los usuarios');
    console.log('7. Buscar usuario');
    console.log('8. Borrar usuario');
    console.log('9. Prestar libro');
    console.log('10. Devolver libro');
    console.log('11. Generar reporte de libros');
    console.log('12. Libros con palabras válidas en título');
    console.log('13. Calcular estadísticas');
    console.log('14. Normalizar datos');
    console.log('0. Salir');

    opcion = prompt('Hola, binvenida/o. Por favor, selecciona una opción: ');

    switch (opcion) {
      case '1':
        let id = Number(prompt('ID del nuevo libro: '));
        let titulo = prompt('Título: ');
        let autor = prompt('Autor: ');
        let año = Number(prompt('Año de publicación: '));
        let genero = prompt('Género: ');
        agregarLibros(id, titulo, autor, año, genero);
        esperarEnter();
        break;

      case '2':
        let criterio = prompt('Buscar por qué criterio? (titulo, autor, genero): ');
        let valor = prompt('Valor a buscar: ');
        buscarLibro(criterio, valor);
        esperarEnter();
        break;

      case '3':
        let criterioOrden = prompt('Ordenar por...(titulo o año): ');
        ordenarLibros(criterioOrden);
        esperarEnter();
        break;

      case '4':
        let idBorrar = Number(prompt('ID del libro a borrar: '));
        borrarLibro(idBorrar);
        esperarEnter();
        break;

      case '5':
        let nombreUsuario = prompt('Nombre del usuario: ');
        let emailUsuario = prompt('Email del usuario: ');
        registrarUsuario(nombreUsuario, emailUsuario);
        esperarEnter();
        break;

      case '6':
        mostrarTodosLosUsuarios();
        esperarEnter();
        break;

      case '7':
        let emailBuscar = prompt('Email del usuario a buscar: ');
        buscarUsuario(emailBuscar);
        esperarEnter();
        break;

      case '8':
        let nombreBorrar = prompt('Nombre del usuario a borrar: ');
        let emailBorrar = prompt('Email del usuario a borrar: ');
        borrarUsuario(nombreBorrar, emailBorrar);
        esperarEnter();
        break;

      case '9':
        let idLibroPrestar = Number(prompt('ID del libro a prestar: '));
        let idUsuarioPrestar = Number(prompt('ID del usuario: '));
        prestarLibro(idLibroPrestar, idUsuarioPrestar);
        esperarEnter();
        break;

      case '10':
        let idLibroDevolver = Number(prompt('ID del libro a devolver: '));
        let idUsuarioDevolver = Number(prompt('ID del usuario: '));
        devolverLibro(idLibroDevolver, idUsuarioDevolver);
        esperarEnter();
        break;

      case '11':
        generarReporteLibros();
        esperarEnter();
        break;

      case '12':
        librosConPalabrasEnTitulo();
        esperarEnter();
        break;

      case '13':
        calcularEstadisticas();
        esperarEnter();
        break;

      case '14':
        normalizarDatos();
        esperarEnter();
        break;

      case '0':
        console.log('¡Hasta luego!');
        break;

      default:
        console.log('Opción inválida. Intenta de nuevo.');
        esperarEnter();
    }
  } while (opcion !== '0');
}


menuPrincipal();




