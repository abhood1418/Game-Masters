import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import './Comment.css';

const Comment = ({ toggleComment, setToggleComment }) => {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");



  return (
    <form className="comment-form">
        <label htmlFor="comment">Comment: </label>
        <textarea type='text' id="comment" placeholder="comment..." onChange={(ev) => setComment(ev.target.value)}></textarea>
        <label htmlFor="user">Username: </label>
        <input className="inputs" type="text" id="user" placeholder="username" onChange={(ev) => setUser(ev.target.value)}></input>
        <Button variant="contained" type="submit" id="submit-comment">Submit</Button>
    </form> 
  )
}

export default Comment;