import React from "react";
import styles from "./CategoryResult.module.css";

const CategoryResult = ({ school }) => {
  let categoryWinners = [
    {
      school: "-",
    },
    {
      school: "Academia Merici",
      category: {
        "Galaxy technicians": [
          "Federica Gomez",
          "Emilia Degwitz",
          "Carmen Nebreda",
        ],
        "Master space technicians": [
          "Abril Federica Haon Arenas",
          "Emiliana Carrasquero",
          "Miranda Ramírez Hernández",
        ],
        "NASA technicians": [
          "Jimena Alejandra Malavé Solano",
          "Miranda Garcia",
          "Rebeca Ochoa",
        ],
      },
    },
    {
      school: "Colegio Altamira",
      category: {
        "Little space engineers": [
          "Ariana Rodriguez",
          "Beatriz Elena Bracho Acurero",
          "María Paula Cano Barros",
        ],
      },
    },
    {
      school: "Colegio Andrés Bello",
      category: {
        "Mini galaxy coders": [
          "López González Jesús Abraham",
          "Romanin Brandys Roberto",
          "Velasco Muñoz Fabrizio",
        ],
      },
    },
    {
      school: "Colegio Caniguá",
      category: {
        "Mini galaxy coders": [
          "Valentina Hernández",
          "Avril Martínez Labarca",
          "Alejandro Medina",
        ],
        "Galaxy technicians": [
          "Máxima Ravelo Amaro",
          "Lucia Arraiz Cordova",
          "Bianca Clarisse Pantoja",
        ],
        "Little space engineers": [
          "Grace Correria Larrauri",
          "Isabella Canal Jiménez",
          "Lourdes Massad",
        ],
        "Master space technicians": [
          "Amaia Isabella Asslan Gondar",
          "Natalia Valentina Orozco Nava",
          "Orianna Valentina Montes Rivas",
        ],
        "NASA technicians": [
          "Isabel Alejandra Itriago Prato",
          "Maria Alejandra Algarra Rangel",
          "Yvonne Sofía Pelayo González",
        ],
      },
    },
    {
      school: "Colegio Casa Grande",
      category: {
        "Mini galaxy coders": [
          "Maximiliano Magallanes",
          "Franklin Ruque",
          "Ángela Chacón",
        ],
        "Galaxy technicians": [
          "Cristian Linares",
          "Miguel Barreto",
          "Carlota Hernandez",
        ],
      },
    },
    {
      school: "CEAMM",
      category: {
        "Mini galaxy coders": [
          "Aria Sophia Arellano Rojas",
          "Sofía Milano Colmenarez",
          "Constanza Rinaldi Izquierdo",
        ],
        "Galaxy technicians": [
          "Adrián Cahuas Parra",
          "Álvaro Enrique Jiménez Rivas",
          "Gabriel Seoyun Kyong Fung",
        ],
        "Little space programmers": [
          "Andres Velasquez",
          "Emma Sofia Escalante Zita",
          "Miranda Victoria Rivas Rodriguez",
        ],
        "Little space engineers": [
          "Ana Sofía Andarcia García",
          "Ivanna Gabriela García Lugo",
          "Jean Alejandro Berris Ramos",
        ],
      },
    },

    {
      school: "Colegio Cristo Rey",
      category: {
        "Mini galaxy coders": [
          "Sophia Daniela Avila Gomez",
          "Arantxa Victoria Malavé Oropeza",
          "Anabella Arias Galavis",
        ],
        "Galaxy technicians": [
          "Arantxa Sofía Useche Prieto",
          "Julieta Coronil Guerrero",
          "Clementina Lepervanche Sahmkov",
        ],
        "Little space programmers": [
          "Andrea Behrens",
          "Daniela Sofia Cordero Blanco",
          "Sofia Goncalvez",
        ],
        "Little space engineers": [
          "Emma Montilla",
          "María Gabriela Blanco D´Gregorio",
          "María Ignacia Guinand",
        ],
      },
    },
    {
      school: "Colegio Donaldo García",
      category: {
        "Mini galaxy coders": [
          "Mia Valentina Montero Graziano",
          "Tomas Alessandro Finol Berrueta",
          "Letecia Przytulski Martinez",
        ],
        "Galaxy technicians": [
          "Luis Angel Moran Ocando",
          "Carlos Manuel Rodriguez Rincon",
          "Firella Valentina Martinez Rincon",
        ],
        "Little space programmers": [
          "Andres David Rodriguez Parra",
          "Maria Elena Urdaneta Suarez",
          "Pablo Andrés Marínez Arcaya",
        ],
        "Little space engineers": [
          "Edgar Paul Carrullo Bautista",
          "Luis Enrique Sandoval Cabrera",
          "Sara Tajeldin Tajeldin",
        ],
        "NASA technicians": [
          "Gabriela Rodríguez",
          "Jose Ignacio Aguirre Lozano",
          "Stefany Sofía López Carmona",
        ],
      },
    },

    {
      school: "Colegio Don Bosco",
      category: {
        "Galaxy technicians": [
          "Samuel Antonio Caufman",
          "Paul Vallenilla Brito",
          "Jose Ignacio Parra Barreto",
        ],
        "Little space programmers": [
          "Andres Mills",
          "Celeste John",
          "Fabianna Valentina Maita Martinez",
        ],
        "Little space engineers": [
          "Christofer Davila Rodriguez",
          "Cynthia John",
          "Jesús Andrés Sarmiento Moreno",
        ],
        "NASA technicians": [
          "Gabriel José Faneite Olivet",
          "Israel García",
          "Juan Diego Casares Castro",
        ],
        "NASA Specialists": [
          "Freddy Alejandro Fernández Tovar",
          "Gabriel José Fonseca Ferreira",
          "Luis Miguel Velásquez Ramírez",
        ],
      },
    },
    {
      school: "Colegio Henry Clay",
      category: {
        "Mini galaxy coders": [
          "Adrián Valero",
          "Estefanía Gómez",
          "Emmanuel Hindoyan",
        ],
        "Galaxy technicians": [
          "Thiago Fernandez",
          "Jayden Liu",
          "David González",
        ],
        "Little space programmers": [
          "Estefania Fuentes",
          "Fabio Nicola Morazzani Masini",
          "Paulina Piepoli",
        ],
        "Little space engineers": [
          "Felipe Pages",
          "Giuliana Isabella Morazzani Masini",
          "Luis Montenegro",
        ],
      },
    },
    {
      school: "Instituto Andes",
      category: {
        "Mini galaxy coders": [
          "Caballero Alfano AquilesEduardo",
          "Digeovachino Roberts Alessia",
          "Ramírez Cornilliac Eugenia Gisela",
        ],
        "Galaxy technicians": [
          "Pérez Dobelis Agatha Sofía",
          "Villavicencio Medina Fabiola",
          "Armas Ramírez Miranda",
        ],
        "Little space programmers": [
          "Antonella Forti",
          "Jessy Meneses",
          "Valentina Machado",
        ],
        "Little space engineers": [
          "Ana Margarita Arcaya",
          "Clarisa Palacios",
          "Valentina Zambito",
        ],
        "NASA technicians": [
          "Flavia Daniela Jaimes Morean",
          "Maria Clara Diaz",
          "Maria Sofia Ruperti Franco",
        ],
      },
    },
    {
      school: "Instituto Cumbres",
      category: {
        "Galaxy technicians": [
          "Alexander Suárez Rodríguez",
          "Santiago Merckx Figueira",
          "Diego Pereira Carrasquel",
        ],
        "Little space programmers": [
          "Carlos Javier Montilla",
          "Guillermo Rincón",
          "Santiago Emilio Seghabi Youssef",
        ],
        "Master space technicians": [
          "Mauricio Alvarez",
          "Diego Peñaloza Arvelaoz",
          "Enrique Madriz",
        ],
        "NASA technicians": [
          "Alejandro Betancourt Barbosa",
          "Juan Ignacio García Scelza",
          "Sebastian Toledo Grados",
        ],
      },
    },
    {
      school: "Colegio Ítalo Venezolano",
      category: {
        "Mini galaxy coders": [
          "Samir Hachar",
          "Luis Felipe Yanez",
          "Sebastian Zaghloul",
        ],
        "Galaxy technicians": [
          "Thiago Barrios",
          "José Antonio Dos Reis",
          "Miranda Barrera",
        ],
        "Master space technicians": [
          "Angelo José Bifulco León",
          "Delun Gabriel Fuentes Chang",
          "Sebastián Augusto Mendoza Belmonte",
        ],
        "NASA technicians": [
          "Isabella Conde Santini",
          "Mahmoud Elkhatib Mosbah Fayekabdalla",
          "Maximiliano Rodriguez Silvagni",
        ],
      },
    },
    {
      school: "Colegio La Salle",
      category: {
        "Galaxy technicians": [
          "Erick Feng Zheng",
          "Fabian Alonso Palaviccini",
          "Emily Wu Fung",
        ],
        "Little space programmers": [
          "Christian Gabriel Sanguina Andrade",
          "Jesus Gabriel Barreto Palmero",
          "Juliette Aguilar",
        ],
        "Little space engineers": [
          "Anael Siboni",
          "Diego Fernández",
          "Ximena Rodríguez",
        ],
      },
    },
    {
      school: "Colegio Los Arcos",
      category: {
        "Little space programmers": [
          "Fabian José Gómez Dos Reis",
          "Jángel Eduardo Galvis González",
          "Rodrigo Ignacio Degwitz Esclusa",
        ],
        "Master space technicians": ["Joseph Daoud", "Paul Pino"],
        "NASA programmers": [
          "Alfonso Ignacio Leal Gonzales",
          "Erick Nomar Savelli Torreblanca",
          "Santiago Pirela",
        ],
        "NASA specialists": [
          "Adrian Rafael Arreaza Bellorin",
          "Juan Pablo Sifontes Mata",
          "Luis Alejandro Algarra Rangel",
        ],
      },
    },
    {
      school: "Colegio Los Campitos",
      category: {
        "Mini galaxy coders": [
          "Alejandra Hernández Herrera",
          "Alai López Zamacona",
          "Isabella Pérez Ayala",
        ],
        "Master space technicians": [
          "Luciana Elizabeth Canelón Vásquez",
          "Valeria Guerrero González",
          "Victoria Carolina Lasser Romero",
        ],
        "NASA technicians": [
          "Ariana Gil Zoco",
          "Fiorella Mijares Suarez",
          "Gabriela Milena Garzón Fernandéz",
        ],
        "NASA programmers": [
          "Andreina Carolina Punceles Loynaz",
          "Donatella Bracaglia Perdomo",
          "Sophia Córdova",
        ],
      },
    },
    {
      school: "Colegio Madre Matilde",
      category: {
        "Mini galaxy coders": [
          "Noah Medina Quintana",
          "Aranza García Toro",
          "Arabella Laurenza Barrientos",
        ],
        "Galaxy technicians": [
          "Cristóbal Cassier Arteaga",
          "Roberto Chang Montilla",
          "Victoria De Palo Carvajal",
        ],
        "Little space programmers": [
          "Daniel Alejandro De Ponte Do Nascimento",
          "Lucas Manuel Gouveia De Andrade",
          "Mariana Bastardo Arzola",
        ],
        "Little space engineers": [
          "Daniel Alejandro Bastardo Arzola",
          "Ignacio Alejandro Alvarez Angelucci",
          "Simón Mateo Antonio Mora Blanca",
        ],
        "NASA technicians": [
          "Kamila Ali Barakat",
          "Kheder Ali",
          "Victor Manuel Hernandez Garcia",
        ],
      },
    },
    {
      school: "Colegio María Auxiliadora",
      category: {
        "Galaxy technicians": [
          "Juan de Dios Loaiza Materán",
          "Arantxa Tovar Arellano",
          "Victoria Giancona Gil",
        ],
        "Little space programmers": [
          "Ignazio Zamora",
          "Octavio Canelón Bueno",
          "Zoe Hammel",
        ],
        "Little space engineers": [
          "María Fernanda Mongua",
          "Matías Baptista",
          "Sofia Valentina Roa Álvarez",
        ],
        "NASA technicians": [
          "Anna Katherina Figueroa Nieves",
          "Isabella Victoria Flores Espinoza",
          "Stephanie Gabriela Rodriguez Salinas",
        ],
      },
    },
    {
      school: "Colegio Mater Salvatoris",
      category: {
        "Mini galaxy coders": [
          "Eugenia Ardila",
          "Ava Moncada",
          "Sofía Zambelli",
        ],
        "Galaxy technicians": [
          "Alexa Rendón",
          "Maia García",
          "Isabella Ledezma",
        ],
        "Little space programmers": [
          "Arianna Caterina Correia Rodrigues",
          "Ema Vegas Bustamante",
          "Sofia Alexandra Quintero Marcano",
        ],
        "Little space engineers": [
          "Andrea Victoria Rojas Castillo",
          "Fabiana Victoria Chacón Astudillo",
          "Silvana Sangiacomo De Sousa",
        ],
        "NASA technicians": [
          "Marybel Hechfe Chami",
          "Mariana Luces",
          "Zorhiam Alessandra Pérez Ibarra",
        ],
      },
    },
    {
      school: "Colegio Mater Salvatoris Maracaibo",
      category: {
        "NASA technicians": [
          "Andrea Sofía Larreal Barazarte",
          "Andrea Valentina Rodríguez Pérez",
          "Victoria Elena Barboza Mora",
        ],
      },
    },
    {
      school: "Colegio Mi Tita",
      category: {
        "Mini galaxy coders": [
          "Lorenzo José Rodriguez De Freitas",
          "Camila González",
          "Matías Eduardo Pelaes Campo",
        ],
        "Galaxy technicians": [
          "Sophia Amelie Sahmkow",
          "Josue Alejandro Bello Valladares",
          "Manuel Ignacio Garoffalo Bastidas",
        ],
      },
    },
    {
      school: "Colegio Nuestra Señora de Pompei",
      category: {
        "Mini galaxy coders": [
          "Astrid La Madriz",
          "Carlota Fernández",
          "Oscar Jiménez",
        ],
        "Galaxy technicians": [
          "Alessandro Antonella",
          "Victoria Brito",
          "Andrés Montilla",
        ],
        "Little space programmers": [
          "Angelina Isabella Gomes Angiolillo",
          "Erika Gabriela Magdaleno Suarez",
          "Nathalia Isabella Angiolillo Echenique",
        ],
        "Little space engineers": [
          "Samuel Magdaleno",
          "Fabián Alexander Alvarado Rauseo",
          "Mathías Alejandro Oviedo Sánchez",
        ],
      },
    },
    {
      school: "Colegio Roraima",
      category: {
        "Mini galaxy coders": ["Rafael Delgado", "Guillermo García", "Ana Paz"],
        "Galaxy technicians": [
          "Carlota Garmendia",
          "Erick Villegas",
          "Dominic Vargas",
        ],
        "Master space technicians": [
          "Aaron Martinez",
          "Clementina Isasi Seguías",
          "Santiago Alberto Vargas Contreras",
        ],
      },
    },
    {
      school: "Colegio San Agustín El Marqués",
      category: {
        "Master space technicians": [
          "Damir Iskra",
          "Diego Rafael Sánchez Blandin",
        ],
        "NASA technicians": [
          "Daniel Fernando Alonso Mac Cragh",
          "Gianmarco Alvarez",
          "Luis Enrique Navarro Hernández",
        ],
      },
    },
    {
      school: "Colegio San Agustín El Paraíso",
      category: {
        "Mini galaxy coders": [
          "Julian Barroeta",
          "Antonella Sanchez",
          "Gabriel Fernandez",
        ],
        "Galaxy technicians": [
          "Valery Loper",
          "Gustavo Carrera",
          "Adelys Campos",
        ],
        "Master space technicians": [
          "Andrés Manuel Ulloa Becerra",
          "Hadi Hammoud",
          "Lucciano Gerardo Quiroz Guevara",
        ],
        "NASA technicians": [
          "Ailyn Daniela Cumaray Morales",
          "Iván Rodríguez",
          "Nicol Andrea Martins De Abreu",
        ],
        "NASA programmers": [
          "Cristina Alejandra Sánchez El Ryfaie",
          "Samantha Santorsola",
          "Victoria Isabel Gil Adames",
        ],
      },
    },
    {
      school: "Colegio Santa Rosa de Lima",
      category: {
        "Mini galaxy coders": [
          "Bianca Gónzalez Loyo",
          "Antonio Ramirez Guerrero",
          "Monserrat Acosta Mansour",
        ],
        "Galaxy technicians": [
          "Santiago Cruz Ereu Frank",
          "Marcel Fuentes",
          "Ivanna Yantis Cabrera",
        ],
      },
    },
    {
      school: "Colegio Simón Bolívar I",
      category: {
        "Galaxy technicians": [
          "José Joaquín Jaspe",
          "Mathias Medina",
          "Jorge Molinos",
        ],
        "Master space technicians": [
          "Ailyn Alexandra Acosta Ardila",
          "Luis Enrique Romero Perez",
          "Tomás Alejandro Jiménez Cárdenas",
        ],
      },
    },
    {
      school: "Colegio Simón Bolívar II",
      category: {
        "Master space technicians": [
          "Alejandro Escobar",
          "Alessandro Angelucci Morán",
          "Maria Joaquina Gonzalez",
        ],
        "NASA technicians": [
          "Diego Enrique Cruz Galindo",
          "Joseph Gregorio Awak Banna",
          "Matthew Donovan González Morales",
        ],
        "NASA programmers": [
          "Andres Alejandro Hitti Siervo",
          "José Manuel Lozano",
          "Mohamad El Kadri Hammoud",
        ],
        "NASA specialists": [
          "Carlo Grata",
          "Jesús Eduardo Jasso Aguilar",
          "José Chacón",
        ],
      },
    },
    {
      school: "Pequeñitos de Mamá Margarita",
      category: {
        "Mini galaxy coders": [
          "Amelie Noya Alezones",
          "Ashraf Santiago El Mothar",
          "Hector Reyes Oliver",
        ],
      },
    },
    {
      school: "Preescolar Las Tunitas",
      category: {
        "Mini galaxy coders": [
          "Alessandro Di Cicilia",
          "Matias Alejandro Soto Vasquez",
          "Mathias Rivas Gener",
        ],
      },
    },
    {
      school: "Preescolar Los Pinitos",
      category: {
        "Mini galaxy coders": [
          "Rodrigo Sánchez",
          "Jhonny Calderón",
          "Victoria Periañez",
        ],
      },
    },
    {
      school: "Preescolar Monte Alto",
      category: {
        "Mini galaxy coders": [
          "Gaizka Urreiztieta",
          "Massimo Contreras",
          "Paula Garcia",
        ],
      },
    },
    {
      school: "Preescolar My Spot",
      category: {
        "Mini galaxy coders": [
          "Agatha Argon",
          "Thiago Correia",
          "Corina Guiliarte",
        ],
      },
    },
    {
      school: "Preescolar Puki Puki",
      category: {
        "Mini galaxy coders": [
          "Gael Pereira",
          "Sebastian Tiniacos",
          "Andrés Medina",
        ],
      },
    },
    {
      school: "Preescolar Step by Step",
      category: {
        "Mini galaxy coders": [
          "Nichole Trujillo Resnik",
          "Rodrigo Alejandro Innecco Rivero",
          "Alessia Mariana Guzman Charco",
        ],
      },
    },
    {
      school: "Academia Tecnikids",
      category: {
        "Mini galaxy coders": [
          "Paolo Dragone Blanco",
          "Ethan Quintana",
          "Zahir Yusuf Toro Mujica",
        ],
        "Galaxy technicians": [
          "Martín Gerardo Figueira",
          "Sergio Rivas",
          "Thiago Alves Rodríguez",
        ],
        "Little space programmers": [
          "Gabriel Enrique Ordaz Villegas",
          "Carlos Francisco Valensi Ríos",
          "Francisco Fernández",
        ],
        "Little space engineers": [
          "Luca Rubertelli Hernandez",
          "Mateo Espinoza",
          "Fernando Bulmez Rodríguez",
        ],
        "NASA technicians": [
          "Jesús David Quintero",
          "Nicolás Alejandro Galíndez Quijada",
          "Sebastián Pita",
        ],
        "NASA programmers": [
          "Juan Andrés Pérez Olavarri",
          "Manuel Ignacio Díaz Delgado",
          "Sofía Jurado-Blanco",
        ],
      },
    },
  ];

  let selectedSchool = categoryWinners.filter(
    (item) => item.school === school
  )[0];

  let schoolCategories =
    selectedSchool && Object.keys(selectedSchool["category"]);

  console.log(schoolCategories);

  return (
    <div className={styles.container}>
      {schoolCategories &&
        schoolCategories.map((category) => (
          <div className={styles.category}>
            <h3>{category}</h3>
            {console.log(selectedSchool.category[category])}
            {selectedSchool.category[category].map((student) => (
              <li>{student}</li>
            ))}
          </div>
        ))}
    </div>
  );
};

export default CategoryResult;
