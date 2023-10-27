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

document.getElementById("Themes").onchange = function() {
  if (this.value === "Classic") {
    localStorage.setItem('Classic', 'on');
    localStorage.setItem('Ocean', 'off');
    localStorage.setItem('Midnight', 'off');
    localStorage.setItem('Maroon', 'off');
    localStorage.setItem('Blinding', 'off');
    localStorage.setItem('Green', 'off');
    document.body.style.backgroundColor = "#111";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#111");
  } else if (this.value === "Ocean") {
    localStorage.setItem('Ocean', 'on');
    localStorage.setItem('Classic', 'off');
    localStorage.setItem('Midnight', 'off');
    localStorage.setItem('Maroon', 'off');
    localStorage.setItem('Blinding', 'off');
    localStorage.setItem('Green', 'off');
    document.body.style.backgroundColor = "#162545";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#162545");
  } else if (this.value === "Midnight") {
    localStorage.setItem('Midnight', 'on');
    localStorage.setItem('Classic', 'off');
    localStorage.setItem('Ocean', 'off');
    localStorage.setItem('Maroon', 'off');
    localStorage.setItem('Blinding', 'off');
    localStorage.setItem('Green', 'off');
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#000");
  } else if (this.value === "Maroon") {
    localStorage.setItem('Midnight', 'off');
    localStorage.setItem('Classic', 'off');
    localStorage.setItem('Ocean', 'off');
    localStorage.setItem('Maroon', 'on');
    localStorage.setItem('Blinding', 'off');
    localStorage.setItem('Green', 'off');
    document.body.style.backgroundColor = "#921215";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#921215");
  } else if (this.value === "Blinding") {
    localStorage.setItem('Midnight', 'off');
    localStorage.setItem('Classic', 'off');
    localStorage.setItem('Ocean', 'off');
    localStorage.setItem('Maroon', 'off');
    localStorage.setItem('Blinding', 'on');
    localStorage.setItem('Green', 'off');
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#ffffff");
  } else if (this.value === "Green") {
    localStorage.setItem('Midnight', 'off');
    localStorage.setItem('Classic', 'off');
    localStorage.setItem('Ocean', 'off');
    localStorage.setItem('Maroon', 'off');
    localStorage.setItem('Blinding', 'off');
    localStorage.setItem('Green', 'on');
    document.body.style.backgroundColor = "#009933";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#009933");
  }
};
