// Flip effect
    $(function(){
      $("#card-flip-animation").flip({
        axis: "y", // y or x
        reverse: false, // true and false
        trigger: "click", // click or hover
        speed: '1500',
        front: $('.other-front'),
        back: $('.other-back'),
        autoSize: false
      });
 
    });




