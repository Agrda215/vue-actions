var time = 0

function update() {
  time += 0.25
  document.getElementById("bar").style.width = (time * 8.2) + "px"
  if (time > 27) {
    document.getElementById("bar").style.display = "none"
  } else {
    document.getElementById("bar").style.display = "block"
  }
  if (time > 28) {
    document.getElementById("bord").style.display = "none"
  } else {
    document.getElementById("bord").style.display = "block"
  }
  if (time > 36) {
    if (time > 44) {
    document.getElementById("message1").style.display = "none"
    } else {
    document.getElementById("message1").style.display = "block"
    }
  } else {
    document.getElementById("message1").style.display = "none"
  }
  if (time > 50) {
    if (time > 80) {
    document.getElementById("message2").style.display = "none"
    } else {
    document.getElementById("message2").style.display = "block"
    }
  } else {
    document.getElementById("message2").style.display = "none"
  }
  if (time > 96) {
    if (time > 110) {
    document.getElementById("message3").style.display = "none"
    } else {
    document.getElementById("message3").style.display = "block"
    }
  } else {
    document.getElementById("message3").style.display = "none"
  }
}

document.getElementById("logo").onclick = () => {
  if (time > 50) {
    document.getElementById("logoScrool").style.display = "block"
    document.getElementById("logo").style.display = "none"
  }
}

setInterval(update, 960)