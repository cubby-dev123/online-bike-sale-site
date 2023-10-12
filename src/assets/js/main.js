new WOW().init();

// Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $('.back-to-top').fadeIn('slow');
      $('.contact').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('.contact').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 200);
    return false;
  });

  
$(document).ready(function () {
  $(".slick-content").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  });
});

$(document).ready(function(){
  // when page loaded modal
      $("#modal-1").show();
      $('.modal-container').css('background-color', 'rgba(0, 0, 0, 0.7)');
      $("#load-modal-2").click(function(){
        $("#modal-1").hide();
        $("#modal-2").show();
      })
      $("#load-modal-3").click(function(){
        $("#modal-1").hide();
        $("#modal-3").show();
      })


      //back-btns
      $(".btn-2").click(function(){
          $("#modal-1").show();
          $("#modal-2").hide();
      })
      $(".btn-3").click(function(){
          $("#modal-1").show();
          $("#modal-3").hide();
      })

      //load-default
      $(".load-default").click(function(){
        $(".modal").hide();
        $('.modal-container').css('display', 'none');
      })

      //Input car-info and customer-info
      $("#submit-btn1").click(function() {
          var car_maker = $("#car-maker").val();
          var car_type = $("#car-type").val();
          var car_date = $("#car-date").val();
          var car_distance = $("#car-distance").val();
          if(car_maker == null) {
            alert("メーカーを入力してください。");
          }
          else if(car_type == "") {
            alert("車種を入力してください。");
          }
          else if(car_date == null) {
            alert("年代を入力してください。");
          }
          else if(car_distance == null) {
            alert("走行距離を入力してください。")
          }
          else {
            $(this).css("display", "none");
            $("#need1, #need2").css("background-color", "#63d475");
            $("#need1, #need2, #not-need1, #not-need2").text("OK");
            $("#car-maker, #car-type, #car-date, #car-distance").css("border-color", "#63d475")
            $(".customer-info").css("display", "block");
            $("#submit-btn2").click(function(){
              var customer_name = $("#customer-name").val();
              var customer_phone = $("#customer-phone").val();
              var customer_address = $("#customer-address").val();
              if(customer_name == "") {
                alert("氏名を入力してください。");
              }
              else if(customer_phone == "") {
                alert("電話番号を入力してください。");
              }
              else if(customer_address == null) {
                alert("都道府県を入力してください。");
              }
              else {
                $("#need3, #need4").css("background-color", "#63d475");
                $("#need3, #need4, #not-need3").text("OK");
                $("#customer-name, #customer-phone, #customer-address").css("border-color", "#63d475")

                //save car, customer info in localstorage
                localStorage.setItem("car_maker", car_maker);
                localStorage.setItem("car_type", car_type);
                localStorage.setItem("car_date", car_date);
                localStorage.setItem("car_distance", car_distance);
                localStorage.setItem("customer_name", customer_name);
                localStorage.setItem("customer_phone", customer_phone);
                localStorage.setItem("customer_address", customer_address);
              }
            })
          }
       })

       //page confirm get info in localstorage
       $("#type_info").text(localStorage.getItem("car_type"));
       $("#type_info").css("color", "blue");
       $("#maker").text(localStorage.getItem("car_maker"));
       $("#type").text(localStorage.getItem("car_type"));
       $("#year").text(localStorage.getItem("car_date"));
       $("#distance").text(localStorage.getItem("car_distance"));
       $("#name").text(localStorage.getItem("customer_name"));
       $("#phone").text(localStorage.getItem("customer_phone"));
       $("#place").text(localStorage.getItem("customer_address"));
       
    })


//mouse cursor

document.addEventListener('DOMContentLoaded', () => {
  if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    const body = document.body;
    const stalker = document.createElement('div');
    const btns = document.querySelectorAll('a');
    const STALKER_SIZE = 25;
    const STALHER_COLOR = 'rgba(249, 125, 29, .8)';
    const SCALE_SIZE = 3;
    const SCALE_DURATION = .3;

    ({
      init() {
        const self = this;
        stalker.id = 'js-stalker';
        stalker.className = 'stalker';
        stalker.style.width = STALKER_SIZE + 'px';
        stalker.style.height = STALKER_SIZE + 'px';
        stalker.style.backgroundColor = STALHER_COLOR;
        body.appendChild(stalker);
        body.addEventListener('mousemove', self.onMouseMove);
        for (let i = 0; i < btns.length; i++) {
          btns[i].addEventListener('mouseenter', self.onMouseEnter);
          btns[i].addEventListener('mouseleave', self.onMouseLeave);
        }
      },
      onMouseMove(e) {
        TweenMax.to(stalker, .4, {
          x: e.clientX - (STALKER_SIZE / 2),
          y: e.clientY - (STALKER_SIZE / 2),
        });
      },
      onMouseEnter() {
        TweenMax.to(stalker, SCALE_DURATION, {
          scale: SCALE_SIZE
        });
      },
      onMouseLeave() {
        TweenMax.to(stalker, SCALE_DURATION, {
          scale: 1
        });
      },
    }.init());
  }
});