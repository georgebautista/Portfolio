$(".nav li").on("click", function(){
  $(".nav li").removeClass("active");
  $(this).addClass("active");
})

//For Strenghts

var clickables = ["hardWorking.jpg", "octagon2.jpg", "octagon3.jpg"];
var comeBack = true;

function hardWorking(){
  if(comeBack == true){
    document.getElementById("octagon1").style.backgroundImage ="url('hard.png')"
    document.getElementById("octagon1").style.transition = "all ease-in-out 500ms";
    comeBack = false;
  }else if (comeBack == false){
    document.getElementById("octagon1").style.backgroundImage ="url('h2.png')";
    document.getElementById("btn-hard").innerHTML = "HARDWORKING";
    comeBack = true;
  }
}
function minimalSupervision(){
  if(comeBack == true){
    document.getElementById("octagon2").style.backgroundImage ="url('minimal.png')";
    document.getElementById("octagon2").style.transition = "all ease-in-out 500ms";
    comeBack = false;
  }else if (comeBack == false){
    document.getElementById("octagon2").style.backgroundImage ="url('ms.png')";
    document.getElementById("octagon2").style.transition = "all ease-in-out 500ms";
    comeBack = true;
  }
}

function teamPlayer(){
  if(comeBack == true){
    document.getElementById("octagon3").style.backgroundImage ="url('team.png')";
    document.getElementById("octagon3").style.transition = "all ease-in-out 500ms";
    comeBack = false;

  }else if (comeBack == false){
    document.getElementById("octagon3").style.backgroundImage ="url('tp.png')";
    document.getElementById("octagon3").style.transition = "all ease-in-out 500ms";
    comeBack = true;
  }
}

//For Slide toggle

$(document).ready(function(){
  $("#left-arrow").click(function(){
    $("#left-side-bar").hide(function(){
      $("#right-arrow").show(function(){
        $("#left-arrow").hide(function(){
          $("#right-arrow").click(function(){
            $("#left-side-bar").show(function(){
              $("#left-arrow").show(function(){
                $("#right-arrow").hide();
              });
            });
          })
        });
      });
    });
  });
});

//Gallery effects when hover

$(document).ready(function(){
  $(".image-one").click(function(){
    $(".image1-content").slideDown(function(){
      $(".image-one").mouseleave(function(){
        $(".image1-content").slideUp(function(){
          $(".image1-content").addClass("animated bounce")
        });
      });
    });
  })
})

$(document).ready(function(){
  $(".image-two").click(function(){
    $(".image2-content").slideDown(function(){
      $(".image-two").mouseleave(function(){
        $(".image2-content").slideUp();
      });
    });
  })
})

$(document).ready(function(){
  $(".image-three").click(function(){
    $(".image3-content").slideDown(function(){
      $(".image-three").mouseleave(function(){
        $(".image3-content").slideUp();
      });
    });
  })
})

$(document).ready(function(){
  $(".image-four").click(function(){
    $(".image4-content").slideDown(function(){
      $(".image-four").mouseleave(function(){
        $(".image4-content").slideUp();
      });
    });
  })
})

$(document).ready(function(){
  $(".image-five").click(function(){
    $(".image5-content").slideDown(function(){
      $(".image-five").mouseleave(function(){
        $(".image5-content").slideUp();
      });
    });
  })
})

$(document).ready(function(){
  $(".image-six").click(function(){
    $(".image6-content").slideDown(function(){
      $(".image-six").mouseleave(function(){
        $(".image6-content").slideUp();
      });
    });
  })
})
