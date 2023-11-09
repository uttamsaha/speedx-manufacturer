import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loadng/Loading";
import ManageProductsRow from "./ManageProductsRow";

const ManageProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://speedx-manufacturer-a8fc85684ad6.herokuapp.com/tool").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-center text-3xl font-bold m-8 text-green-500">
        Manage Products
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Minimum Order Quantity</th>
              <th>Available</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <ManageProductsRow
                key={product._id}
                product={product}
                index={index}
                refetch={refetch}
              ></ManageProductsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
