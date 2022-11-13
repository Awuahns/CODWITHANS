function namecheck() {
    var firstname= document.getElementById('firstname').value;
    var Email= document.getElementById('Email').value
    var lastname= document.getElementById('lastname').value;
    if (firstname === '') {
        alert("Error! please fill in your firstname")
     } if(lastname === '') {
        alert("!!Fill in your last name")
    }
    if (Email === '') {
        alert("Please provide your email adress!")
    }
}
  function block() {
      var sammy = document.getElementById('block')
  }

  block()