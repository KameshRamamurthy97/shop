var subjectObject = {
    "Vegetable and Fruits": {
      "Vegetable": ["250G", "500G", "1kg"],
      "Meat": ["250G", "500G", "1kg"],
      "Fruits": ["250G", "500G", "1kg"]    
    },
    "Meat": {
      "Fish": ["250G", "500G", "1kg"],
      "Chicken": ["250G", "500G", "1kg"]
    }
    
  }
  function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    var checkBox1 = document.getElementById("myCheck");
    var text1 = document.getElementById("text1");
    if (checkBox.checked == true){
      text.style.display = "block";
    } 
    if (checkBox1.checked == true){
      text1.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }
  window.onload = function() {
    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");
    var chapterSel = document.getElementById("chapter");
    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
      //empty Chapters- and Topics- dropdowns
      chapterSel.length = 1;
      topicSel.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }
    topicSel.onchange = function() {
      //empty Chapters dropdown
      chapterSel.length = 1;
      //display correct values
      var z = subjectObject[subjectSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
      }
    }
  }
  