import React from "react";
import { toast } from "react-toastify";
import { AiOutlineDelete } from "react-icons/ai";
import swal from "sweetalert";

const ManageProductsRow = ({ product, refetch, index }) => {
  // console.log('order is',order);
  const { _id } = product;

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
        const url = `https://speedx-manufacturer-a8fc85684ad6.herokuapp.com/tool/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
          });
      } else {
        swal("Item not deleted. You cancelled.");
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="lg:max-w-xs w-20" src={product?.img} alt="" />
      </td>
      <td>{product?.name}</td>
      <td>{product?.price}</td>
      <td>{product?.minOrderQuantity}</td>
      <td>{product?.available}</td>
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

export default ManageProductsRow;
