const menu = {
    "arepas": [
        { "name": "Cojame La Arepa", "price": "$14.000", "description": "Pollo desmechado, salchicha, maicitos, dulce maíz y queso", "image": "../images/CoajmeLarepa.jpg" },
        { "name": "Arepa Arriera", "price": "$17.000", "description":"Carne desmechada, pollo desmechado, chicharrón, jamón, chorizo,maíz tierno, queso gratinado y huevo de codorniz", "image": "../images/ArepaArriera.jpg" },
        { "name": "Arepa de Carne", "price": "$13.000", "description": "Carne desmechada y queso gratinado", "image": "../images/arepaCarne.jpg" },
        { "name": "Arepa de Pollo", "price": "$12.000", "description": "Pollo desmechado y queso gratinado", "image": "../images/arepaPollo.jpg" },
        { "name": "Arepa Mixta", "price": "$14.000", "description": "Carne desmechada, pollo desmechado, chicharrón, jamón, chorizo, maíz tierno, queso gratinado y huevo de codorniz","image": "../images/arepaR.png" },
        { "name": "Arepa Super", "price": "$15.000", "description": "Carne y pollo desmechado, queso gratinado, chicharrón, huevo de codorniz","image": "../images/arepaR.png" }
    ],
    "carnes": [
        { "name": "Punta De Anca", "price": "$34.000", "description": "Papas a la francesa, arepa con queso y ensalada","image": "../images/Puntadeanca.jpg" },
        { "name": "Churrasco", "price": "$34.000", "description": "Papas a la francesa, arepa con queso y ensalada","image": "../images/punta.png" },
        { "name": "Lomo de Cerdo", "price": "$27.000", "description": "Papas a la francesa, arepa con queso y ensalada","image": "../images/LomoC.jpg" },
        { "name": "Filete de Pollo", "price": "$25.000","description": "Papas a la francesa, arepa con queso y ensalada", "image": "../images/punta.png" }
    ],
    "hamburguesas": [
        { "name": "Hamburguesa Sencilla", "price": "$13.000", "description": "Pan artesanal, carne de res, lechuga, queso, tomate, piña","image": "../images/hamb.png" },
        { "name": "Hamburguesa Especial", "price": "$17.000", "description": "Pan artesanal, carnee de res, doble queso, tocineta, maicitos, lechuga, tomate, cebolla y piña","image": "../images/HambEsp.jpg" },
        { "name": "Hamburguesa de Pollo", "price": "$16.000","description": "Pan artesanal, filete de pollo, doble queso, tocineta, lechuga, tomate, cebolla y piña", "image": "../images/hamb.png" },
        { "name": "La Burguer House", "price": "$30.000","description": "Pan hamburguesa, carne de res,cebolla, tomate, lechuga, carne y pollo desmechado, queso chedar, queso en loncha, mermelada, tocineta, chorizo bbq", "image": "../images/burguerHouse.jpg" },
        { "name": "Hamburguesa Doble Carne", "price": "$25.000","description": "Pan artesanal, doble carne, doble queso, tomate, tocineta, maicitos, lechuga, cebolla y piña", "image": "../images/burguerDoble.jpg" },
        { "name": "Hamburguesa Crunch", "price": "$16.000","description": "Pan, lechuga, pepinillos agridulces, cebolla caramelizada, tocineta picada", "image": "../images/hamb.png" },
        { "name": "Hamburguesa Mixta", "price": "$24.000", "description": "Pan hamburguesa, pollo y res, cebolla, tomate, lechuga, piña, tocineta, queso, aros de cebolla","image": "../images/hamb.png" },
        { "name": "Arepa Burguer Sencilla", "price": "$14.000","description": "Arepa, carne de res, cebolla, lechuga, piña y queso", "image": "../images/areSenc.jpg" },
        { "name": "Arepa Burguer Especial", "price": "$20.000","description": "Arepa, carne de res, pollo desmechado, cebolla, piña, tocineta y doble queso", "image": "../images/areBurEsp.jpg" }
    ],
    "patacones": [
        { "name": "Patacón con Todo", "price": "$18.000", "description": "Pollo desmechado, carne desmechada, chicharrón, maicitos, queso criollo y dulce maíz","image": "../images/pataconTodo.jpg" },
        { "name": "Patacón Mini Mixto", "price": "$16.000","description": "Pollo desmechado, carne desmechada, maicitos, queso criollo y dulce maíz", "image": "../images/patacon.png" }
    ],
    "alitas": [
        { "name": "Alitas BBQ x6", "price": "$22.000", "description": "Acompañadas de papas a la francesa","image": "../images/alasx6.jpg" },
        { "name": "Alitas BBQ x8", "price": "$26.000", "description": "Acompañadas de papas a la francesa","image": "../images/alitas.png" },
        { "name": "Alitas BBQ x10", "price": "$28.000","description": "Acompañadas de papas a la francesa", "image": "../images/alitas.png" },
        { "name": "Alitas BBQ x12", "price": "$33.000","description": "Acompañadas de papas a la francesa", "image": "../images/alasx12.jpg" }
    ],
    "salchipapas": [
        { "name": "Salchipapas Clásica", "price": "$15.000","description": "Papa a la francesa, salchicha, maíz tierno, tocineta, queso gratinado y salsa dulce maíz", "image": "../images/clasica.png" },
        { "name": "Salchipapas Mini super", "price": "$18.000","description": "Papa a la francesa, salchicha, maíz tierno, tocineta,pollo desmechado, queso gratinado y salsa dulce maíz", "image": "../images/salchiMedia.jpg" },
        { "name": "Salchipapas Super", "price": "$35.000","description": "Papa a la francesa, salchicha XL, tocineta, maíz en grano, pollo desmechado, dulce maíz, queso criollo o queso en loncha gratinado, huevo de codorniz x3", "image": "../images/Salchipapa.jpg" },
        { "name": "Salchipapas La Monster", "price": "$56.000","description": "Papa a la francesa, salchicha XL, tocineta, maíz en grano, pollo desmechado, chicharrón, chorizo, pico de gallo, queso criollo o queso en loncha gratinado, dulce maíz, huevo de codorniz x5", "image": "../images/laMonster.jpg" },
        { "name": "Desgranado", "price": "$33.000","description": "Pollo y carne desmechada, chorizo, costilla, salchicha, maicitos, ripio, queso gratinado", "image": "../images/desgranado.jpg" },
        { "name": "Salchipapas La Monster", "price": "$32.000","description": "Croquetas de yuca, arepa con queso, ensalada", "image": "../images/laMonster.jpg" },
    ],
    "perros": [
        { "name": "Perro Sencillo", "price": "$12.000","description": "Pan artesanal, salchicha, queso gratinado, cebolla, tocineta, ripio", "image": "../images/perro.png" },
        { "name": "Perro Especial", "price": "$14.000","description": "Pan artesanal, salchicha especial, queso gratinado, maicitos, cebolla, tocineta, ripio", "image": "../images/perroEsp.jpg" },
        { "name": "Super Perro", "price": "$20.000","description": "Pan bimbo artesanal, salchicha grande, piña, cebolla, tocineta, maicitos, ripio, polllo desmechado y dulce maíz", "image": "../images/superP.png" },
        { "name": "Perro Super Dog", "price": "$25.000","description": "Pan artesanal, carne desmechada, chicharrón, maduro calado, tocineta caramelizada y queso criollo", "image": "../images/superP.png" },
        { "name": "Chori-Perro", "price": "$27.000","description": "Pan artesanal, salchicha especial, chorizo, pollo y carne desmechada, cebolla, tocineta en mermelada, ripio, queso criollo o loncha gratinada, huevo de codorniz", "image": "../images/ChoriPerro.jpg" },
    ],
    "empanadas & porciones": [
        { "name": "Empanada de Carne", "price": "$2.500","description": "Carne", "image": "../images/empanada.jpg" },
        { "name": "Empanada de Pollo", "price": "$2.500","description": "Pollo", "image": "../images/empanada.jpg" },
        { "name": "Porción de yuca", "price": "$4.500","description": "Yuca", "image": "../images/empanada.jpg" },
        { "name": "Porción papa francesa", "price": "$4.500","description": "Francesa", "image": "../images/empanada.jpg" }
    ],
    "bebidas": [
        { "name": "Jugos Naturales en Agua", "price": "$6.000","description": "Fresa, mango, maracuya, mora", "image": "../images/enAgua.jpg" },
        { "name": "Jugods Naturales en Leche", "price": "$7.000","description": "Fresa, mango, maracuya, mora", "image": "../images/enLeche.jpg" },
        { "name": "HIT 500ML", "price": "$3.000","description": "", "image": "../images/HITP.jpg" },
        { "name": "Coca-Cola 400ML", "price": "$3.500", "description": "","image": "../images/coca.jpg" },
        { "name": "Gaseosa Postobon 400ML", "price": "$2.500","description": "", "image": "../images/PostobonP.jpg" },
        { "name": "Agua sin Gas", "price": "$2.500","description": "", "image": "../images/singas.jpg" },
        { "name": "Agua con Gas", "price": "$2.500", "description": "","image": "../images/conGas.jpg" },
        { "name": "HIT en Caja 1L", "price": "$5.000","description": "", "image": "../images/hcaja.jpg" },
        { "name": "Milo Frío", "price": "$6.000","description": "", "image": "../images/frio.jpg" },
        { "name": "Milo Caliente", "price": "$4.500","description": "", "image": "../images/caliente.jpg" }
    ]
};
// const categoryIcons = {
//     "arepas": "../images/arepaIcon.png",
//     "carnes": "../images/carneIcon.png",
//     "hamburguesas": "../images/hamburguesaIcon.png",
//     "patacones": "../images/pataconIcon.png",
//     "alitas": "../images/alitasIcon.png",
//     "salchipapas": "../images/salchipapasIcon.png",
//     "perros": "../images/perrosIcon.png"
// };

const menuSection = document.getElementById("menu");
const backButton = document.getElementById("backButton");

// Función para mostrar los elementos de una categoría
function showCategory(category) {
    menuSection.innerHTML = ""; // Limpiamos el contenido anterior del menú

    // Recorremos los elementos de la categoría y los agregamos al HTML
    menu[category].forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = "Precio: " + product.price;

        const productDescription = document.createElement("p"); 
        productDescription.textContent = product.description;

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);
        productDiv.appendChild(productImage);

        menuSection.appendChild(productDiv);
    });

    // Mostrar el botón de regreso
    backButton.style.display = "inline-block";
}

// Función para mostrar todas las categorías
function showAllCategories() {
    menuSection.innerHTML = ""; // Limpiamos el contenido anterior del menú

    // Generamos los botones de categoría y les asignamos el evento de clic
    for (const category in menu) {
        const categoryButton = document.createElement("button");

        // Crear un contenedor para el texto y el ícono
        const buttonContent = document.createElement("div");
        buttonContent.classList.add("category-button-content");

        // Crear el ícono solo para la categoría "arepas"
        if (category === "arepas") {
            const categoryIcon = document.createElement("img");
            categoryIcon.src = "../images/arepaIcon.png"; // Ruta del ícono para la categoría "arepas"
            categoryIcon.alt = category;
            categoryIcon.classList.add("arepas-icon");

            // Añadir el ícono al contenedor
            buttonContent.appendChild(categoryIcon);
        }
        if (category === "carnes") {
            const categoryIcon = document.createElement("img");
            categoryIcon.src = "../images/carneIcon.png"; // Ruta del ícono para la categoría "arepas"
            categoryIcon.alt = category;
            categoryIcon.classList.add("arepas-icon");

            // Añadir el ícono al contenedor
            buttonContent.appendChild(categoryIcon);
        }
        if (category === "hamburguesas") {
            const categoryIcon = document.createElement("img");
            categoryIcon.src = "../images/hamburguesaIcon.png"; // Ruta del ícono para la categoría "arepas"
            categoryIcon.alt = category;
            categoryIcon.classList.add("arepas-icon");

            // Añadir el ícono al contenedor
            buttonContent.appendChild(categoryIcon);
        }
        if (category === "patacones") {
            const categoryIcon = document.createElement("img");
            categoryIcon.src = "../images/pataconIcon.png"; // Ruta del ícono para la categoría "arepas"
            categoryIcon.alt = category;
            categoryIcon.classList.add("arepas-icon");

            // Añadir el ícono al contenedor
            buttonContent.appendChild(categoryIcon);
        }
        if (category === "alitas") {
            const categoryIcon = document.createElement("img");
            categoryIcon.src = "../images/alitasIcon.png"; // Ruta del ícono para la categoría "arepas"
            categoryIcon.alt = category;
            categoryIcon.classList.add("arepas-icon");

            // Añadir el ícono al contenedor
            buttonContent.appendChild(categoryIcon);
        }
        if (category === "salchipapas") {
            const categoryIcon = document.createElement("img");
            categoryIcon.src = "../images/salchipapasIcon.png"; // Ruta del ícono para la categoría "arepas"
            categoryIcon.alt = category;
            categoryIcon.classList.add("arepas-icon");

            // Añadir el ícono al contenedor
            buttonContent.appendChild(categoryIcon);
        }
        if (category === "salchipapas") {
            const categoryIcon = document.createElement("img");
            categoryIcon.src = "../images/papasIcon.png"; // Ruta del ícono para la categoría "arepas"
            categoryIcon.alt = category;
            categoryIcon.classList.add("arepas-icon");

            // Añadir el ícono al contenedor
            buttonContent.appendChild(categoryIcon);
        }
        if (category === "perros") {
            const categoryIcon = document.createElement("img");
            categoryIcon.src = "../images/perrosIcon.png"; // Ruta del ícono para la categoría "arepas"
            categoryIcon.alt = category;
            categoryIcon.classList.add("arepas-icon");

            // Añadir el ícono al contenedor
            buttonContent.appendChild(categoryIcon);
        }
        if (category === "empanadas & porciones") {
            const categoryIcon = document.createElement("img");
            categoryIcon.src = "../images/empanadaIcon.png"; // Ruta del ícono para la categoría "arepas"
            categoryIcon.alt = category;
            categoryIcon.classList.add("arepas-icon");

            // Añadir el ícono al contenedor
            buttonContent.appendChild(categoryIcon);
        }
        if (category === "bebidas") {
            const categoryIcon = document.createElement("img");
            categoryIcon.src = "../images/bebidaIcon.png"; // Ruta del ícono para la categoría "arepas"
            categoryIcon.alt = category;
            categoryIcon.classList.add("arepas-icon");

            // Añadir el ícono al contenedor
            buttonContent.appendChild(categoryIcon);
        }
        // Crear el texto de la categoría
        const categoryText = document.createElement("span");
        categoryText.textContent = category.replace("_", " ").toUpperCase();

        // Añadir el texto al contenedor
        buttonContent.appendChild(categoryText);

        // Añadir el contenedor al botón
        categoryButton.appendChild(buttonContent);

        // Asignar el evento de clic al botón
        categoryButton.addEventListener("click", function() {
            showCategory(category);
        });

        menuSection.appendChild(categoryButton);
    }

    // Ocultar el botón de regreso
    backButton.style.display = "none";
}

// Mostrar todas las categorías al cargar la página
showAllCategories();

// Asignar el evento de clic al botón de regreso
backButton.addEventListener("click", function() {
    showAllCategories();
});