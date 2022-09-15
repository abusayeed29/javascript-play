const takeOrder =(customer, callback) => {
    console.log(`Take order for ${customer}`);
    callback(customer);
}

const processOrder = (customer, callback) => {
    console.log(`Processing order for customer ${customer}`);

    // setTimeout function is a built in Asynchronous function
    setTimeout(() => {
        console.log('cooking completed');
        console.log(`Order processed for customer ${customer}`);
        callback(customer);
    }, 3000);
    
  };

  const completeOrder = (customer) =>{
    console.log(`Completed order for ${customer}`);
  }
  
  takeOrder('customer 1', (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
  });

  console.log('hello');
 
  