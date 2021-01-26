//jshint esversion:6

$(document).ready(function() {
  $('#carouselButton').click(function() {
    if ($('#carouselButton').children('i').hasClass('fa-pause')) {
      $("#mycarousel").carousel('pause');
      $(".fa-pause").removeClass("fa-pause").addClass("fa-play");
    } else {
      $("#mycarousel").carousel("cycle");
      $(".fa-play").removeClass("fa-play").addClass("fa-pause");
    }
  });
  $(".closeloginmodal").click(function() {
    $("#modalLogin").modal("hide");
  });
  $(".closereservemodal").click(function() {
    $("#modalReserve").modal("hide");
  });
  $("#triggerlogin").click(function() {
    $("#modalLogin").modal("show");
  });
  $("#triggerreservemodal").click(function() {
    $("#modalReserve").modal("show");
  });
});
