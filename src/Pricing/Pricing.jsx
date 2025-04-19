import React from "react";
import Swal from "sweetalert2";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  const packages = [
    {
      name: "Basic",
      price: "$299",
      features: ["3 Days Tour", "Hotel Included", "Free Guide"],
      popular: false,
    },
    {
      name: "Standard",
      price: "$499",
      features: ["5 Days Tour", "Hotel + Meals", "Free Guide", "2 Activities"],
      popular: true,
    },
    {
      name: "Premium",
      price: "$799",
      features: ["7 Days Tour", "All Inclusive", "Personal Guide", "5 Activities"],
      popular: false,
    },
  ];

  const handleChoosePlan = async (planName, price) => {
    const result = await Swal.fire({
      title: `
        <h2 class="text-2xl font-semibold text-amber-500 mb-2">
          Book <span class="text-gray-800">${planName}</span> Plan
        </h2>
      `,
      html: `
        <div class="flex flex-col gap-3 text-left">
          <input id="swal-name" class="swal2-input !text-sm !px-4 !py-2 !rounded-md !border !border-gray-300 focus:!ring-2 focus:!ring-amber-400" placeholder="👤 Your Name">
          <input id="swal-email" class="swal2-input !text-sm !px-4 !py-2 !rounded-md !border !border-gray-300 focus:!ring-2 focus:!ring-amber-400" placeholder="✉️ Email Address">
          <input id="swal-phone" class="swal2-input !text-sm !px-4 !py-2 !rounded-md !border !border-gray-300 focus:!ring-2 focus:!ring-amber-400" placeholder="📞 Phone Number">
          <input id="swal-address" class="swal2-input !text-sm !px-4 !py-2 !rounded-md !border !border-gray-300 focus:!ring-2 focus:!ring-amber-400" placeholder="🏠 Address">
        </div>
      `,
      customClass: {
        confirmButton: 'bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 focus:outline-none mr-2',
        cancelButton: 'bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none',
      },
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Next ➡️",
      cancelButtonText: "Cancel ❌",
      buttonsStyling: false,
      preConfirm: () => {
        const name = document.getElementById("swal-name").value;
        const email = document.getElementById("swal-email").value;
        const phone = document.getElementById("swal-phone").value;
        const address = document.getElementById("swal-address").value;
    
        if (!name || !email || !phone || !address) {
          Swal.showValidationMessage("⚠️ Please fill in all fields!");
          return;
        }
    
        return { name, email, phone, address };
      },
    });
    
    
    if (result.isConfirmed && result.value) {
      const paymentResult = await Swal.fire({
        title: "Choose Payment Method",
        text: `Total Amount: ${price}`,
        icon: "question",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Credit Card",
        denyButtonText: "Mobile Banking",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#16a34a",
        denyButtonColor: "#2563eb",
        cancelButtonColor: "#d33",
      });
  
      if (paymentResult.isConfirmed) {
        const cardDetails = await Swal.fire({
          title: "Enter Credit Card Details",
          html:
            '<input id="swal-card-number" class="swal2-input" placeholder="Card Number">' +
            '<input id="swal-expiry" class="swal2-input" placeholder="Expiry (MM/YY)">' +
            '<input id="swal-cvv" class="swal2-input" placeholder="CVV">',
          focusConfirm: false,
          showCancelButton: true,
          confirmButtonText: "Pay Now",
          cancelButtonText: "Cancel",
          confirmButtonColor: "#16a34a",
          cancelButtonColor: "#d33",
          preConfirm: () => {
            const cardNumber = document.getElementById("swal-card-number").value;
            const expiry = document.getElementById("swal-expiry").value;
            const cvv = document.getElementById("swal-cvv").value;
  
            if (!cardNumber || !expiry || !cvv) {
              Swal.showValidationMessage("Please fill in all card details!");
              return;
            }
  
            return { cardNumber, expiry, cvv };
          },
        });
  
        if (cardDetails.isConfirmed) {
          Swal.fire("Payment Successful!", "Your booking is confirmed.", "success");
        } else if (cardDetails.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Payment Cancelled", "You cancelled the payment process.", "info");
        }
  
      } else if (paymentResult.isDenied) {
        const mobileResult = await Swal.fire({
          title: "Select Mobile Banking Option",
          input: "radio",
          inputOptions: {
            bkash: "BKash",
            nagad: "Nagad",
            rocket: "Rocket",
          },
          inputValidator: (value) => {
            if (!value) {
              return "You need to choose a payment method!";
            }
          },
          confirmButtonText: "Pay Now",
          confirmButtonColor: "#22c55e",
          showCancelButton: true,
          cancelButtonText: "Cancel",
          cancelButtonColor: "#d33",
        });
  
        if (mobileResult.isConfirmed && mobileResult.value) {
          Swal.fire(`Paid via ${mobileResult.value.toUpperCase()}!`, "Your booking is confirmed.", "success");
        } else if (mobileResult.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Payment Cancelled", "You didn't complete the payment.", "info");
        }
  
      } else if (paymentResult.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Payment Cancelled", "You didn't complete the payment.", "info");
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire("Booking Cancelled", "You cancelled the booking process.", "info");
    }
  };
  

  return (
    <section className="py-16" id="pricing">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center">
          <span className="text-amber-400">Pricing</span> Plans
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 text-center transition shadow-md hover:shadow-xl ${
                pkg.popular
                  ? "border-4 border-yellow-500 scale-105 bg-yellow-50"
                  : "border border-amber-400"
              }`}
            >
              {pkg.popular && (
                <div className="mb-2">
                  <span className="text-sm font-semibold text-yellow-600 uppercase">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="mb-2 text-2xl font-semibold">{pkg.name}</h3>
              <p className="mb-4 text-3xl font-bold text-yellow-500">{pkg.price}</p>
              <ul className="mb-4 space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center gap-2 text-left">
                    <FaCheckCircle className="text-green-500 min-w-[18px]" size={18} />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleChoosePlan(pkg.name, pkg.price)}
                className="px-4 py-2 transition bg-yellow-500 rounded hover:bg-yellow-600"
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
