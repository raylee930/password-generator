function copy() {
  var copyText = document.getElementById("result");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = "已複製\u2705";
}

function mouseleave() {
  var tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = "複製";
}
