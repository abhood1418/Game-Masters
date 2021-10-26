import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import './Comment.css';
import { Redirect } from 'react-router-dom';

const API_URL = `https://api.airtable.com/v0/appwDf75VNBRVmPrC/Comment?api_key=${process.env.REACT_APP_API_KEY}`;

const Comment = ({ neededId, toggleComms, setToggleComms }) => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [refresh, setRefresh] = useState(false);

  const handleCommentRequest = async (ev) => {
    ev.preventDefault()

    const newComment = {
    
      records: [
        {
          fields: {
            content,
            author,
            Post: [
              `${neededId}`
            ]
          }
        }
      ]
    }
    await axios.post(API_URL, newComment)
    setRefresh(true);
    setToggleComms(!toggleComms);
  }
  if (refresh) {
    return <Redirect to={`/inspect/${neededId}`}/>
  }



  return (
    <form className="comment-form" onSubmit={handleCommentRequest}>
        <label htmlFor="comment">Comment: </label>
        <textarea type='text' id="comment" placeholder="comment..." onChange={(ev) => setContent(ev.target.value)}></textarea>
        <label htmlFor="user">Username: </label>
        <input className="inputs" type="text" id="user" placeholder="username" onChange={(ev) => setAuthor(ev.target.value)}></input>
        <Button variant="contained" type="submit" id="submit-comment">Submit</Button>
    </form> 
  )
}

export default Comment;