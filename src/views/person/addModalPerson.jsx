import React from "react";
//import { getGeneros, getTipoDocumentos } from "../../service/common";

const AddModalPerson = ({fields, setFields }) => {

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleInputChangeDate = (e) => {
    const { name, value } = e.target;
    const formattedDate = moment(value).format("YYYY-MM-DD");
    setFields((prevState) => ({ ...prevState, [name]: formattedDate }));
  };


  return (
    <>
      <div className="row mb-3 mb-sm-0 mb-md-3">
        <div className="col-md-6 mb-md-0 mb-sm-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="noM_PERS"
              placeholder="Nombres"
              onChange={handleInputChange}
              value={fields.noM_PERS}
            />
            <label htmlFor="noM_PERS">Nombres</label>
          </div>
        </div>
        <div className="col-md-6 mb-md-0 mb-sm-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="apE_PATER"
              placeholder="Apellido Paterno"
              onChange={handleInputChange}
              value={fields.apE_PATER}
            />
            <label htmlFor="apE_PATER">Apellido Paterno</label>
          </div>
        </div>
      </div>

      <div className="row mb-3 mb-sm-0 mb-md-3">
        <div className="col-md-6 mb-md-0 mb-sm-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="apE_MATER"
              placeholder="Apellido Materno"
              onChange={handleInputChange}
              value={fields.apE_MATER}
            />
            <label htmlFor="apE_MATER">Apellido Materno</label>
          </div>
        </div>
        <div className="col-md-6 mb-md-0 mb-sm-3">
          <div className="form-floating">
            <input
              type="date"
              className="form-control"
              name="feC_NAC"
              placeholder="Fecha de nacimiento"
              onChange={handleInputChangeDate}
              value={fields.feC_NAC}
            />
            <label htmlFor="feC_NAC">Fecha de nacimiento</label>
          </div>
        </div>
      </div>

      <div className="row mb-3 mb-sm-0 mb-md-3">
        <div className="col-md-6 mb-md-0 mb-sm-3">
          <div className="form-floating">
            <select
              className="form-select"
              name="iD_GENERO"
              aria-label="Género"
              onChange={handleInputChange}
              value={fields.iD_GENERO ?? ''}
            >
              <option value="">Seleccione Genero</option>
              <option value="1">Masculino</option>
              <option value="2">Femenino</option>
              
            </select>
            <label htmlFor="iD_GENERO">Género</label>
          </div>
        </div>
        <div className="col-md-6 mb-md-0 mb-sm-3">
          <div className="form-floating">
            <select
              className="form-select"
              name="tipO_DOC"
              aria-label="Tipo de documento"
              onChange={handleInputChange}
              value={fields.tipO_DOC ?? ''}
            >
              <option value="">Seleccione el Tipo de documento</option>
              <option value="1">DNI</option>
              <option value="2">PASAPORTE</option>
              <option value="3">CARNET DE EXTRAJERIA</option>
              <option value="4">CARNET DE IDENTIFICACION</option>

            </select>
            <label htmlFor="tipO_DOC">Tipo de documento</label>
          </div>
        </div>
      </div>
      <div className="row mb-3 mb-sm-0 mb-md-3">
        <div className="col-md-12 mb-md-0 mb-sm-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="nuM_DOC"
              placeholder="Número de documento"
              onChange={handleInputChange}
              value={fields.nuM_DOC}
            />
            <label htmlFor="nuM_DOC">Número de documento</label>
          </div>
        </div>
      </div>

      <div className="row mb-3 mb-sm-0 mb-md-3">
        <div className="col-md-6 mb-md-0 mb-sm-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="telF_N1"
              placeholder="Teléfono 1"
              onChange={handleInputChange}
              value={fields.telF_N1}
            />
            <label htmlFor="telF_N1">Teléfono 1</label>
          </div>
        </div>
        <div className="col-md-6 mb-md-0 mb-sm-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="telF_N2"
              placeholder="Teléfono 2"
              onChange={handleInputChange}
              value={fields.telF_N2}
            />
            <label htmlFor="telF_N2">Teléfono 2</label>
          </div>
        </div>
      </div>
      <div className="row mb-3 mb-sm-0 mb-md-3">
        <div className="col-md-6 mb-md-0 mb-sm-3">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              name="correo"
              placeholder="Correo electrónico"
              onChange={handleInputChange}
              value={fields.correo}
            />
            <label htmlFor="correo">Correo electrónico</label>
          </div>
        </div>
        <div className="col-md-6 mb-md-0 mb-sm-3">
        </div>
      </div>
    </>
  );
};

export default AddModalPerson;
