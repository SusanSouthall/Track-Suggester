$(document).ready(function() {
  $("#survey").submit(function(event) {
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    var question6 = $("input:radio[name=question6]:checked").val();
    var question7 = $("input:radio[name=question7]:checked").val();
    var question8 = $("input:radio[name=question8]:checked").val();
    var question9 = $("input:radio[name=question9]:checked").val();
    var question10 = $("input:radio[name=question10]:checked").val();
    var question11 = $("input:radio[name=question11]:checked").val();
    var question12 = $("input:radio[name=question12]:checked").val();

    var a=0;
    var b=0;
    var c=0;

    var answers = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12];

    for (var i=0; i<answers.length; i++) {
      if (answers[i] === "a") {
        a+=1;
      }else if (answers[i] === "b") {
        b+=1;
      }else {
        c+=1;
      }
    }

    function result() {
      var answer;
      if (a > b && a > c) {
        answer = "Java and Android sounds like the best track for you!";
      }else if (b > a && b > c) {
        answer = "Ruby and Rails sounds like the best track for you!"
      }else if (c > a && c > b) {
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
