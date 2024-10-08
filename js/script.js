const r_nav = document.querySelector('.r-mobile-nav-btn');
        const nav_head = document.querySelector('.nav');
        const bar_icon = document.querySelector('.fa-bars');
        const times_icon = document.querySelector('#nav-cross-btn');

        const togglenav = () => {
            nav_head.classList.toggle("actice");
            bar_icon.classList.toggle("active");
            times_icon.classList.toggle("active");
        }
        r_nav.addEventListener('click', () => togglenav())
        //nav r
        const ournav_ItemDiv = document.getElementsByClassName("perant-item");
        const nav_openIcon = document.getElementsByClassName("m-iconOpen");
        const nav_closeIcon = document.getElementsByClassName("m-iconClose");
        for (let i = 0; i < ournav_ItemDiv.length; i++) {
            nav_closeIcon[i].style.display = "none";

            ournav_ItemDiv[i].addEventListener("click", () => {
                const result = ournav_ItemDiv[i].classList.toggle("active");

                if (result) {
                    nav_closeIcon[i].style.display = "block";
                    nav_openIcon[i].style.display = "none";
                } else {
                    nav_closeIcon[i].style.display = "none";
                    nav_openIcon[i].style.display = "block";
                }
            });
        }
        //announcment bar
        const announcement = document.getElementsByClassName('announcement')[0];
        const statements = document.getElementsByClassName('statment');
        const close_anounc = document.getElementById('close-announcment');
        let currentIndex = 0;
        function showNextAnnouncement() {
            for (let i = 0; i < statements.length; i++) {
                statements[i].style.display = 'none';
            }
            statements[currentIndex].style.display = 'block';

            currentIndex = (currentIndex + 1) % statements.length;
        }
        showNextAnnouncement();
        setInterval(showNextAnnouncement, 3000);
        //serch page close
        document.querySelector('#open').addEventListener('click', () => {
            document.querySelector(".search-pop-page").style.display = "block";
        });

        document.querySelector('#close').addEventListener('click', () => {
            document.querySelector(".search-pop-page").style.display = "none";
        });
       
        close_anounc.addEventListener('click', ()=>{
          document.querySelector('.announcement').style.display='none';
          document.querySelector('.head-banner').style.marginTop= "70px";
          if (window.matchMedia('(max-width: 540px)').matches) {
            document.querySelector('.head-banner').style.marginTop = "30px";
          }
        });
/=================back to top btn===================/
window.onscroll = function() {scrollFunction()};
const mybutton = document.getElementById("myBtn");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/========================================contact-link-btn====================================================/
const menu_circle = document.querySelector(".main-circle");
      const hiden_circle = document.querySelector(".sub-circle-m");
      menu_circle.addEventListener("click", () => {
        hiden_circle.classList.toggle("active");
        menu_circle.classList.toggle("active");
});
/===============================================scroll next btn for cards on home page========================================================/
function scrollSection(button, amount) {
  const section = button.closest('.best-seller-products');
  const container = section.querySelector('.container-best-seller-products');
  container.scrollBy({
    left: amount,
    behavior: 'smooth'
  });
}

document.querySelectorAll('.prev').forEach(button => {
  button.addEventListener('click', () => {
    scrollSection(button, -700); 
  });
});

document.querySelectorAll('.next').forEach(button => {
  button.addEventListener('click', () => {
    scrollSection(button, 700); 
  });
});
/=============================================================================================================/
//===============================responsive footer menu===================================================//
const ourItemDiv = document.getElementsByClassName("item");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");
for (let i = 0; i < ourItemDiv.length; i++) {
  closeIcon[i].style.display = "none";
  ourItemDiv[i].addEventListener("click", () => {
    const result = ourItemDiv[i].classList.toggle("active");
    if (result) {
      closeIcon[i].style.display = "block";
      openIcon[i].style.display = "none";
    } 
    else {
      closeIcon[i].style.display = "none";
      openIcon[i].style.display = "block";
    }
  });
}
/==========================================================================================================/
//========================================faqs parents========================================================//
const our_faq_itemDiv = document.getElementsByClassName("parient-item");
const open_p_Icon = document.getElementsByClassName("p-iconOpen");
const close_p_Icon = document.getElementsByClassName("p-iconClose");

for (let i = 0; i < our_faq_itemDiv.length; i++) {
  close_p_Icon[i].style.display = "none";

  our_faq_itemDiv[i].addEventListener("click", () => {
    const result = our_faq_itemDiv[i].classList.toggle("active");

    if (result) {
      close_p_Icon[i].style.display = "block";
      open_p_Icon[i].style.display = "none";
    } else {
      close_p_Icon[i].style.display = "none";
      open_p_Icon[i].style.display = "block";
    }
  });
};
//alert message
let alert_msg = document.querySelector(".Subscribe-alert-container");
let cls_alert = document.querySelector('.back-alert');
window.onload = () => {
  if (!sessionStorage.getItem("alertShown")) {
    setTimeout(() => {
      alert_msg.style.display = "flex";
      sessionStorage.setItem("alertShown", "true");
    }, 3000);
    cls_alert.addEventListener("click", ()=>{
      alert_msg.style.display = "none";
    })
  }
}
// clock
// const My_clock = function () {
//   let hr_dots = document.getElementById("hrdots");
//   let min_dots = document.getElementById("mindots");
//   let sec_dots = document.getElementById("secdots");
//   let date = new Date();
//   let hours = date.getHours() % 12; // convert to 12-hours formate
//   let amPm = date.getHours() >= 12 ? "Pm" : "Am";
//   hours = hours === 0 ? 12 : hours;
//   let mints = date.getMinutes();
//   let sec = date.getSeconds();

//   let second_d = "";
//   for (let i = 1; i < 61; i++) {
//     let rot = i * 6;
//     if (i === sec) {
//       second_d +=
//         '<div class="dot active" style="transform: rotate(' +
//         rot +
//         'deg)"></div>';
//     } else {
//       second_d +=
//         '<div class="dot" style="transform: rotate(' +
//         rot +
//         'deg)"></div>';
//     }
//   }
//   let min_d = "";
//   for (let i = 1; i < 61; i++) {
//     let rot = i * 6;
//     if (i === mints) {
//       min_d +=
//         '<div class="dot active" style="transform: rotate(' +
//         rot +
//         'deg)"></div>';
//     } else {
//       min_d +=
//         '<div class="dot" style="transform: rotate(' +
//         rot +
//         'deg)"></div>';
//     }
//   }
//   let hour_d = "";
//   for (let i = 1; i < 13; i++) {
//     let rot = i * 30;
//     if (i === hours) {
//       hour_d +=
//         '<div class="dot active" style="transform: rotate(' +
//         rot +
//         'deg)"></div>';
//     } else {
//       hour_d +=
//         '<div class="dot" style="transform: rotate(' +
//         rot +
//         'deg)"></div>';
//     }
//   }

//   hr_dots.innerHTML = hour_d +
//     "<h2>" + zero(hours) + "<br><span>H O U R s</span></h2>";
//   min_dots.innerHTML =
//     min_d + 
//     "<h2>" + zero(mints) + "<br><span>M I N T s</span></h2>";
//   sec_dots.innerHTML =
//     second_d +
//     "<b>" +
//     amPm +
//     "</b>" +
//     "<h2>" +
//     zero(sec) +
//     " <br><span>S E C O N D s</span></h2>";
// };
// const zero = function (number) {
//   if (number < 10) {
//     return "0" + number;
//   }
//   return number;
// };
// setInterval(My_clock, 1000);


// const updateCartIconValue = (ProductLs)=>{
//   return cartValue.innerHTML = `<i id="cart" class="fa fa-shopping-cart" aria-hidden="true"> <span>${ProductLs.length}</span></i>`;
//   }


//   const getCartPFromls = () =>{
//     let cartProduct = localStorage.getItem('ProductLs');
//     if(!cartProduct){
//         return [];
//     }
//     cartProduct = JSON.parse(cartProduct);
//     updateCartIconValue(cartProduct);

//     return cartProduct;
// }





