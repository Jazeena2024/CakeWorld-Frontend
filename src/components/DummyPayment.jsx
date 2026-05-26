import React from "react";

import API from "../services/api";

function DummyPayment({ amount }) {

  const handlePayment = async () => {

    try {

      const response = await API.post(
        "/payment/checkout",
        {
          amount
        }
      );

      // ✅ Redirect to Stripe
      window.location.href = response.data.url;

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="flex justify-center mt-10">

      <button
        onClick={handlePayment}
        className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl"
      >

        Pay $ {amount}
    
      </button>

    </div>

  );

}

export default DummyPayment;