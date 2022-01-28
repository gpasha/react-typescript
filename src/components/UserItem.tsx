import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
  user: IUser
  onClick: (user: IUser) => void
}

const UserItem: FC<UserItemProps> = ({
  user,
  onClick
}) => {
  return (
    <div style={{padding: '15px', border: '1px solid gray', cursor: !!onClick ? 'pointer' : 'default'}} onClick={() => onClick(user)}>
      {user.id}. {user.name} live in {user.address.city} on the street {user.address.street}
    </div>
  )
}

export default UserItem