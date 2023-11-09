import React from "react";
import { toast } from "react-toastify";
import { AiOutlineDelete } from "react-icons/ai";
import swal from "sweetalert";

const OrdersRow = ({ order, refetch, index }) => {
  // console.log('order is',order);
  const { _id } = order;

  const handleDelete = (id) => {
    //sweet alert
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your Item has been deleted successfully!", {
          icon: "success",
        });
        const url = `https://speedx-manufacturer-a8fc85684ad6.herokuapp.com/order/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
            // const remaining = items.filter((item) => item._id !== id);
            // setItems(remaining);
          });
      } else {
        swal("Item not deleted. You cancelled.");
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order?.product}</td>
      <td>{order?.quantity}</td>
      <td>{order?.email}</td>
      <td>{order?.address}</td>
      <td>{order?.phone}</td>
      <td>
        <button className="btn btn-sm">Pay</button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-primary text-white flex items-center justify-center"
        >
          Delete <AiOutlineDelete className="text-xl ml-1" />
        </button>
      </td>
    </tr>
  );
};

export default OrdersRow;
