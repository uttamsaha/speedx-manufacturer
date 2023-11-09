import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import swal from "sweetalert";
import Loading from "../../Shared/Loadng/Loading";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "52a7c30a95d000395b196c985adb3c83";

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const minOrderQuantity = event.target.minOrderQuantity.value;
    const available = event.target.available.value;
    const description = event.target.description.value;
    const image = document.querySelector("#img"); // taking image from input
    const formData = new FormData();
    formData.append("image", image.files[0]);
    // formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const img = data.data.url; // hosted image link;
          const product = {
            name: name,
            price: price,
            minOrderQuantity: minOrderQuantity,
            available: available,
            description: description,
            img: img,
          };

          //send docotr info to my database
          fetch("https://speedx-manufacturer-a8fc85684ad6.herokuapp.com/tool", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted?.insertedId) {
                swal(
                  "Product Successfully Added!",
                  "Your Product Successfully Added to Database!",
                  "success"
                );
                event.target.reset(); //clear form
              } else {
                toast("Failed to add doctor");
              }
              console.log("product", inserted);
            });
        }

        console.log("iMG BB RESULT", data);
      });
    // console.log(data);
    //
  };
  return (
    <div>
      <h2 className="text-center text-3xl font-bold m-8 text-green-500">
        Add a New Product
      </h2>
      <div className="flex justify-center">
        <form
          onSubmit={handleAddProduct}
          className="shadow-2xl pl-12 pr-12 pt-6 pb-6 mt-4 mb-12"
        >
          <label htmlFor="productName">Product Name:</label> <br />
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs mb-3"
          />{" "}
          <br />
          <label htmlFor="price">Price</label> <br />
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs mb-3"
          />{" "}
          <br />
          <label htmlFor="minOrder">Minimum Order Quantity: </label> <br />
          <input
            type="text"
            name="minOrderQuantity"
            placeholder="Minimum Order Quantity"
            className="input input-bordered w-full max-w-xs mb-3"
          />{" "}
          <br />
          <label htmlFor="Available">Available</label> <br />
          <input
            type="text"
            name="available"
            placeholder="Available"
            className="input input-bordered w-full max-w-xs mb-3"
          />{" "}
          <br />
          <label htmlFor="description">Description:</label> <br />
          <textarea
            className="textarea input-bordered w-full max-w-xs mb-3"
            name="description"
            placeholder="Bio"
          ></textarea>{" "}
          <br />
          <label htmlFor="image">Upload Image:</label> <br />
          <input
            className="input w-full max-w-xs mb-3"
            name="img"
            id="img"
            type="file"
          />{" "}
          <br />
          <input
            className="btn btn-primary text-white w-48 block mx-auto"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
