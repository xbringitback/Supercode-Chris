let pic = document.querySelector("#gallery");

pic.innerHTML = "<figure><img src='./img/img.jpg' width='300'><figcaption>pic1</figcaption><figure>";
pic.innerHTML += "<figure><img src='./img/img.jpg' width='300'><figcaption>pic2</figcaption><figure>";
pic.innerHTML += "<figure><img src='./img/img.jpg' width='300'><figcaption>pic3</figcaption><figure>";

gallery.style.display = "flex"
gallery.style.justifyContent = "center";
gallery.style.marginTop = "30rem";