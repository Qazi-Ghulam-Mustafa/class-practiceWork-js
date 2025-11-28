var text = document.getElementById("text")

var oldText = ""

var seeMore = document.getElementById("seeMore")
var seeLess = document.getElementById("seeLess")

function seeMoreFunc() {
  oldText = text.innerText
  text.innerHTML = text.innerText + `
      Hyderabad
    `
  seeMore.style.display = "none "
  seeLess.style.display = "inline"
}

function seeLessFunc() {
  text.innerText = oldText
  seeMore.style.display="inline"
  seeLess.style.display="none"
}