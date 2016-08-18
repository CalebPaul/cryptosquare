function coder(input) {
  var codeArray = input.toLowerCase().replace(/[^a-z0-9]/g, "").split("");
  var row = Math.ceil(Math.sqrt(codeArray.length));
  var col = Math.floor(Math.sqrt(codeArray.length));
  var code = "";
  for (var i = 0; i < col; i++) {
    for (var j = 0; j < row; j++) {
      if(j === 3) {
        code += " ";
      }
      if(((j*col) + i) < codeArray.length) {
        code += codeArray[(j*col) + i];
      }
      else {
        console.log(codeArray[j*col + i]);
      }
    }
  }
  return code;
}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputText = $("#input-text").val();
    var outputCode = coder(inputText);
    $("#output").text(outputCode);
  });
});
