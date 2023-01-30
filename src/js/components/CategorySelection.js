import React, { useState } from "react";
import styles from "./CategorySelection.module.css";

const CategorySelection = () => {
  const [selection, setSelection] = useState({
    school: "",
    grade: "",
    category: "",
  });
  let categoriasTorneo = [
    {
      colegio: "Selecciona tu Colegio",
      categorias: {
        "-": "N/A",
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
      colegio: "Academia Merici",
      categorias: {
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
      colegio: "Colegio Altamira",
      categorias: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers ",
        "5to grado": "Little space engineers ",
        "6to grado": "Little space engineers ",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      colegio: "Colegio Caniguá",
      categorias: {
        "2do grado": "Master space technicians",
        "3er grado": "Master space technicians",
        "4to grado": "Master space technicians",
        "5to grado": "Master space technicians",
        "6to grado": "Little space engineers ",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA technicians",
        "5to año": "NASA technicians",
      },
    },
    {
      colegio: "CEAMM",
      categorias: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers ",
        "5to grado": "Little space engineers ",
        "6to grado": "Little space engineers ",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      colegio: "Colegio Cristo Rey",
      categorias: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers ",
        "5to grado": "Little space engineers ",
        "6to grado": "Little space engineers ",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      colegio: "Colegio Don Bosco",
      categorias: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers ",
        "5to grado": "Little space engineers ",
        "6to grado": "Little space engineers ",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA specialists",
        "5to año": "NASA specialists",
      },
    },
    {
      colegio: "Colegio Donaldo García",
      categorias: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers ",
        "5to grado": "Little space engineers ",
        "6to grado": "Little space engineers ",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA technicians",
        "5to año": "NASA technicians",
      },
    },
    {
      colegio: "Colegio Henry Clay",
      categorias: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers ",
        "5to grado": "Little space engineers ",
        "6to grado": "Little space engineers ",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      colegio: "Instituto Andes",
      categorias: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers ",
        "5to grado": "Little space engineers ",
        "6to grado": "Little space engineers ",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA technicians",
        "5to año": "NASA technicians",
      },
    },
    {
      colegio: "Instituto Cumbres",
      categorias: {
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
      colegio: "Instituto Maestro Simón",
      categorias: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers ",
        "5to grado": "Little space engineers ",
        "6to grado": "Little space engineers ",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      colegio: "Colegio Ítalo Venezolano",
      categorias: {
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
      colegio: "Colegio La Salle",
      categorias: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers ",
        "5to grado": "Little space engineers ",
        "6to grado": "Little space engineers ",
        "1er año": "N/A",
        "2do año": "N/A",
        "3er año": "N/A",
        "4to año": "N/A",
        "5to año": "N/A",
      },
    },
    {
      colegio: "Colegio Los Arcos",
      categorias: {
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
      colegio: "Colegio Los Campitos",
      categorias: {
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
      colegio: "Colegio Madre Matilde",
      categorias: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers ",
        "5to grado": "Little space engineers ",
        "6to grado": "Little space engineers ",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA technicians",
        "5to año": "NASA technicians",
      },
    },
    {
      colegio: "Colegio María Auxiliadora",
      categorias: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers ",
        "5to grado": "Little space engineers ",
        "6to grado": "Little space engineers ",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA technicians",
        "5to año": "NASA technicians",
      },
    },
    {
      colegio: "Colegio Mater Salvatoris",
      categorias: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers ",
        "5to grado": "Little space engineers ",
        "6to grado": "Little space engineers ",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA technicians",
        "5to año": "NASA technicians",
      },
    },
    {
      colegio: "Colegio Mater Salvatoris Maracaibo",
      categorias: {
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
      colegio: "Colegio Nuestra Señora de Pompei",
      categorias: {
        "2do grado": "Little space programmers",
        "3er grado": "Little space programmers",
        "4to grado": "Little space engineers ",
        "5to grado": "Little space engineers ",
        "6to grado": "Little space engineers ",
        "1er año": "NASA technicians",
        "2do año": "NASA technicians",
        "3er año": "NASA technicians",
        "4to año": "NASA technicians",
        "5to año": "NASA technicians",
      },
    },
    {
      colegio: "Colegio San Agustín El Marqués",
      categorias: {
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
      colegio: "Colegio San Agustín El Paraíso",
      categorias: {
        "2do grado": "Master space technicians",
        "3er grado": "Master space technicians",
        "4to grado": "Master space technicians",
        "5to grado": "Master space technicians",
        "6to grado": "Master space technicians",
        "1er año": "NASA technicians",
        "2do año": "NASA programmers",
        "3er año": "NASA programmers",
        "4to año": "NASA specialists",
        "5to año": "N/A",
      },
    },
    {
      colegio: "Colegio Simón Bolívar I",
      categorias: {
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
      colegio: "Colegio Simón Bolívar II",
      categorias: {
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
  ];

  let schoolDropdownContent = categoriasTorneo.map((item) => (
    <option>{item["colegio"]}</option>
  ));

  let categories = Object.keys(categoriasTorneo[0]["categorias"]);

  let categoryDropdownContent = categories.map((item) => (
    <option>{item}</option>
  ));

  const findCategory = () => {
    let tournamentCategory;
    let selectedItem = categoriasTorneo.filter(
      (item) => item["colegio"] == selection["school"]
    )[0];
    tournamentCategory = selectedItem.categorias[selection.grade];
    setSelection({ ...selection, category: tournamentCategory });
  };

  const schoolChangeHandler = (e) => {
    setSelection({ ...selection, school: e.target.value });
  };

  const gradeChangeHandler = (e) => {
    setSelection({ ...selection, grade: e.target.value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectGroup}>
        <select onChange={schoolChangeHandler}>{schoolDropdownContent}</select>
        <select onChange={gradeChangeHandler}>{categoryDropdownContent}</select>
        <button
          disabled={
            selection.school == "" || selection.grade == "" ? true : false
          }
          onClick={findCategory}
        >
          Buscar
        </button>
      </div>
      <div className={styles.result}>
        <p>{selection.category ? selection.category : "N/A"}</p>
      </div>
    </div>
  );
};

export default CategorySelection;
