import IUser from '@/interfaces/IUser';

class UserMapper {
  public static toUser(item: any): IUser {
    return {
      id: item.id,
      name: item.name,
      username: item.username,
      email: item.email,
    };
  }

  public static toUsersList(items: any[]): IUser[] {
    return items.map((item) => UserMapper.toUser(item));
  }
}

export default UserMapper;
