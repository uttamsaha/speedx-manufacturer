import React from "react";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loadng/Loading";
import OrdersRow from "./OrdersRow";
import { useAuthState } from "react-firebase-hooks/auth";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  //react query
  // data: user means data er nam dilam users

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://speedx-manufacturer-a8fc85684ad6.herokuapp.com/order?email=${email}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-3xl text-center font-bold mt-12 text-green-500 mb-3">
        My Orders
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <OrdersRow
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
              ></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
