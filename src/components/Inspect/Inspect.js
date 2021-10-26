import { useParams } from "react-router-dom";
import { useState } from 'react';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Comment from '../Comment/Comment.js';
import Comdata from '../Comdata/Comdata';
import './Inspect.css';


const Inspect = ({ postData, commentData, toggleComms, setToggleComms }) => {
  const [toggleComment, setToggleComment] = useState(false);
  const params = useParams();
  const details = postData.find((detail) => detail.id === params.id);
  const neededId = params.id;

  const showComment = (ev) => {
    setToggleComment(!toggleComment);
  }

  console.log(postData);
  
  return (
    <div className='inspection'>
      <h1>{details.fields.title}</h1>
      <h2>{details.fields.description}</h2>
      <img src={details.fields.img} className="inspimg"/>
      <p className="describe">
        {details.fields.comment}
        <br />
        <br />
        <em className="author">
          <strong>{details.fields.author}</strong>
        </em>
        <br />
        <br />
        <button className="combtn" onClick={showComment}>
          <AddCommentIcon />
        </button>
      </p>
      {toggleComment ? <Comment neededId={neededId} toggleComms={toggleComms} setToggleComms={setToggleComms}/> : null}
      <section id="comment-section">
        <Comdata
          details={details}
          commentData={commentData}
          postData={postData}
          />
      </section>
    </div>
  )
}

export default Inspect;