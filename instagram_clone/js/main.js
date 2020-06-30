const faker = window.faker;

const commentForm = document.querySelector('.comment');
const comments = document.querySelector('.comments');
const searchbarForm = document.querySelector('.navbar-item.searchbar');
const searchbarInput = document.querySelector('#searchbar');

// when comment length >= 1 
const commentInput = document.querySelector('.comment > input');
const postButton = document.querySelector('.comment .post');
commentInput.addEventListener('keyup', () => {
  const commentInputValue = document.querySelector('.comment > input').value;

  commentInputValue.length >= 1
    ? postButton.classList.add('active')
    : postButton.classList.remove('active');

});

// create comments
commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const commentInput = document.querySelector('.comment .text');
  if (commentInput.value.length === 0) {
    alert('댓글을 작성해주세요');
    return;
  }

  const commentTag = document.createElement('div');
  const user = document.createElement('div');
  user.className = "userId";
  user.innerText = faker.internet.userName();

  const content = document.createElement('div');
  content.className = "content";
  content.innerText= commentInput.value;

  commentTag.appendChild(user);
  commentTag.appendChild(content);

  comments.appendChild(commentTag);
  commentInput.value = "";
});

// right fixed aside position handling
const rightFixed = document.querySelector('.main-right');
window.addEventListener('resize', () => {
  const space = Math.floor((window.innerWidth - 895) / 2);
  rightFixed.style.left = `${space + 895 - 293}px`;
  rightFixed.style.right = `${space}px`
});

window.addEventListener('load', () => {
  const space = Math.floor((window.innerWidth - 895) / 2);
  rightFixed.style.left = `${space + 895 - 293}px`;
  rightFixed.style.right = `${space}px`
});

const searchBarIcon = document.querySelector('.navbar-item.searchbar .icon');
const searchBarText = document.querySelector('.navbar-item.searchbar .text');
// searchBar
searchbarInput.addEventListener('focus', () => {
  searchBarIcon.classList.add('focused');
  searchBarText.classList.add('focused');
});

searchbarInput.addEventListener('focusout', () => {
  searchBarIcon.classList.remove('focused');
  searchBarText.classList.remove('focused');
  searchbarInput.value = "";
});

searchbarForm.addEventListener('submit', (event) => {
  event.preventDefault();
  searchbarInput.value = "";
});


const mainStoriesTag = document.querySelector('.main-stories');

const makeStories = () => {
  const thumnail = faker.image.avatar();
  const userName = faker.internet.userName();

  const storyItemTag = document.createElement('div');
  storyItemTag.className = "story-item";

  const storyImageBorderTag = document.createElement('div');
  storyImageBorderTag.className = "story-image-border";

  const stroyImageTag = document.createElement('img');
  stroyImageTag.src = thumnail;

  const storyId = document.createElement('div');
  storyId.className = "story-id";
  storyId.innerText = userName.slice(0, 6);

  storyImageBorderTag.appendChild(stroyImageTag);
  storyItemTag.appendChild(storyImageBorderTag);
  storyItemTag.appendChild(storyId);
  mainStoriesTag.appendChild(storyItemTag);

};


const myRepeat = (func, times) => {
  let i = 1;
  while (i <= times) {
    func();
    i += 1;
  }
}

myRepeat(makeStories, 20);