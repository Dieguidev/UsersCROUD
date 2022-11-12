import React from 'react';

const UsersList = ({usersList, deleteUser, selectUser}) => {
  return (
    <ul className='m-7'>
      {
        usersList.map(user => (
          <li 
            key={user.id} 
            className='list-none bg-slate-300 mb-4 p-5 flex gap-2'>
            <div className='w-[700px]'>
              <h3><b>{user.first_name} {user.last_name}</b></h3>
              <p>{user.email}</p>
              <p>{user.birthday}</p>
            </div>
            <div>
              <button onClick={() =>deleteUser(user.id)}>Delete</button>
              <button onClick={()=> selectUser(user)}>Edit</button>
            </div>
            
          </li>
        ))
      }
    </ul>
  );
};

export default UsersList;