import React, { useEffect, useState } from "react";
import {
  AlertDelete,
  AlertError,
  AlertSuccess,
  AlertWarning,
} from "../../components/Alerts";
import Table from "../../components/table";
import {
  deletePersonas,
  getPersonas,
  getPersonasById,
  InsertOrUpdatePersonas,
} from "../../service/person";
import Modal from "../../components/Modal/modal";
import AddModalPerson from "./addModalPerson";
import Title from "../../components/Title/title";

const Person = () => {
  const defaultfields = {
    iD_PERS: 0,
    noM_PERS: "",
    apE_PATER: "",
    apE_MATER: "",
    feC_NAC: moment(
      new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    ).format("YYYY-MM-DD"),
    iD_GENERO: 0,
    tipO_DOC: 0,
    telF_N1: "",
    telF_N2: "",
    correo: "",
    nuM_DOC: "",
  };

  const validateFields = () => {
    const requiredFields = [
      "noM_PERS",
      "apE_PATER",
      "apE_MATER",
      "feC_NAC",
      "iD_GENERO",
      "tipO_DOC",
      "telF_N1",
      "telF_N2",
      "correo",
      "nuM_DOC",
    ];
    const dataFields = {
      noM_PERS: "Nombre",
      apE_PATER: "Apellido Paterno",
      apE_MATER: "Apellido Materno",
      feC_NAC: "Fecha Nacimiento",
      iD_GENERO: "Genero",
      tipO_DOC: "Tipo Documento",
      nuM_DOC: "Número Documento",
      telF_N1: "Telefono 1",
      telF_N2: "Telefono 2",
      correo: "Correo",
    };
    // Validación del campo de correo electrónico
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(fields.correo)) {
      AlertWarning(
        `El campo ${dataFields.correo} debe ser un correo electrónico válido.`
      );
      return false;
    }

    for (const fieldName of requiredFields) {
      if (!fields[fieldName]) {
        AlertWarning(`El campo ${dataFields[fieldName]} es obligatorio.`);
        return false;
      }
    }

    return true;
  };

  const [fields, setFields] = useState(defaultfields);
  const [personas, setPersonas] = useState([]); // Crea un estado para el PersonalInstitución
  const [busqueda, setBusqueda] = useState(null);

  const loadData = async () => {
    const data = await getPersonas();
    setPersonas(data.data);
  };

  const columns = [
    {
      data: "iD_PERS",
      title: "ID",
      width: 100,
      headerAlign: "center",
    },
    {
      data: "noM_PERS",
      title: "Nombre",
      width: 200,
      headerAlign: "center",
    },
    {
      data: "apE_PATER",
      title: "Apellido Paterno",
      width: 200,
      headerAlign: "center",
    },
    {
      data: "apE_MATER",
      title: "Apellido Materno",
      width: 200,
      headerAlign: "center",
    },
    {
      data: "feC_NAC",
      title: "Fecha de Nacimiento",
      width: 200,
      headerAlign: "center",
      render: (data) => moment(data).format("YYYY-MM-DD"),
    },
    {
      data: "iD_GENERO",
      title: "Género",
      width: 200,
      headerAlign: "center",
      render: function (data, type, row, meta) {
        const generos = {
          1: "Masculino",
          2: "Femenino",
        };
        return generos[data] || "";
      },
    },
    {
      data: "tipO_DOC",
      title: "Tipo de documento",
      width: 200,
      headerAlign: "center",
      render: function (data, type, row, meta) {
        const tiposDocumento = {
          1: "DNI",
          2: "Pasaporte",
          3: "Carné de identidad",
          4: "Tarjeta de identificación",
        };
        return tiposDocumento[data] || "";
      },
    },
    {
      data: "nuM_DOC",
      title: "Número de documento",
      width: 200,
      headerAlign: "center",
    },
    {
      data: "telF_N1",
      title: "Teléfono 1",
      width: 200,
      headerAlign: "center",
    },
    {
      data: "telF_N2",
      title: "Teléfono 2",
      width: 200,
      headerAlign: "center",
    },
    {
      data: "correo",
      title: "Correo electrónico",
      width: 200,
      headerAlign: "center",
    },
    {
      data: null,
      render: function (data, type, row, meta) {
        return (
          '<button type="button" class="btn btn-primary me-1" id="editPerson" data-id="' +
          row.iD_PERS +
          '" data-bs-toggle="modal" data-bs-target="#persona"><i class="mdi mdi-lead-pencil"></i></button>' +
          '<button type="button" class="btn btn-danger" id="deletePerson" data-id="' +
          row.iD_PERS +
          '"><i class="mdi mdi-trash-can"></i> </button>'
        );
      },
    },
  ];

  const eliminarPersona = async (id) => {
    const resultado = await AlertDelete();
    if (resultado) {
      const dataDelete = {
        iD_PERS: id,
      };
      await deletePersonas(dataDelete);
      loadData();
    }
  };

  const limpiarEditar = () => {
    setFields(defaultfields);
  };


  const newSearch = async () => {
    const data = await getPersonas();
    setPersonas(data.data);
    setFields(defaultfields);
    setBusqueda(null);
  };

  const editarPersona = async (id) => {
    const responsebyid = await getPersonasById(id);
    const defaultfieldsEdit = {
      iD_PERS: id,
      noM_PERS: responsebyid.data[0].noM_PERS,
      apE_PATER: responsebyid.data[0].apE_PATER,
      apE_MATER: responsebyid.data[0].apE_MATER,
      feC_NAC: moment(responsebyid.data[0].feC_NAC).format("YYYY-MM-DD"),
      iD_GENERO: responsebyid.data[0].iD_GENERO,
      tipO_DOC: responsebyid.data[0].tipO_DOC,
      nuM_DOC: responsebyid.data[0].nuM_DOC,
      telF_N1: responsebyid.data[0].telF_N1,
      telF_N2: responsebyid.data[0].telF_N2,
      correo: responsebyid.data[0].correo,
      inD_ESTADO: responsebyid.data[0].inD_ESTADO,
    };
    setFields(defaultfieldsEdit);
    console.log(defaultfieldsEdit);
  };

  const saveOrUpdatePersonas = async () => {
    if (!validateFields(fields)) {
      return;
    }
    const response = await InsertOrUpdatePersonas(fields);
    console.log(response);
    if (response.data) {
      await loadData();
      $("#persona").modal("hide"); // Para ocultar Modal al momento de Editar o Insertar
      await AlertSuccess(`Registro de forma satisfactoría`);
    } else {
      return await AlertError(`error`);
    }
    setFields(defaultfields);
  };

  const filtrar = async () => {
    const response = await getPersonasById(fields.tipO_DOC, fields.nuM_DOC);
    if (response.data) {
      setPersonas(response.data);
      setBusqueda(JSON.stringify(response.data));
      await AlertSuccess("exitoso");
    } else {
      AlertError("error");
    }
  };

  $(document).on("click", "#editPerson", function () {
    var id = $(this).data("id");
    editarPersona(id);
    console.log(id);
  });

  $(document).on("click", "#deletePerson", async function () {
    var id = $(this).data("id");
    eliminarPersona(id);
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Title title={"Personas"} category={"App"} />
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-primary mb-3"
          data-bs-toggle="modal"
          data-bs-target="#persona"
        >
          <i className="uil-plus"></i> Agregar
        </button>
      </div>

      <div className="row mb-3 mb-sm-0 mb-md-3">
        <div className="col-md-4 mb-md-0 mb-sm-3">
          <div className="form-floating">
            <select
              className="form-select"
              name="tipO_DOC"
              aria-label="Tipo de documento"
              onChange={handleInputChange}
              value={fields.tipO_DOC ?? ""}
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
        <div className="col-md-4 mb-md-0 mb-sm-3">
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
        <div className="col-md-2 mb-md-0 mb-sm-3">
          <div className="form-floating">
            <button type="button" className="btn btn-primary" onClick={filtrar}>
              Buscar
            </button>
          </div>
        </div>
        <div className="col-md-2 mb-md-0 mb-sm-3">
          <div className="form-floating">
            <button type="button" className="btn btn-primary" onClick={newSearch}>
              Vovler a buscar
            </button>
          </div>
        </div>
      </div>

      <pre
        style={{
          backgroundColor: "#f5f5f5",
          border: "1px solid #ccc",
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: "14px",
          lineHeight: "1.5",
          padding: "10px",
          overflowX: "auto",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
        }}
      >
        {JSON.stringify(busqueda, null, 2)}
      </pre>

      <div className="card">
        <div className="card-body">
          <Table rows={personas} columns={columns} basicTable={"tablaPerson"} />
        </div>
      </div>
      <Modal
        id={"persona"}
        content={<AddModalPerson fields={fields} setFields={setFields} />}
        addOrUpdate={saveOrUpdatePersonas}
        destroyClose={limpiarEditar}
      />
    </>
  );
};

export default Person;
