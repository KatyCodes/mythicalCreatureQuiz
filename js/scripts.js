$(document).ready(function() {
  $("form").submit(function(event) {

    var result = $("input:radio[name=radiocolor]:checked").val();
    var result2 = $("input:radio[name=radiofood]:checked").val();

// Unicorn results
    if (result === 'purple' && result2 === 'Sparkling Water' || result === 'red' && result2 === 'Sparkling Water'){
        $("#unicorn").show();
        $("#centaur").hide();
        $("#phoenix").hide();
        $("form").slideUp();
    }
//Centaur results
    else if (result === 'purple' && result2 === 'Meat' || result2 === 'Carrots'|| result === 'green' && result2 === 'Sparkling Water' || result === 'green' && result2 === 'Carrots'){
        $("#centaur").show();
        $("#unicorn").hide();
        $("#phoenix").hide();
        $("form").slideUp();
    }
//Phoenix results
    else if (result === 'red' && result2 === 'Carrots' || result === 'red' && result2 === 'Meat' || result === 'green' && result2 === 'Meat') {
      $("#centaur").hide();
      $("#unicorn").hide();
      $("#phoenix").show();
      $("form").slideUp();
    }
    event.preventDefault();
  });

  $("#phoenix").click(function(){
    $("form").slideDown();
    $("#phoenix").hide();
  });

  $("#unicorn").click(function(){
    $("form").slideDown();
    $("#unicorn").hide();
  });

  $("#centaur").click(function(){
    $("form").slideDown();
    $("#centaur").hide();
  });

});
