// import { useQuery } from '@tanstack/react-query';

// const fetchUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   if (!response.ok) throw new Error('Network response was not ok');
//   return response.json();
// };

// const Users = () => {
//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: ['users'],
//     queryFn: fetchUsers,
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h1>Users List</h1>
//       <ul>
//         {data.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Users;


import { useQuery } from '@tanstack/react-query';
import React from 'react'





    const fetchUser = async () =>{
        const respones = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!respones){
            throw new Error
        }
    }


    const User = () =>{
        const {data,isLoading,error} = useQuery({
            queryKey:['user'],
            queryFn:fetchUser
        })

        if(isLoading) return <p>Loding .....</p>
    
  return (
    <div>
        <h1>this is the list name of user</h1>

        <ul>
        {
            data?.map((user)=>{
                <li>{user?.name}</li>
            })
        }
        </ul>
    </div>
  )
}

export default User
