function password(){
    var x = document.getElementById("password")
    var y = document.getElementById("hide1")
    var z = document.getElementById("hide2")

    if (x.type ==="password"){
      x.type = "text";
      y.style.display = "block";
      z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";  
    }
}

function password1(){
  var a = document.getElementById("password1")
  var b = document.getElementById("hide_1")
  var c = document.getElementById("hide_2")

  if (a.type === "password"){
    a.type = "text";
    b.style.display = "block";
    c.style.display = "none";
  }

  else{
    a.type = "password";
    b.style.display = "none";
    c.style.display = "block";
  }
}

