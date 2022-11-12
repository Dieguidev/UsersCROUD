import React from 'react';

const UsersList = ({usersList, deleteUser, selectUser}) => {
  return (
    <ul className='m-7'>
      {
        usersList.map(user => (
          <li 
            key={user.id} 
            className='list-none bg-slate-300 mb-4 p-5 flex gap-2 rounded-lg'>
            <div className='w-[700px]'>
              <h3 className='font-semibold text-[20px]'>{user.first_name} {user.last_name}</h3>
              <p className='text-slate-500 text-[14px]'>{user.email}</p>
              <p><i className="fa-solid fa-cake-candles"></i> {user.birthday}</p>
            </div>
            <div className='flex justify-center flex-col gap-1'>
              <button onClick={() =>deleteUser(user.id)}><i className="fa-solid fa-trash text-red-600"></i></button>
              <button onClick={()=> selectUser(user)}><i className="fa-solid fa-pencil"></i></button>
            </div>
            
          </li>
        ))
      }
    </ul>
  );
};

export default UsersList;