function Row3() {
  // <!-- Content Row 3 -->

  return (
    <div className="row">
      {/* <!-- Content Column --> */}
      <div className="col-lg-6 mb-4">
        {/* <!-- Project Card Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Proyectos</h6>
          </div>
          <div className="card-body">
            <h4 className="small font-weight-bold">
              Migración del Server<span className="float-right">20%</span>
            </h4>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "20%" }}
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 className="small font-weight-bold">
              Registro de Ventas<span className="float-right">40%</span>
            </h4>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: "40%" }}
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 className="small font-weight-bold">
              Base de Datos de Clientes<span className="float-right">60%</span>
            </h4>
            <div className="progress mb-4">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 className="small font-weight-bold">
              Detalles de Pagos<span className="float-right">80%</span>
            </h4>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 className="small font-weight-bold">
              Configuración de la Cuenta
              <span className="float-right">Completo!</span>
            </h4>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        {/* <!-- Color System --> */}
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card bg-primary text-white shadow">
              <div className="card-body">
                Primary
                <div className="text-white-50 small">#4e73df</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card bg-success text-white shadow">
              <div className="card-body">
                Success
                <div className="text-white-50 small">#1cc88a</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
              <div className="card-body">
                Info
                <div className="text-white-50 small">#36b9cc</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card bg-warning text-white shadow">
              <div className="card-body">
                Warning
                <div className="text-white-50 small">#f6c23e</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card bg-danger text-white shadow">
              <div className="card-body">
                Danger
                <div className="text-white-50 small">#e74a3b</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card bg-secondary text-white shadow">
              <div className="card-body">
                Secondary
                <div className="text-white-50 small">#858796</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card bg-light text-black shadow">
              <div className="card-body">
                Light
                <div className="text-black-50 small">#f8f9fc</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
              <div className="card-body">
                Dark
                <div className="text-white-50 small">#5a5c69</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        {/* <!-- Illustrations --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Hack Home Mobile
            </h6>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "25rem" }}
                src="img/undraw_posting_photo.svg"
                alt="..."
              />
            </div>
            <p>
              Es capaz de adaptarse a pantallas de diferentes tamaños con un
              solo sitio web. El sistema detecta automáticamente el ancho de la
              pantalla y a partir de ahí adapta todos los elementos de la
              página, desde el tamaño de letra hasta las imágenes y los menús,
              para ofrecer al usuario la mejor experiencia posible. ¡Parece
              magia!
            </p>
          </div>
        </div>

        {/* <!-- Approach --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Aproximación de Desarrollo
            </h6>
          </div>
          <div className="card-body">
            <p>
              Los sistemas tradicionales de costeo distribuyen los costos
              indirectos en función de criterios de asignación que no miden
              necesariamente el consumo de éstos, por ejemplo unidades de
              producción, no reflejando así el costo real de los productos.
            </p>
            <p className="mb-0">
              Se enfoca hacia la responsabilidad administrativa para los costos
              dentro de las unidades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row3;
