$(document).ready(function() {
  $("#survey").submit(function(event) {
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    var question6 = $("input:radio[name=question6]:checked").val();

    var java=0;
    var ruby=0;
    var css=0;

    var answers = [question1, question2, question3, question4, question5, question6];

    for (var i=0; i<answers.length; i++) {
      if (answers[i] === "java") {
        java+=1;
      }else if (answers[i] === "ruby") {
        ruby+=1;
      }else {
        css+=1;
      }
    }

    function result() {
      var answer;
      if (java > ruby && java > css) {
        answer = "Java and Android sounds like the best track for you!";
      }else if (ruby > java && ruby > css) {
        answer = "Ruby and Rails sounds like the best track for you!"
      }else if (css > java && css > ruby) {
        answer = "CSS and React sounds like the best track for you!";
      }else {
        answer = "Sounds like you have an interest in several tracks.  Choose any one of the tracks and spend some free time studying one of the other languages.";
      }
      return answer;
    }

    var answer = result();
    $(".track").text(answer);
    $(".panel").show();

    event.preventDefault();
  });
});
