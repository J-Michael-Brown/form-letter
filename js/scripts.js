$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var personNameInput = $("input#person-name").val();
    var senderNameInput = $("input#sender-name").val();

    $(".person").text(personNameInput);
    $(".sender").text(senderNameInput);

    $("#letter").show();

    event.preventDefault();
  });
});
