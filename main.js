// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
  // Answer:
  let total_price = 0;
  for (let i = 0; i < data.length; i++) {
    total_price += data[i].price;
  }
  console.log("$" + Math.round((total_price / data.length) * 100) / 100);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:
  let myArray = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].price <= 18 && data[i].price >= 14) {
      myArray.push(data[i].title);
      console.log(data[i].title);
    }
  }

}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  let gBP_code;
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      gBP_code = data[i];
    }
  }
  console.log(gBP_code.title + " $" + gBP_code.price);
}


// 4: Display a list of all items who are made of wood.
function question4() {
  // Answer:
  let woodArray = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.includes("wood")) {
      woodArray.push(data[i]);
      console.log(data[i].title);
    }
  }
}




// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5() {
  // Answer:
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      console.log(data[i].title + ' has ' + data[i].materials.length + ' materials.');
      console.log()
      for (let x = 0; x < data[i].materials.length; x++) {
        console.log("-" + data[i].materials[x]);
      }
    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6() {
  // Answer:
  let itemCount = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      itemCount++;
    }
  }
  console.log(itemCount + " items were made by there sellers.");
}