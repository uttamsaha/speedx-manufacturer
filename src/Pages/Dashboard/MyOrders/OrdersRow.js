import React from "react";
import { toast } from "react-toastify";
import {AiOutlineDelete} from 'react-icons/ai';

const OrdersRow = ({ order, refetch, index }) => {
    console.log('order is',order);
  return (
    <tr>
      <th>{index+1}</th>
      <td>{order?.product}</td>
      <td>{order?.quantity}</td>
      <td>{order?.email}</td>
      <td>{order?.address}</td>
      <td>{order?.phone}</td>
      {/* //role not equal to admin hole button ta dekhabe */}
      {/* <td>
        {role !== "admin" && (
          <button className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td> */}
      <td>
        <button className="btn btn-sm btn-primary text-white flex items-center justify-center">Delete <AiOutlineDelete className="text-xl ml-1"/></button>
      </td>
    </tr>
  );
};

export default OrdersRow;
