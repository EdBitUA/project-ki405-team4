let nBrand = document.querySelector(".navbarBrand");
setInterval(() => {
    if (nBrand.style.color = "white") {
        nBrand.style.color = "yellow";
    }
}, 500);

setInterval(() => {
    if (nBrand.style.color = "yellow") {
        nBrand.style.color = "white";
    }
}, 1000);

var inp = document.querySelector("#inp");
var botton = document.querySelector("#button");


botton.addEventListener('click', MyFunc);

function MyFunc(){
    alert("ЩУКАЄМO...")
}




let d = 2;
try {
res = 5/d
    console.log(res);
} catch (error) {
    console.log("error");
}


(function ($) {
    $(window).on("load", function () {
      $('body').mCustomScrollbar({
        theme: "dark-thin"
      });
    });
  })(jQuery);