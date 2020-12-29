import {getRandomNumber, createIdGenerator} from './funcions';

const starId = createIdGenerator(1);

class newAuthor {
    constructor (name, nickname, content, photo, imageContent) {
      this.name = name;
      this.nickname = nickname;
      this.photo = photo;
      this.content = content;
      this.imageContent = imageContent;
      this.date = new Date().toLocaleDateString();
      this.likes = getRandomNumber(3000, 9000);
      this.comments = getRandomNumber(100, 1000);;
      this.share = getRandomNumber(30, 900);;
      this.verifiedAccount = this.getCheckAccount;
      this.id = starId.next().value;
    }
  
    get getCheckAccount () {
      return (this.likes > 5000);
    }

    addLike(like = 1) {
      this.likes += like;
    }
  };

  export default newAuthor;