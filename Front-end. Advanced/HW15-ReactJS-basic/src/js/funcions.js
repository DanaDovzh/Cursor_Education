const getRandomNumber = (min = 1, max = 100) =>  Math.floor(Math.random()* (max - min) + min);
function* createIdGenerator(start) {
    let result = start;
    while (true) yield result++;
  };

const likedPost = (person) => { 
    const whosPost = document.getElementById(person.id);
    const liked = whosPost.querySelector(".post__footer--likes");
    liked.classList.toggle("unlike");
    liked.classList.toggle("liked");
    person.addLike(liked.classList.contains("liked") ? 1 : -1);
    liked.innerHTML = person.showLikes();  
};
export {getRandomNumber, createIdGenerator, likedPost}