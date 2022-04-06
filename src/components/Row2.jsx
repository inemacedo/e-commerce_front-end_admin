
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};


const dateNow = new Date();
const monthNow = dateNow.getMonth();
const anio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let labels = [];
// function calcLabels(months) {
//   const auxArr = [];
//   for (let i = months - 1; i >= 0; i -= 1) {
//     if (monthNow - i >= 0) {
//       auxArr.push(anio[monthNow - i]);
//     } else {
//       auxArr.push(anio[monthNow - i + 12]);
//     }
//   }
//   labels = auxArr;
// }

function ChartRow() {

  const user = useSelector(state => state.user);
  const [values, setValues] = useState([]);
  const [numberOfMonths, setNumberOfMonths] = useState(6);

  useEffect(() => {
    labels = [];
    for (let i = numberOfMonths - 1; i >= 0; i -= 1) {
      if (monthNow - i >= 0) {
        labels.push(anio[monthNow - i]);
      } else {
        labels.push(anio[monthNow - i + 12]);
      }
    }

    try {
      const getOrders = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/orders`, {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${user.token}`
          }
        });
        if (response.status === 200) {
          const data = await response.json();
          const months = data.map(order => format(parseISO(order.createdAt), "M"));
          const ventas = anio.map(() => 0);
          for (let i = 0; i < months.length; i += 1) {
            ventas[Number(months[i]) - 1] += 1;
          }
          const arrayAux = labels.map(() => 0);
          for (let i = 0; i < labels.length; i += 1) {
            if (monthNow - i >= 0) {
              arrayAux[labels.length - i - 1] = ventas[monthNow - i];
            } else {
              arrayAux[labels.length - i - 1] = ventas[monthNow - i + 12];
            }
          }
          setValues(arrayAux);

        }
      }
      getOrders();

    } catch (error) {
      console.log(error);
    }
  }, [numberOfMonths]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Pedidos',
        data: values.map((value) => value),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const handleDown = () => {
    setNumberOfMonths((prev) => prev > 2 ? prev - 1 : prev);
  };
  const handleUp = () => {
    setNumberOfMonths((prev) => prev < 11 ? prev + 1 : prev);
  };

  /* <!-- Content Row --> */
  /* <!-- Area Chart --> */

  return (<div className="d-none d-md-block">
    <div className="card shadow mb-4">
      {/* <!-- Card Header - Dropdown --> */}
      <div
        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">Ventas - Mes</h6>
        <div className="align-self-end" >
          <button className="btn btn-sm btn-primary mx-3" onClick={handleDown} >-</button>
          <span>{numberOfMonths}</span>
          <button className="btn btn-sm btn-primary mx-3" onClick={handleUp} >+</button>
        </div>
        <div className="dropdown no-arrow">
          <Link className="dropdown-toggle" to="#" role="button" id="dropdownMenuLink"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
            aria-labelledby="dropdownMenuLink">
            <div className="dropdown-header">Dropdown Header:</div>
            <Link className="dropdown-item" to="#">Action</Link>
            <Link className="dropdown-item" to="#">Another action</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="#">Something else here</Link>
          </div>
        </div>
      </div>
      {/* <!-- Card Body --> */}
      <div className="card-body">
        <Line options={options} data={data} />
      </div>
    </div>
  </div>);
}


export default ChartRow;