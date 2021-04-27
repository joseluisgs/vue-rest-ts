// Cliente de la Api Rest
import axios from 'axios';
import IUser from '@/interfaces/IUser';

const URL = 'https://jsonplaceholder.typicode.com/users/';

export default {
  /**
   * Obtiene el listado de usuarios
   * @returns Lista de Usuarios
   */
  async findAll(): Promise<IUser[]> {
    const response = await axios.get(URL);
    return response.data;
  },

  async save(user: IUser): Promise<IUser> {
    return (await axios.post(URL, user)).data;
  },

  async update(user: IUser): Promise<IUser> {
    return (await axios.put(URL + user.id, user)).data;
  },

  async remove(user: IUser): Promise<IUser> {
    return (await axios.delete(URL + user.id)).data;
  },
};
