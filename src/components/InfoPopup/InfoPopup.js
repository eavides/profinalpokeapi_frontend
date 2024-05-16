import React from "react";
import close from "../../images/Close.png";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale, // Asegúrate de importar la escala de categoría
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function InfoPopup({ selectedCard, isOpen, valid, onClose, hide, setHide }) {
  const data = {
    labels: [
      "Hp",
      "Attack",
      "Defense",
      "Special Attack",
      "Special Defense",
      "Speed",
    ],
    datasets: [
      {
        labels: "Habilidades",
        backgroundColor: "#3F75CE",
        borderColor: "white",
        borderWidth: 1,
        hoverBackgroundColor: "#F6FB5D",
        hoverBorderColor: "white",
        data: [
          valid ? selectedCard.stats[0].base_stat : "",
          valid ? selectedCard.stats[1].base_stat : "",
          valid ? selectedCard.stats[2].base_stat : "",
          valid ? selectedCard.stats[3].base_stat : "",
          valid ? selectedCard.stats[4].base_stat : "",
          valid ? selectedCard.stats[5].base_stat : "",
        ],
      },
    ],
  };
  const option = {
    maintainAspectRatio: false,
    responsive: true,
  };
  return (
    <div className={`infoPopup ${isOpen}`} onClick={onClose}>
      <div className="infoPopup__container">
        <img className="infoPopup__close" src={close} onClick={onClose}></img>
        <div className="infoPopup__header">
          <span className="infoPopup__header_number">
            Pokemon Numero {selectedCard.id}
          </span>
          <div className="infoPopup__header_image">
            <img
              className="infoPopup__header_image"
              src={selectedCard.sprites?.other.dream_world.front_default}
              alt={`Pokemon ${selectedCard?.name}`}
            />
          </div>
          <div className="infoPopup__header_name">
            <h1>{selectedCard.name}</h1>
          </div>
          <div className="infoPopup__header_type">
            {selectedCard.types?.map((type) => (
              <span key={type.type.name} className={`${type.type.name}`}>
                {type.type.name}
              </span>
            ))}
          </div>
          <div className="infoPopup__header_label">
            {selectedCard.types?.map((type) => (
              <span key={type.type.name} className={`${type.type.name}`}>
                {" " + type.type.name + " "}
              </span>
            ))}
          </div>
          <div className="infoPopup__header_height">
            <span>Altura: {selectedCard.height}</span>
          </div>
          <div className="infoPopup__header_weight">
            <span>Peso: {selectedCard.weight} KG</span>
          </div>
        </div>
        <hr className="infoPopup__line"></hr>
        <div className="infoPopup__cont">
          <h1 className="infoPopup__statTitle">Estadísticas Habilidades</h1>
          <div className="infoPopup__statistic">
            <Bar data={data} options={option} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPopup;
