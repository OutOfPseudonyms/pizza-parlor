function Pizza(pizzaSizeObject, pizzaToppingsObject) {
  this.pizzaSize = pizzaSizeObject;
  this.pizzaToppings = pizzaToppingsObject;
  this.price = 0;
}



// ========================================================================
//User Interface Logic

$(document).ready(function () {
  $("#pizza-parlor-form").submit(function (event) {
    event.preventDefault();
    let pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    let pizzaToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() { 
      let currentTopping = $(this).val();
      pizzaToppings.push(currentTopping);
    });
    console.log(pizzaSize, pizzaToppings);
    $('pizza-parlor-form').hide();
  })
})