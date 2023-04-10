import { baseURLServicio } from '../config';
import * as METHOD from '../methods';
const URL = `${baseURLServicio}/Persona`;

export const getPersonas = async () => {
    try {
      const response = await fetch(`${URL}/GetPersonas`, METHOD.GET());
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  export const getPersonasById = async (tipodoc, numdoc) => {
    try {
      const response = await fetch(`${URL}/GetPersonasById/${tipodoc}/${numdoc}`, METHOD.GET());
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  export const InsertOrUpdatePersonas = async (body) => {
    try {
      const response = await fetch(`${URL}/InsertOrUpdatePersonas`, METHOD.POST(body));
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  export const deletePersonas = async (body) => {
    try {
      const response = await fetch(`${URL}/DeletePersonas`, METHOD.DELETE(body));
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };