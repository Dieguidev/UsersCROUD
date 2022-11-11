import React from 'react';

const UsersList = ({usersList, deleteUser, selectUser}) => {
  return (
    <ul >
      {
        usersList.map(user => (
          <li key={user.id}>
            <h3><b>{user.first_name} {user.last_name}</b></h3>
            <p>{user.email}</p>
            <p>{user.birthday}</p>
            <button onClick={() =>deleteUser(user.id)}>Delete</button>
            <button onClick={()=> selectUser(user)}>Edit</button>
          </li>
        ))
      }
    </ul>
  );
};

export default UsersList;