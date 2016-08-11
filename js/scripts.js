//back-end

//front-end

$(document).ready(function() {
  $("form").submit(function(event) {

    var result = $("input:radio[name=radiocolor]:checked").val();
    var result2 = $("input:radio[name=radiofood]:checked").val();

    //purple results
    if (result === 'Purple' && result2 === 'Sparkling Water' || result2 === 'Carrots'){
      alert("Your power animal is a Unicorn!")
        $("#unicorn").show();
        $("#centaur").hide();
        $("#phoenix").hide();
    }
    // else if (result === 'Purple' && result2 === 'Carrots'){
    //   alert("Your power animal is a Unicorn")
    //   $("#unicorn").show();
    //   $("#centaur").hide();
    //   $("#phoenix").hide();
    // }
    else if (result === 'Purple' && result2 === 'Meat'){
      alert("Your power animal is a Centaur")
        $("#centaur").show();
        $("#unicorn").hide();
        $("#phoenix").hide();
    }
    //red results:
    else if (result === 'Red' && result2 === 'Sparkling Water') {
      alert("Your power animal is a Unicorn.")
      $("#unicorn").show();
      $("#centaur").hide();
      $("#phoenix").hide();
    }
    else if (result === 'Red' && result2 === 'Carrots') {
      alert("Your power animal is a Phoenix")
        $("#phoenix").show();
        $("#unicorn").hide();
        $("#centaur").hide();
    }
    else if (result === 'Red' && result2 === 'Meat') {
      alert("Your power animal is a Phoenix")
      $("#phoenix").show();
      $("#unicorn").hide();
      $("#centaur").hide();
    }
    //green results:
    else if (result === 'Green' && result2 === 'Sparkling Water'){
      alert("Your power animal is a Centaur")
      $("#centaur").show();
      $("#unicorn").hide();
      $("#phoenix").hide();
    }
    else if (result === 'Green' && result2 === 'Carrots'){
      alert("Your power animal is a Centaur")
      $("#centaur").show();
      $("#unicorn").hide();
      $("#phoenix").hide();
    }
    else if (result === 'Green' && result2 === 'Meat'){
      alert("Your power animal is a Phoenix")
      $("#phoenix").show();
      $("#unicorn").hide();
      $("#centaur").hide();
    }

    event.preventDefault();
  });

});
