const getRandomNumber = (min = 1, max = 100) =>  Math.floor(Math.random()* (max - min) + min);
function* createIdGenerator(start) {
    let result = start;
    while (true) yield result++;
  };

function add(actionLike) {
    this.likes += (actionLike ? -1 : 1);
};

const likedPost = (person) => { 
    const whosPost = document.getElementById(person.id);
    const liked = whosPost.querySelector(".post__footer--likes");
    add.call(person, liked.classList.contains("liked"));
    liked.classList.toggle("unlike");
    liked.classList.toggle("liked");
    liked.innerHTML = person.likes;    
};
export {getRandomNumber, createIdGenerator, likedPost}