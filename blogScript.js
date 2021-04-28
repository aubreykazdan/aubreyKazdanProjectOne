// BLOG.HTML------------------------------------

// (3) Create a method to take the values in the Comment Section and turn them into two new <p> tags

// reusable function for determining current month
const day = function(date){
    switch (parseInt(date)) {
      case 0:
        return "Sunday"
      case 1:
        return "Monday"
      case 2:
        return "Tuesday"
      case 3:
        return "Wednesday"
      case 4:
        return "Thursday"
      case 5:
        return "Friday"
      case 6:
        return "Saturday"
      default:
        return "";
    }
  }

// reusable function for determining current day
const month = function(date){
    switch (parseInt(date)) {
      case 0:
        return "January"
      case 1:
        return "February"
      case 2:
        return "March"
      case 3:
        return "April"
      case 4:
        return "May"
      case 5:
        return "June"
      case 6:
        return "July"
      case 7:
        return "August"
      case 8:
        return "September"
      case 9:
        return "October"
      case 10:
        return "Novemeber"
      case 11:
        return "December"
      default:
        return "";
    }
  }

// putting date into a function for later use
const date = new Date();

// select the form and save it within a variable
const formElement = document.getElementById('commentForm');

// add an event listener to the form on submission
formElement.addEventListener('submit', function(event) {
    // stop the submit event on the from from refreshing the page
    event.preventDefault();



    // save the user's inputted name, email and comment
    const nameInput = document.getElementById('username').value;
    const emailInput = document.getElementById('email').value;
    const commentInput = document.getElementById('comment').value;
    // save the container element to append the inputs to
    const commentContainer = document.querySelector('.commentTextContainer')
    // console.log(nameInput);
    // console.log(emailInput);
    // console.log(commentInput);


    // create a new <div> element
        // create a new <img> element with placeholder img
        // create a new <p> element with the current date & name
        // create a new <p> element with comment input values

    // create parent comment <div> with a class
    const newComment = document.createElement('div');
    newComment.classList.add("commentSectionBottom");

    // adding <img> element with a class
    const newCommentImage = document.createElement('img');
    newCommentImage.classList.add("commentImageTwo");
    newCommentImage.setAttribute('src', './assets/comment-1.jpg')

    // adding two <p> elements with date, name and comments
    // create first <p> element with date and name
    const newCommentDate = document.createElement('p');
    const newCommentDateContent = `${day(date.getDay())} ${month(date.getMonth())} ${date.getDate()}, ${date.getFullYear()} by ${nameInput}`;
    // place date and name elements into first <p> element
    newCommentDate.textContent = newCommentDateContent;

    // create second <p> element with date and name
    const newCommentContent = document.createElement('p');
    // adding textarea input to second <p> element
    const newCommentContentContent = `${commentInput}`;
    // place comment content into second <p> element
    newCommentContent.textContent = newCommentContentContent;

    // adding the newly created elements to the new <div>
    newComment.appendChild(newCommentImage);
    newComment.appendChild(newCommentDate);
    newComment.appendChild(newCommentContent);

    
    // allows the above elements to go into larger div container
    commentContainer.appendChild(newComment);
})