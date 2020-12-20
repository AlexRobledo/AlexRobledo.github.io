function HideContainers() {
  $('.Super-container').hide(400);
  //Colorear los elementos inactivos
  var elementosLaterales = document.getElementsByClassName('Tabs');
  var elementosSuperiores = document.getElementsByClassName('Mobile-Tabs');
  for(let i = 0; i < elementosLaterales.length; i++) {
    elementosLaterales[i].style.color = "rgba(255, 255, 255, 0.5)";
    elementosSuperiores[i].style.color = "rgba(255, 255, 255, 0.5)";
  }
}

function ShowContainer(containerName, elemento){
  var container = document.getElementsByClassName(containerName.replace('.', ''))[0];
  if(container.style.display != "none") //Si se está mostrando actualmente
    return;
  HideContainers();
  $(containerName).show(400);
  elemento.style.color = "white";
}
