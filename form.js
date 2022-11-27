function openForm(String) {
  return (String === 'open-button' ? document.getElementById("myForm").style.display = "block" : document.getElementById("bib").style.display = "block");
}

function closeForm(String) {
  return (String === 'close-button' ? document.getElementById("myForm").style.display = "none" : document.getElementById("bib").style.display = "none");
}

