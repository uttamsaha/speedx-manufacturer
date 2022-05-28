import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import AllUsersRow from './AllUsersRow';

const AllUsers = () => {
    const {
        data: users,
        isLoading,
        refetch,
      } = useQuery("users", () =>
         fetch('http://localhost:5000/users').then((res) => res.json())
      );
  return (
    <div>
        <h2 className='text-center text-3xl font-bold m-8 text-green-500'>Manage Orders</h2>
        <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Education</th>
              <th>LinkedIn</th>
              <th>Make Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user,index) => (
              <AllUsersRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></AllUsersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUsers;