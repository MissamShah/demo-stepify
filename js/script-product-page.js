
document.querySelectorAll('.images-container img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.popup-img').style.display = 'block';
    document.querySelector('.popup-img img').src = image.getAttribute('src');
  };
});
document.querySelector('.popup-img span').onclick = ()=>{
  document.querySelector('.popup-img').style.display = 'none';
};

//size cart popup

const popup = document.getElementById('popup-chart');
const openPopupBtn = document.getElementById('openPopup-chart');
const closePopupBtn = document.getElementById('closePopup-chart');

// Show the popup and disable body scrolling
openPopupBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
  document.body.style.overflow = 'hidden'; 
});


closePopupBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  document.body.style.overflow = 'auto'; 
});


window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; 
  }
});


let add_t_cart = document.querySelector('.add-to-cart-btn');
add_t_cart.addEventListener('click', () =>{
  alert("your product add success fully");
});
//product add to cart
// const product_container = document.querySelector(".carousle-container");
// const p_card = document.getElementById("productTamplate");


// export const showProductContainer = (products)=>{
//     if(!products){
//         return false;
//     }
//     products.forEach((curpro) => {
//         const { id, name, price, model, image } = curpro;


//         const card_clone = document.importNode(p_card.content, true);
//         card_clone.querySelector(".p_naMe").textContent = name;
//         card_clone.querySelector(".product-img").src = image;
//         product_container.append(card_clone);
//     });

// }
// const a = 12
// const b = 13;
// console.log(a+b);

