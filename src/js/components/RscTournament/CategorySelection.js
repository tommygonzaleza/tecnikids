import React, { useState } from "react";
import CategoryChallenge from "./CategoryChallenge";
import CategoryResult from "./CategoryResult";
import styles from "./CategorySelection.module.css";

const CategorySelection = () => {
  const [selection, setSelection] = useState({
    school: "",
    grade: "",
    category: "",
    formLink: "",
  });

  const [categories, setCategories] = useState([]);

  let tournamentCategories = [
    {
      school: "Selecciona tu Colegio",
      category: {
        "": "N/A",
        "2do grado": "N/A",
        "3er grado": "N/A",
        "4to grado": "N/A",
        "5to grado": "N/A",
        "6to grado": "N/A",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "Academia Merici",
      category: {
        "2do grado": "Master space technicians",
        "3er grado": "Master space technicians",
        "4to grado": "Master space technicians",
        "5to grado": "Master space technicians",
        "6to grado": "Master space technicians",
        "1er año": "NASA technicians",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "Colegio Altamira",
      category: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers",
        "5to grado": "Little space engineers",
        "6to grado": "Little space engineers",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "Colegio Andrés Bello",
      category: {
        "2do grado": "N/A",
        "3er grado": "N/A",
        "4to grado": "N/A",
        "5to grado": "N/A",
        "6to grado": "N/A",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "Colegio Caniguá",
      category: {
        "2do grado": "Master space technicians",
        "3er grado": "Master space technicians",
        "4to grado": "Master space technicians",
        "5to grado": "Master space technicians",
        "6to grado": "Little space engineers",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA technicians",
        "5to año": "NASA technicians",
      },
    },
    {
      school: "Colegio Casagrande",
      category: {
        "2do grado": "N/A",
        "3er grado": "N/A",
        "4to grado": "N/A",
        "5to grado": "N/A",
        "6to grado": "N/A",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "CEAMM",
      category: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers",
        "5to grado": "Little space engineers",
        "6to grado": "Little space engineers",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "Colegio Cristo Rey",
      category: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers",
        "5to grado": "Little space engineers",
        "6to grado": "Little space engineers",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "Colegio Don Bosco",
      category: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers",
        "5to grado": "Little space engineers",
        "6to grado": "Little space engineers",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA specialists",
        "5to año": "NASA specialists",
      },
    },
    {
      school: "Colegio Donaldo García",
      category: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers",
        "5to grado": "Little space engineers",
        "6to grado": "Little space engineers",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA technicians",
        "5to año": "NASA technicians",
      },
    },
    {
      school: "Colegio Henry Clay",
      category: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers",
        "5to grado": "Little space engineers",
        "6to grado": "Little space engineers",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "Instituto Andes",
      category: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers",
        "5to grado": "Little space engineers",
        "6to grado": "Little space engineers",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA technicians",
        "5to año": "NASA technicians",
      },
    },
    {
      school: "Instituto Cumbres",
      category: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Master space technicians",
        "5to grado": "Master space technicians",
        "6to grado": "Master space technicians",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "Colegio Ítalo Venezolano",
      category: {
        "2do grado": "Master space technicians",
        "3er grado": "Master space technicians",
        "4to grado": "Master space technicians",
        "5to grado": "Master space technicians",
        "6to grado": "Master space technicians",
        "1er año": "NASA technicians",
        "2do año": "NASA programmers",
        "3er año": "NASA programmers",
        "4to año": "NASA specialists",
        "5to año": "NASA specialists",
      },
    },
    {
      school: "Colegio La Salle",
      category: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers",
        "5to grado": "Little space engineers",
        "6to grado": "Little space engineers",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "Colegio Los Arcos",
      category: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Master space technicians",
        "5to grado": "Master space technicians",
        "6to grado": "Master space technicians",
        "1er año": "NASA technicians",
        "2do año": "NASA programmers",
        "3er año": "NASA specialists",
        "4to año": "NASA specialists",
        "5to año": "N/A",
      },
    },
    {
      school: "Colegio Los Campitos",
      category: {
        "2do grado": "Master space technicians",
        "3er grado": "Master space technicians",
        "4to grado": "Master space technicians",
        "5to grado": "Master space technicians",
        "6to grado": "Master space technicians",
        "1er año": "NASA technicians",
        "2do año": "NASA programmers",
        "3er año": "NASA programmers",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "Colegio Madre Matilde",
      category: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers",
        "5to grado": "Little space engineers",
        "6to grado": "Little space engineers",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA technicians",
        "5to año": "NASA technicians",
      },
    },
    {
      school: "Colegio María Auxiliadora",
      category: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers",
        "5to grado": "Little space engineers",
        "6to grado": "Little space engineers",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA technicians",
        "5to año": "NASA technicians",
      },
    },
    {
      school: "Colegio Mater Salvatoris",
      category: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers",
        "5to grado": "Little space engineers",
        "6to grado": "Little space engineers",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA technicians",
        "5to año": "NASA technicians",
      },
    },
    {
      school: "Colegio Mater Salvatoris Maracaibo",
      category: {
        "2do grado": "N/A",
        "3er grado": "N/A",
        "4to grado": "N/A",
        "5to grado": "N/A",
        "6to grado": "N/A",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA technicians",
        "5to año": "NASA technicians",
      },
    },
    {
      school: "Colegio Mi Tita",
      category: {
        "2do grado": "N/A",
        "3er grado": "N/A",
        "4to grado": "N/A",
        "5to grado": "N/A",
        "6to grado": "N/A",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "Colegio Nuestra Señora de Pompei",
      category: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers",
        "5to grado": "Little space engineers",
        "6to grado": "Little space engineers",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA technicians",
        "5to año": "NASA technicians",
      },
    },
    {
      school: "Colegio Roraima",
      category: {
        "2do grado": "Master space technicians",
        "3er grado": "Master space technicians",
        "4to grado": "Master space technicians",
        "5to grado": "Master space technicians",
        "6to grado": "Master space technicians",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "Colegio San Agustín El Marqués",
      category: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Master space technicians",
        "5to grado": "Master space technicians",
        "6to grado": "Master space technicians",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA technicians",
        "5to año": "NASA technicians",
      },
    },
    {
      school: "Colegio San Agustín El Paraíso",
      category: {
        "2do grado": "Master space technicians",
        "3er grado": "Master space technicians",
        "4to grado": "Master space technicians",
        "5to grado": "Master space technicians",
        "6to grado": "Master space technicians",
        "1er año": "NASA technicians",
        "2do año": "NASA programmers",
        "3er año": "NASA programmers",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "Colegio Santa Rosa de Lima",
      category: {
        "2do grado": "N/A",
        "3er grado": "N/A",
        "4to grado": "N/A",
        "5to grado": "N/A",
        "6to grado": "N/A",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "Colegio Simón Bolívar I",
      category: {
        "2do grado": "Master space technicians",
        "3er grado": "Master space technicians",
        "4to grado": "N/A",
        "5to grado": "N/A",
        "6to grado": "N/A",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "Colegio Simón Bolívar II",
      category: {
        "2do grado": "N/A",
        "3er grado": "N/A",
        "4to grado": "Master space technicians",
        "5to grado": "Master space technicians",
        "6to grado": "Master space technicians",
        "1er año": "NASA technicians",
        "2do año": "NASA programmers",
        "3er año": "NASA specialists",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      school: "Pequeñitos de Mamá Margarita",
      category: {
        "1er Nivel": "N/A",
        "2do Nivel": "N/A",
        "3er Nivel": "N/A",
      },
    },
    {
      school: "Preescolar Las Tunitas",
      category: {
        "1er Nivel": "N/A",
        "2do Nivel": "N/A",
        "3er Nivel": "N/A",
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
        "1er Nivel": "N/A",
        "2do Nivel": "N/A",
        "3er Nivel": "N/A",
      },
    },
    {
      school: "Preescolar My Spot",
      category: {
        "1er Nivel": "N/A",
        "2do Nivel": "N/A",
        "3er Nivel": "N/A",
      },
    },
    {
      school: "Preescolar Puki Puki",
      category: {
        "1er Nivel": "N/A",
        "2do Nivel": "N/A",
        "3er Nivel": "N/A",
      },
    },
    {
      school: "Preescolar Step by Step",
      category: {
        "1er Nivel": "N/A",
        "2do Nivel": "N/A",
        "3er Nivel": "N/A",
      },
    },
    {
      school: "Academia Tecnikids",
      category: {
        "Little Programmers": "Little space programmers",
        "Super Technicians": "Little space engineers",
        "Master Technicians": "NASA technicians",
        Specialists: "NASA programmers",
      },
    },
  ];

  let formLinks = {
    "Little space programmers": "https://forms.gle/cPxLav4UewxGL91L7",
    "Little space engineers": "https://forms.gle/ESZajbtwmpVXjSh48",
    "Master space technicians": "https://forms.gle/SAVDSY4CWMLX9hm9A",
    "NASA technicians": "https://forms.gle/Ev8stRtrTiZ1EovA8",
    "NASA programmers": "https://forms.gle/CqEhmYPvRXKKkTHu9",
    "NASA specialists": "https://forms.gle/jXZeSy1Fik41Fp9BA",
  };

  let schoolDropdownContent = tournamentCategories.map((item) => (
    <option>{item["school"]}</option>
  ));

  // let categoryDropdownContent = categories.map((item) => (
  //   <option>{item}</option>
  // ));

  const findCategory = () => {
    if (selection.grade !== "" && selection.grade !== "-") {
      let selectedItem = tournamentCategories.filter(
        (item) => item["school"] === selection["school"]
      )[0];
      let tournamentCategory = selectedItem.category[selection.grade];
      let tournamentForm = formLinks[tournamentCategory];

      setSelection({
        ...selection,
        category: tournamentCategory,
        formLink: tournamentForm,
      });
    }
  };

  const schoolChangeHandler = (e) => {
    let availableCategories = Object.keys(
      tournamentCategories.filter((item) => item.school === e.target.value)[0][
        "category"
      ]
    );
    availableCategories.unshift("-");
    setCategories(availableCategories);

    setSelection({
      ...selection,
      school: e.target.value,
      category: "",
      formLink: "",
    });
  };

  const gradeChangeHandler = (e) => {
    setSelection({
      ...selection,
      grade: e.target.value,
      category: "",
      formLink: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectGroup}>
        <select onChange={schoolChangeHandler}>{schoolDropdownContent}</select>
        {/* {selection.school !== "" &&
          selection.school !== "Selecciona tu Colegio" && (
            <select onChange={gradeChangeHandler}>
              {categoryDropdownContent}
            </select>
          )}
        <button onClick={findCategory}>Buscar</button> */}
      </div>

      {/* {selection.category !== "" &&
        (selection.category === "N/A" ? (
          <div className={styles["no_category"]}>{selection.category}</div>
        ) : (
          <>
            <CategoryChallenge category={selection.category} />
            <a href={selection.formLink} target="_blank">
              <div className={styles["form_link"]}>
                <p>{selection.category}</p>
                <small>Haz click aquí</small>
              </div>
            </a>
          </>
        ))} */}

      <CategoryResult school={selection.school} />
      <div className={styles.notes}>
        <p>
          <h4>Nota:</h4> Los competidores que fueron seleccionados recibirán en
          su correo la confirmación de su participación en el Torneo. Es
          importante a partir de ese momento, ponerse de acuerdo con su
          Profesor/a de robótica y compañeros.
        </p>
        <p>¡Ánimo a nuestros héroes programadores en esta misión espacial!</p>
        <p>
          Valoramos el esfuerzo de todos los que participaron en la
          clasificatoria, son parte indispensable del crew espacial, por lo que
          los invitamos a vivir esta experiencia que va más allá de la
          competencia.
        </p>
        <p>
          Un día lleno de aprendizaje, actividades recreativas, tecnología y
          mucha emoción.
        </p>
        <div className={styles["cta_ticket"]}>
          <a href="https://tecnikids.winktienda.com/" target="_blank">
            <button className={styles["ticket_button"]}>
              <i className="fal fa-ticket-alt"></i>
              <p>
                ¡Compra tus entradas aquí y apoya <br />a tu equipo en esta
                importante misión!
              </p>
            </button>
          </a>
          <p className={styles.note}>
            La entrada es en formato digital, no requiere impresión. <br />
            Para acceder al evento, solo debes mostrar al momento del registro,
            tu número de orden o el correo de confirmación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
