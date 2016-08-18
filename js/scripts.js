var topPGs = [
/* Index 0 */  ['CP3', 'Clippers'], //that comma is important!
/* Index 1 */  ['Steph', 'Golden State'],
/* Index 2 */  ['Westbrook', 'OKC'],
/* Index 3 */  ['Dame', 'Portland'],
/* Index 4 */  ['Wall', 'Washington']
]
alert([topPGs[1][0]]);
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputText = $("#input-text").val();
    var outputCode = coder(inputText);
    $("#output").text(outputCode);
  });
});
