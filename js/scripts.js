$(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var stringInput = $("input#inputSent").val();
    var array1 = stringInput.split("");
    var array2 = [];
    array1.forEach(function(x){
      if(x === "a" || x === "e" || x === "i" || x === "o" || x === "u"){
        //debugger;
        array2.push("-")
      } else if (x === " ") {
        array2.push(" ")
      } else {
        array2.push(x);
      };
    });
    var array3 = array2.join('');
    $("#answer").text(array3);
  });
});
