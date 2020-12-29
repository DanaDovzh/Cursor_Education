import Post from './Post';
import newAuthor from './Author';
import firstPhoto from '../img/Walt_Disney.jpg';
import postFirst from '../img/post_walt.jpg';
import secondPhoto from '../img/mark_zuckerberg.jpg';
import postSecond from '../img/post_mark.jpg';
import thirdPhoto from '../img/joan-rolling.jpg';
import postThird from '../img/post_joan.jpg';

const Walt = new newAuthor("Walt Disney", "@waltDisney", "Some people are worth melting for.", firstPhoto, postFirst);
const Mark = new newAuthor("Mark Zuckerberg", "@finkd", "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough!", secondPhoto,
postSecond);
const Joan = new newAuthor("J.K. Rowling", "@jk_rowling", "Every human life is worth the same, and worth saving.", thirdPhoto, postThird);
function App() {
  return (
    <div className = "wrapper">
      <Post props = {Walt} />
      <Post props = {Mark} />
      <Post props = {Joan} />
    </div>
  );
}

export default App;
