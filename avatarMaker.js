let avatar = [] //array of images for tracking which images are currently displayed

// let avatarImages = [[]] //TODO: surely there is an easy way to populate this, right?


//if the clothing* selection is visible, change out of it.
//if the clothing* selection is not visible, change into it.
function toggleVisibility(id){
  let element = document.getElementById(id)
  if( avatar.includes(element) ){
    changeOutOf(element)
  } else {
    changeInto(element)
  }
}

//makes newElement visible, and makes invisible all elements that share
//the same "category" tag.
function changeInto(newElement){
  newElement.style.visibility = 'visible'
  avatar.forEach((oldElement, i) => {
    if(sameCategory(oldElement,newElement)) changeOutOf(oldElement)
    })
  avatar.push(newElement)
}

function changeOutOf(oldElement){
  avatar.splice(avatar.indexOf(oldElement), 1)
  oldElement.style.visibility = 'hidden'
}

//a, b: img elements representing style-options for the avatar
//this works because the id of every mouth-image starts with the word "mouth", etc
function sameCategory(a, b){
  return a.id.substring(0,3) == b.id.substring(0,3)
}

// //randomly selects and changes into one style from each available category
// //TODO: avatarImages is not populated yet
// function randomizeAvatar() {
//   avatarImages.forEach((category, i) => {
//     let newElement = category[Math.floor(Math.random() * 5)]
//     changeInto(newElement)
//   });
// }
//
// function createDownloadableImage() {
//   console.log(avatar);
//   // TODO: lay all the images in avatar over each other, creating one image.
//   return null;
// }
