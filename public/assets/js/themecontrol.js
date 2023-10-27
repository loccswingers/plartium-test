document.addEventListener("DOMContentLoaded", function(event) {
  if (localStorage.getItem('Classic') === 'on') {
    document.body.style.backgroundColor = "#111";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#111");
    document.getElementById("Themes").value = "Classic";
  } else if (localStorage.getItem('Ocean') === 'on') {
    document.body.style.backgroundColor = "#162545";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#162545");
    document.getElementById("Themes").value = "Ocean";
  } else if (localStorage.getItem('Midnight') === 'on') {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#000");
    document.getElementById("Themes").value = "Midnight";
  } else if (localStorage.getItem('Maroon') === 'on') {
    document.body.style.backgroundColor = "#921215";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#921215");
    document.getElementById("Themes").value = "Maroon";
  } else if (localStorage.getItem('Blinding') === 'on') {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#ffffff");
    document.getElementById("Themes").value = "Blinding";
  } else if (localStorage.getItem('Green') === 'on') {
    document.body.style.backgroundColor = "#009933";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#009933");
    document.getElementById("Themes").value = "Green";
  }
});
