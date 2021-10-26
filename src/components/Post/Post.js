// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import './Post.css';


const API_URL = "https://api.airtable.com/v0/appwDf75VNBRVmPrC/Post?api_key=keyTC7ZYPD0132E0A";

const Post = ({setToggleFetch, toggleFetch}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');
  const [redirectHome, setRedirectHome] = useState(false);

  const handlePostRequest = async (ev) => {
    ev.preventDefault();
    
    const newPost = {
      records: [
        {
          fields: {
            title,
            description,
            comment,
            author,
            img,
          }
        }
      ]
    }
    await axios.post(API_URL, newPost);

    setRedirectHome(true);
    setToggleFetch(!toggleFetch);
  }
  if (redirectHome) {
    return <Redirect to="/"/>
  }


  return (
    <div className="newpostdiv">
      <form className="newpost" onSubmit={handlePostRequest}>
        <h1 id="headerhead">Create A Post</h1>
        <label htmlFor="title">Post Title: </label>
        <input className="inputs" type="text" id="title" placeholder="title" onChange={(ev) => setTitle(ev.target.value)}></input>
        <label htmlFor="tagline">Tagline: </label>
        <input className="inputs" type="text" id="tagline" placeholder="tagline" onChange={(ev) => setDescription(ev.target.value)}></input>
        <label htmlFor="image">Image URL: </label>
        <input className="inputs" type="text" id="image" placeholder="image url" onChange={(ev) => setImg(ev.target.value)}></input>
        <label htmlFor="content">Content: </label>
        <textarea type='text' id="content" placeholder="content..." onChange={(ev) => setComment(ev.target.value)}></textarea>
        <label htmlFor="author">Author: </label>
        <input className="inputs" type="text" id="author" placeholder="author" onChange={(ev) => setAuthor(ev.target.value)}></input>
        <Button variant="contained" type="submit" id="submitpost">Submit</Button>
      </form>
    </div>
  )
}

export default Post;