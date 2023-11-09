import React from "react";
import { toast } from "react-toastify";
import { AiOutlineDelete } from "react-icons/ai";
import swal from "sweetalert";

const AllUsersRow = ({ user, refetch, index }) => {
  // console.log('order is',order);
  const { _id, email, role } = user;

  const makeAdmin = () => {
    fetch(`https://speedx-manufacturer-a8fc85684ad6.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to load an admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch(); //fetch api again
          swal(
            "Successfully Made Admin!",
            "New Admin Added Successful",
            "success"
          );
        }
      });
  };

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
        const url = `https://speedx-manufacturer-a8fc85684ad6.herokuapp.com/users/${id}`;
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
      <td>{user?.email}</td>
      <td>{user?.phone}</td>
      <td>{user?.address}</td>
      <td>{user?.education}</td>
      <td>{user?.linkedin}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-sm text-white">
            Make Admin
          </button>
        )}
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

export default AllUsersRow;
