var gallery = ["https://www.shutterstock.com/image-photo/1-dollar-note-isolated-on-600nw-2555540875.jpg",
    "https://media.gettyimages.com/id/157308559/photo/money-pile-100-dollar-bills.jpg?s=612x612&w=gi&k=20&c=0y_HGv7LildxZWUH9VsfwdfWyi0f0gjRTGPz9MLFg90=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnl-oSLNJ1wtV3-Dez3nVOufulo1sSP1LlvA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7UKjyhi1H1DulMCRIC5asTAKmsrdlFzbJQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfnQz_x9pMgbDMvFh2U_LLBxT--3a0MuCEWA&s"
]

var imageShow = document.getElementById("imageShow")
var nextBtn = document.getElementById("nextBtn")
var previousBtn = document.getElementById("previousBtn")


var currentIndex = 0

function nextImage() {
    currentIndex += 1
    imageShow.src = gallery[currentIndex]
    if (currentIndex == 4) {
        nextBtn.style.display = "none"
    }
    if (currentIndex > 0) {
        previousBtn.style.display = "inline"
    }
}

function previousImage() {
    currentIndex -= 1
    imageShow.src = gallery[currentIndex]
    if (currentIndex < gallery.length) {
        nextBtn.style.display = "inline"
    }
    if (currentIndex == 0) {
        previousBtn.style.display = "none"
    }
}