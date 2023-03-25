// let border = document.querySelectorAll(".border");
// let faxmark = document.querySelectorAll(".fa-xmark")
// let increment = document.querySelectorAll(".increment");
// let decrement = document.querySelectorAll(".decrement")
// let numeral = document.querySelectorAll(".numeral");
// let total = document.querySelectorAll(".total");
// let MalinQiymeti = document.querySelectorAll(".MalinQiymeti");
// let YeniCem = 0 ;

// for (let i = 0; i < increment.length; i++) {
//  let count = 1

// total[i].innerHTML = MalinQiymeti[i].textContent
// YeniCem = parseInt(total[i].textContent) + YeniCem
// console.log(total[i]);
// total[i].innerHTML = YeniCem



// increment[i].addEventListener("click" , (event)=>{
//     count++
//  let conta = event.target
//  let YeniMalinQiymeti = conta.parentNode.parentNode.parentNode.children[0].textContent

//  console.log(YeniMalinQiymeti);
// let cem =  YeniMalinQiymeti * count
//     numeral[i].innerHTML = count
//         console.log("salam")
//    console.log(cem);
//     })
    


    
// decrement[i].addEventListener("click" , ()=>{
//     count--
//     if (count <= 0) {
//         count = 0;
//     }else{
//         numeral[i].innerHTML = count
//     }
//     })
    

//     faxmark[i].addEventListener("click" , ()=>{
        
//         border[i].remove()
            
//         })
    
// }


// const products = document.querySelectorAll(".price");
// const totalPriceElement = document.querySelector("#total-price")
// let faxmark = document.querySelectorAll(".fa-xmark")
// let totalPrice = 0;
// let border = document.querySelectorAll(".border");


// products.forEach((product)=>{
//     const price = parseFloat(product.querySelector(".MalinQiymeti").textContent.split(" ")[0])

//     console.log(price);
   

// const decrementButton = product.querySelector(".decrement");
// const incrementButton = product.querySelector(".increment");
// const numeralElement =  product.querySelector(".numeral")

// decrementButton.addEventListener("click" , () => {
// let numeral = parseInt(numeralElement.textContent)
//  if (numeral > 0) {
//     numeralElement.textContent =  numeral - 1 ;
//     totalPrice -= price;
//     totalPriceElement.textContent = totalPrice.toFixed(2);
//  }

// });

// incrementButton.addEventListener("click", () => {
//     let numeral = parseInt(numeralElement.textContent);
//   numeralElement.textContent = numeral + 1;
  
//   totalPrice += price;
//   totalPriceElement.textContent = totalPrice.toFixed(2);
//   });

//   console.log(    totalPriceElement);

// console.log(numeralElement );

// }); 



//  for (let i = 0; i < border.length; i++) {


//    faxmark[i].addEventListener("click" , ()=>{
        
//        border[i].remove()      
//       })
//     }













// let borders = document.querySelectorAll(".border");
let faxmark = document.querySelector(".fa-xmark")


// let increments = document.querySelectorAll(".increment");
// let decrements = document.querySelectorAll(".decrement")
// let numerals = document.querySelectorAll(".numeral");
// let totals = document.querySelectorAll(".total");
// let YeniCem = 0 ;

// for (let i = 0; i < increments.length; i++) {
//   let count = parseInt(numerals[i].textContent);
//   let MalinQiymeti = parseFloat(borders[i].querySelector(".MalinQiymeti").textContent);

//   totals[i].innerHTML = (count * MalinQiymeti).toFixed(2);
//   YeniCem = parseFloat(totals[i].textContent) + YeniCem;

//   increments[i].addEventListener("click", (event) => {
//     count++;
//     let conta = event.target
//  let YeniMalinQiymeti = conta.parentNode.parentNode.parentNode.children[0].textContent
//  let cem =  YeniMalinQiymeti * count
//  console.log(YeniMalinQiymeti);
//     numerals[i].innerHTML = count;
//     totals[i].innerHTML = (count * MalinQiymeti).toFixed(2);
//     YeniCem = parseFloat(totals[i].textContent) + YeniCem;
//   });

//   decrements[i].addEventListener("click", () => {
//     count--;
//     if (count <= 1) {
//       count = 0;
//     }
//     numerals[i].innerHTML = count;
//     totals[i].innerHTML = (count * MalinQiymeti).toFixed(2);
//     YeniCem = parseFloat(totals[i].textContent) + YeniCem;
//   });

//   faxmarks[i].addEventListener("click", () => {
//     borders[i].remove();
//     YeniCem -= parseFloat(totals[i].textContent);
//   });
// }

// console.log(YeniCem.toFixed(2));


// let shop = document.querySelector(".shop");
// let border = document.querySelector(".border");


// window.addEventListener("load" , async ()=>{


// let response = await fetch("https://fakestoreapi.com/products");

// let data = await response.json()

// let obj = "";

// data.forEach(element => {

// obj +=
//  `<div class="border">
// <img src=${element.image} alt="" />
// <span>${element.description.slice(0,47)}</span>
// <i class="fa-sharp fa-solid fa-xmark"></i>
// <i class="fa-sharp fa-regular fa-heart"></i>

// <div class="about">
//   <div class="price">
//     <div class="MalinQiymeti 1">${element.price}$</div>

//     <div class="count">
//       <div class="increment">
//         <i class="fa-sharp fa-solid fa-plus"></i>
//       </div>
//       <div class="numeral">0</div>
//       <div class="decrement">
//         <i class="fa-sharp fa-solid fa-minus"></i>
//       </div>
//     </div>
//   </div>
// </div>
// </div>`

// console.log(element);

// });

// shop.innerHTML = obj

// })


let shop = document.querySelector(".shop");
let border = document.querySelector(".border");

window.addEventListener("load", async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();

  let obj = "";

  data.forEach((element) => {
    obj += `
      <div class="border">
      <div class="img">
        <img src=${element.image} alt="" />
</div>
        <span>${element.description.slice(0, 47)}</span>
        <i class="fa-sharp fa-solid fa-xmark"></i>
        <i class="fa-sharp fa-regular fa-heart"></i>

        <div class="about">
          <div class="price">
            <div class="MalinQiymeti 1">${element.price}$</div>

            <div class="count">
              <div class="increment">
                <i class="fa-sharp fa-solid fa-plus"></i>
              </div>
              <div class="numeral">0</div>
              <div class="decrement">
                <i class="fa-sharp fa-solid fa-minus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
       `;
    

    console.log(element);
  });

  shop.innerHTML = obj;
  
  // add event listeners to increment and decrement buttons for each item
  let incrementButtons = document.querySelectorAll(".increment");
  let decrementButtons = document.querySelectorAll(".decrement");  

  let faxmarks = document.querySelectorAll(".fa-xmark");
  incrementButtons.forEach((button) => {
  let totalDiv = document.querySelector(".total");
let priceDivs = document.querySelectorAll(".MalinQiymeti");
    
    button.addEventListener("click", () => {
    
        let total = 0;
priceDivs.forEach((priceDiv) => {
  let price = parseFloat(priceDiv.textContent);
  let numeral = priceDiv.parentNode.parentNode.querySelector(".numeral");
  let count = parseInt(numeral.textContent);
  total += price * count;
});
totalDiv.textContent = total.toFixed(2);
      let numeral = button.parentNode.querySelector(".numeral");
      let count = parseInt(numeral.textContent);
      numeral.textContent = count + 1;

    });
  });

  decrementButtons.forEach((button) => {
    button.addEventListener("click", () => {

  
    let numeral = button.parentNode.querySelector(".numeral");
      let count = parseInt(numeral.textContent);
      if (count > 0) {
        numeral.textContent = count - 1;
        
      }
          
    });
  });
    let xmarkIcons = document.querySelectorAll(".fa-xmark");
  xmarkIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
     
      let border1 = icon.parentNode;
      border1.remove();
    });
  });



});
















