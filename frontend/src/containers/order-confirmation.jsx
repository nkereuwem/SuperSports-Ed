import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../reducks/users/selectors";

const OrderConfirmation = () => {
  const selector = useSelector((state) => state);
  const user = JSON.parse(localStorage.getItem("LOGIN_USER_KEY"));
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <>
      <section class="main01">
        <div class="top">
          <p>- Thank You For Your Ordering -</p>
        </div>
        <div class="shipment-details">
          <div class="shipment">
            <p>
              Thank you for your order {user.user_name}. We received your
              request. <br />
              Our staff will be contacting you to tell you the next steps
            </p>
          </div>
        </div>
        <div class="details">
          <form action="">
            <button>
              <a href="/">Back to Home</a>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default OrderConfirmation;
