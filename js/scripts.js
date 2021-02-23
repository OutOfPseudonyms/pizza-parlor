function Pizza(pizzaSizeObject, pizzaToppingsObject) {
  this.pizzaSize = pizzaSizeObject;
  this.pizzaToppings = pizzaToppingsObject;
  this.price = 0;
};

Pizza.prototype.calculateSizePrice = function () {
  if (this.pizzaSize === "small") {
    this.price += 10.99;
  } else if (this.pizzaSize === "medium") {
    this.price += 12.99;
  } else if (this.pizzaSize === "large") {
    this.price += 12000;
  }
};

Pizza.prototype.calculateToppingPrice = function () {
  this.pizzaToppings.forEach(topping => {
    if (topping === "cheese") {
      this.price += 0;
    } else if (topping === "pepperoni") {
      this.price += 1000;
    } else if (topping === "sausage") {
      this.price += 1000;
    } else if (topping === "pineapple") {
      this.price += 1000;
    } else if (topping === "olives") {
      this.price += 1000;
    } else if (topping === "mushrooms") {
      this.price += 1000;
    }
  })
};

// function

// ========================================================================
//User Interface Logic

$(document).ready(function () {
  $("#pizza-parlor-form").submit(function (event) {
    event.preventDefault();
    let pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    let pizzaToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function () {
      let currentTopping = $(this).val();
      pizzaToppings.push(currentTopping);
    });
    let userPizza = new Pizza(pizzaSize, pizzaToppings);    // create a pizza
    userPizza.calculateSizePrice();                         // calculate the size price
    userPizza.calculateToppingPrice();                      // calculate the toppings price

    $('#pizza-parlor-form').hide();
    $("#receipt").show();
    $("#receipt-size").text(userPizza.pizzaSize);
    $("#receipt-toppings").text(userPizza.pizzaToppings);
    $("#receipt-price").text(`$${userPizza.price}`);
  })
});