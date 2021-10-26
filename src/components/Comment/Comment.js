import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import './Comment.css';

const API_URL = `https://api.airtable.com/v0/appwDf75VNBRVmPrC/Comment?api_key=${process.env.REACT_APP_API_KEY}`;

const Comment = ({ toggleComment, setToggleComment, params, neededId }) => {
  const [commentData, setCommentData] = useState([]);
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  // const fetchComments = async () => {
  //   const resp = await axios.get(API_URL);
  //   setCommentData(resp.data.records);
  //   console.log(commentData);
  // }

  const handleCommentRequest = async (ev) => {
    ev.preventDefault()

    const newComment = {
    
      records: [
        {
          fields: {
            content,
            author,
            Post: [
            `${ neededId }`
            ]
          }
        }
      ]
    }
    await axios.post(API_URL, newComment)
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