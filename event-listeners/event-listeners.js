// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg',"./imgs/sea.jpg","./imgs/sea2.jpg","./imgs/sea3.jpg","./imgs/mrbean.jpg","./imgs/beach.jpeg"];
var currentIndex = 0;

document.getElementsByTagName("img")[0].addEventListener("click", showNextPicture)


function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
 }
document.getElementsByTagName("img")[0].src=pictures[currentIndex]
  // YOUR TASK: Finish this function!
}

