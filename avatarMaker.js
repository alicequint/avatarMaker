let avatar = [] //array of images for tracking which images are currently displayed

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
  console.log(newElement.class);
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
