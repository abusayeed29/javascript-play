const processOrder = () => {
  console.log("Processing order for customer 1");

    var currentTime = new Date().getTime();
    while (currentTime + 3000 >= new Date().getTime());

  // setTimeout function is a built in Asynchronous function
  // setTimeout(() => {
  //     console.log('cooking completed');
  // }, 3000);

  console.log("Order processed for customer 1");
};

console.log("take order for customer 1");
processOrder();
console.log("Completed order for customer 1");
