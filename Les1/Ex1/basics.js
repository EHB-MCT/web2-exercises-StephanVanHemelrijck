"use strict";

window.onload = function () {
  alert("Page is fully loaded");
};

const form = {
  init() {
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let order = document.getElementById("order").value;
      // console.log(submitButton);

      order = {
        name,
        email,
        order,
        htmlString: `The order for the customer ${name} is the following: ${order}. The customer may be notified by email: ${email}`,
      };

      console.log("HtmlString", order.htmlString);
      printOrder(order);
    });
    printOrder(order) {
      console.log(order);
    }
  },
};

form.init();
