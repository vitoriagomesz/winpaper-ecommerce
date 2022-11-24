function favoritar(element) {
  let img = element.querySelector('img');
  let img_name = img.src.split("/").pop();
 
  if (img_name === "favoritaramarelo.svg") {
    img.src = "wp-icones/favoritaramarelo2.svg";
  }
  else if (img_name === "favoritaramarelo2.svg") {
    img.src = "wp-icones/favoritaramarelo.svg"
  }

}