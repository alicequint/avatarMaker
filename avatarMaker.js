let defaultColor = "#A9A9A9" //dark grey

let avatar = [] //array of images. tracks which images are currently displayed
//to start with defaultBody, defaultFace

//called when user clicks on a button for a clothing-item
//id: id of the image corresponding to the buttom they clicked.
function toggleVisibility(id){
  // console.log(avatar);
  let element = document.getElementById(id)
  // console.log(element);
  if( avatar.includes(element) ){
    changeOutOf(element)
  } else {
    changeInto(element)
  }
}

function changeInto(newElement){
  newElement.style.visibility = 'visible'
  avatar.forEach((oldElement, i) => {
    if(oldElement.category == newElement.category) changeOutOf(oldElement)
    })
  avatar.push(newElement)
}

function changeOutOf(oldElement){
  avatar.splice(avatar.indexOf(oldElement), 1)
  oldElement.style.visibility = 'hidden'
}
