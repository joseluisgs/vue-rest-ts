// Cliente de la Api Rest
import axios from 'axios';
import IUser from '@/interfaces/IUser';

const URL = 'https://jsonplaceholder.typicode.com/users';

export default {
  async findAll(): Promise<IUser[]> {
    return (await axios.get(URL)).data;
  },
  save() {
    // Método para crear un usuario
  },
  update() {
    // Método para actualizar un usuario
  },
  remove() {
    // Método para borrar un usuario
  },
};
