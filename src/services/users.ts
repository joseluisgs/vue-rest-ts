// Cliente de la Api Rest
import axios from 'axios';
import IUser from '@/interfaces/IUser';
import UserMapper from '@/transformers/userMapper';

const URL = 'https://jsonplaceholder.typicode.com/users/';

export default {
  /**
   * Obtiene el listado de usuarios
   * @returns Lista de Usuarios
   */
  async findAll(): Promise<IUser[]> {
    const response = await axios.get(URL);
    return UserMapper.toUsersList(response.data);
  },

  /**
   * Salva un usuario
   * @param user Usuario
   * @returns Usuario salvado
   */
  async save(user: IUser): Promise<IUser> {
    const response = await axios.post(URL, user);
    return UserMapper.toUser(response.data);
  },

  /**
   * Actualiza un usuario
   * @param user Usuario
   * @returns Usuario actualizado
   */
  async update(user: IUser): Promise<IUser> {
    const response = await axios.put(URL + user.id, user);
    return UserMapper.toUser(response.data);
  },

  /**
   * Elimina un usuario
   * @param user usuario
   * @returns Valor eliminado
   */
  async remove(user: IUser): Promise<IUser> {
    const response = await axios.delete(URL + user.id);
    return UserMapper.toUser(response.data);
  },
};
