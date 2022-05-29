import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import ManageOrdersRow from './ManagOrdersRow';

const ManageOrders = () => {
    const {
        data: orders,
        isLoading,
        refetch,
      } = useQuery("orders", () =>
         fetch('http://localhost:5000/all-order').then((res) => res.json())
      );
  return (
    <div>
        <h2 className='text-center text-3xl font-bold m-8 text-green-500'>Manage Orders</h2>
        <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order,index) => (
              <ManageOrdersRow
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
              ></ManageOrdersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageOrders;