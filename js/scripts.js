//back-end

//front-end

$(document).ready(function() {
  $("form").submit(function(event) {


    var result = $("input:radio[name=radiocolor]:checked").val();
    var result2 = $("input:radio[name=radiofood]:checked").val();
    //purple results
    if (result === 'Purple' && result2 === 'Sparkling Water'){
      alert("Your power animal is a Unicorn!")
    }
    else if (result === 'Purple' && result2 === 'Carrots'){
      alert("Your power animal is a Unicorn")
    }
    else if (result === 'Purple' && result2 === 'Meat'){
      alert("Your power animal is a Centaur")
    }
    //red results:
    if (result === 'Red' && result2 === 'Sparkling Water') {
      alert("Your power animal is a Unicorn.")
    }
    else if (result === 'Red' && result2 === 'Carrots') {
      alert("Your power animal is a Phoenix")
    }
    else if (result === 'Red' && result2 === 'Meat') {
      alert("Your power animal is a Phoenix")
    }
    //green results:
    if (result === 'Green' && result2 === 'Sparkling Water'){
      alert("Your power animal is a Centaur")
    }
    else if (result === 'Green' && result2 === 'Carrots'){
      alert("Your power animal is a Centaur")
    }
    else if (result === 'Green' && result2 === 'Meat'){
      alert("Your power animal is a Phoenix")
    }

    event.preventDefault();
  });

});
