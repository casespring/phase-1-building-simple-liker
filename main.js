// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
mimicServerCall(addEventListener("click", e => {
    console.log(e.target);
    let fillHeart = document.getElementsByTagName('span')
    fillHeart.textContent = FULL_HEART;
    fillHeart.

})).then(data => console.log(data))
.catch(e => {
  
  let getModal = document.getElementById('modal')
  let getErrorP = document.getElementById('modal-message')
  getModal.classList.remove('hidden');
  getErrorP.textContent = e.message;
  setTimeout(() => {

    getModal.classList.add("hidden")
  }, "3000");

})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com/", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
