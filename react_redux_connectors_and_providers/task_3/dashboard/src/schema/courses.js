import { schema, normalize } from 'normalizr';

//definiendo el esquema del curso
const cuourseSchema = new schema.Entity('course');

//funcion para normalizar los datos
export const coursesNormalizer = (data) => {
  return normalize(data, [cuourseSchema]);
};


