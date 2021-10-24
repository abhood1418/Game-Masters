import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Post = () => {
  return (
    <div className="newpostdiv">
      <form className="newpost">
        <h1>Create A Post</h1>
        <label htmlFor="title">Post Title: </label>
        <input type="text" id="title" placeholder="title"></input>
        <label htmlFor="tagline">Tagline: </label>
        <input type="text" id="tagline" placeholder="tagline"></input>
        <label htmlFor="image">Image URL: </label>
        <input type="text" id="image" placeholder="image url"></input>
        <label htmlFor="content">Content: </label>
        <textarea type='text' id="content" placeholder="content..."></textarea>
        <label htmlFor="author">Author: </label>
        <input type="text" id="author" placeholder="author"></input>
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  )
}

export default Post;