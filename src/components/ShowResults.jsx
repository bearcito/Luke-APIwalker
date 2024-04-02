import { useEffect } from "react";
import errorImage from "../components/obiwan.png"; // Asegúrate de ajustar la ruta
import searchImage from "../components/darthvader.png"; // Asegúrate de ajustar la ruta
const ShowResults = ({ data, type, error, searchPerformed }) => {
  if (error) {
    return (
      <div>
        <p>Aquí no es.</p>
        <img
          src={errorImage}
          alt="Error"
          style={{ width: "400px", height: "400px" }}
        />
      </div>
    );
  }

  useEffect(() => {
    console.log(data);
    console.log(data.length);
  }, [data]);

  if (!searchPerformed) {
    return (
      <div>
        <p>Por favor, realiza una búsqueda.</p>
        <img src={searchImage} alt="Buscar imagen" style={{ width: "400px" }} />
      </div>
    );
  }

  const propByType = {
    people: ["name", "height", "mass", "hair_color"],
    planets: ["name", "diameter", "climate", "terrain"],
    species: ["name", "classification", "average_height", "language"],
    starships: ["name", "model", "manufacturer", "crew"],
    vehicles: ["name", "model", "manufacturer", "crew"],
    films: ["title", "director", "producer", "opening_crawl"],
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          {propByType[type].map((prop) => (
            <p key={prop}>
              {prop.replace("_", " ")}: {item[prop]}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShowResults;
