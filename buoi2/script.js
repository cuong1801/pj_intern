
$(document).ready(function () {
    $("#toggleClass1").click(function () {
        const xxx = $("#click-angle").attr("class").split(" ")[2]
        if (xxx === "fa-angle-down") {

            $("#click-angle").removeClass("fa-angle-down");
            $("#click-angle").addClass("fa-angle-up");



        } else {
            $("#click-angle").removeClass("fa-angle-up");
            $("#click-angle").addClass("fa-angle-down");
            $("#click-angle1").addClass("fa-angle-up");
            $("#click-angle1").removeClass("fa-angle-down");
            $("#click-angle2").addClass("fa-angle-up");
            $("#click-angle2").removeClass("fa-angle-down");
            $("#click-angle3").addClass("fa-angle-up");
            $("#click-angle3").removeClass("fa-angle-down");

        }
        // console.log($("#click-angle").attr("class").split(" ")[2]);
        // $("i").toggleClass("fas fa-angle-down angle-down");
        // $("i").toggleClass("fa-angle-down", true);
    });

});


$(document).ready(function () {
    $("#toggleClass2").click(function () {
        const xxx = $("#click-angle1").attr("class").split(" ")[2]
        if (xxx === "fa-angle-down") {
            $("#click-angle1").removeClass("fa-angle-down");
            $("#click-angle1").addClass("fa-angle-up");


        } else {

            $("#click-angle1").removeClass("fa-angle-up");
            $("#click-angle1").addClass("fa-angle-down");

            $("#click-angle").removeClass("fa-angle-down");
            $("#click-angle").addClass("fa-angle-up");
            $("#click-angle2").removeClass("fa-angle-down");
            $("#click-angle2").addClass("fa-angle-up");
            $("#click-angle3").removeClass("fa-angle-down");
            $("#click-angle3").addClass("fa-angle-up");
        }
        // console.log($("#click-angle").attr("class").split(" ")[2]);
        // $("i").toggleClass("fas fa-angle-down angle-down");
        // $("i").toggleClass("fa-angle-down", true);
    });

});
$(document).ready(function () {
    $("#toggleClass3").click(function () {
        const xxx = $("#click-angle2").attr("class").split(" ")[2]
        if (xxx === "fa-angle-down") {

            $("#click-angle2").removeClass("fa-angle-down");
            $("#click-angle2").addClass("fa-angle-up");
        } else {
            $("#click-angle2").removeClass("fa-angle-up");
            $("#click-angle2").addClass("fa-angle-down");
            $("#click-angle").removeClass("fa-angle-down");
            $("#click-angle").addClass("fa-angle-up");
            $("#click-angle1").removeClass("fa-angle-down");
            $("#click-angle1").addClass("fa-angle-up");
            $("#click-angle3").removeClass("fa-angle-down");
            $("#click-angle3").addClass("fa-angle-up");
        }
        // console.log($("#click-angle").attr("class").split(" ")[2]);
        // $("i").toggleClass("fas fa-angle-down angle-down");
        // $("i").toggleClass("fa-angle-down", true);
    });

});
$(document).ready(function () {
    $("#toggleClass4").click(function () {
        const xxx = $("#click-angle3").attr("class").split(" ")[2]
        if (xxx === "fa-angle-down") {
            $("#click-angle3").removeClass("fa-angle-down");
            $("#click-angle3").addClass("fa-angle-up");

        } else {
            $("#click-angle3").removeClass("fa-angle-up");
            $("#click-angle3").addClass("fa-angle-down");
            $("#click-angle").removeClass("fa-angle-down");
            $("#click-angle").addClass("fa-angle-up");
            $("#click-angle2").removeClass("fa-angle-down");
            $("#click-angle2").addClass("fa-angle-up");
            $("#click-angle1").removeClass("fa-angle-down");
            $("#click-angle1").addClass("fa-angle-up");

        }
        // console.log($("#click-angle").attr("class").split(" ")[2]);
        // $("i").toggleClass("fas fa-angle-down angle-down");
        // $("i").toggleClass("fa-angle-down", true);
    });

});

$('.carousel').carousel({
    interval: 1000
  })

// $(document).ready(function(){
//     $("#carouselID").click(function(){
//         console.log($())
//     })
// })




// $(document).ready(function(){
//   // Activate Carousel
//   $("#myCarousel").carousel();

//   // Enable Carousel Indicators
//   $(".item1").click(function(){
//     $("#myCarousel").carousel(0);
//   });
//   $(".item2").click(function(){
//     $("#myCarousel").carousel(1);
//   });
//   $(".item3").click(function(){
//     $("#myCarousel").carousel(2);
//   });

//   // Enable Carousel Controls
//   $(".carousel-control-prev").click(function(){
//     $("#myCarousel").carousel("prev");
//   });
//   $(".carousel-control-next").click(function(){
//     $("#myCarousel").carousel("next");
//   });

// });

    //   khai báo biến slideIndex đại diện cho slide hiện tại
    //   var slideIndex;
    //   // KHai bào hàm hiển thị slide
    //   function showSlides() {
    //       var i;
    //       var slides = document.getElementsByClassName("mySlides");
    //       var dots = document.getElementsByClassName("dot");

    //       for (i = 0; i < slides.length; i++) {
    //          slides[i].style.display = "none";  
    //       }
    //       for (i = 0; i < dots.length; i++) {
    //           dots[i].className = dots[i].className.replace(" active", "");
    //       }

    //       slides[slideIndex].style.display = "block";  
    //       dots[slideIndex].className += " active";
    //       //chuyển đến slide tiếp theo
    //       slideIndex++;
    //       //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    //       if (slideIndex > slides.length - 1) {
    //         slideIndex = 0
    //       }    
    //       //tự động chuyển đổi slide sau 5s
    //       setTimeout(showSlides, 4000);
    //   }
    //   //mặc định hiển thị slide đầu tiên 
    //   showSlides(slideIndex = 0);


    //   function currentSlide(n) {
    //     showSlides(slideIndex = n);
    //   }

