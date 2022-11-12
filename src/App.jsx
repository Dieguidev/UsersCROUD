import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import axios from 'axios'

function App() {

  const [usersList, setUsersList] = useState([]);
  const [ userSelected, setUserSelected ] = useState(null);

  useEffect(()=> {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then((res)=> setUsersList(res.data))
  },[])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then((res)=> setUsersList(res.data))
  }

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers())
  }

  const selectUser = (user) => {
    setUserSelected(user)
  }

const deselectUser = () => setUserSelected(null)

  return (
    <div className="App lg:flex lg:w-5/6">
      <UsersList usersList={usersList} deleteUser= {deleteUser} selectUser={selectUser}/>
      <UsersForm getUsers={getUsers} userSelected={userSelected} deselectUser= {deselectUser}/>
    </div>
  )
}

export default App
