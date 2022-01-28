import React, { useState, useEffect, FC } from 'react';
import axios from 'axios';
import { IUser } from '../types/types';
import { useParams, useNavigate } from 'react-router-dom';


type UserItemParams = {
  id: string
}

const UserPage:FC = () => {
  const [user, setUser] = useState<IUser | null>()
  const { id } = useParams<UserItemParams>()
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser()
  }, []);

  async function fetchUser() {
    try {      
      const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
      setUser(response.data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      {user &&
        <>
          <div ><button onClick={() => navigate('/users')}>Back</button></div>
          <h1>{user?.name}</h1>
          <h2>email: {user?.email}</h2>
          <h2>(ID: {user.id}), live in {user.address.city}</h2>
        </>
      }
    </div>
  )
}

export default UserPage
