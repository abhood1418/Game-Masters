import { useParams } from "react-router-dom";
import { useState } from 'react';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Comment from '../Comment/Comment.js';
import './Inspect.css';


const Inspect = ({ postData }) => {
  const [toggleComment, setToggleComment] = useState(false);
  const params = useParams();
  const details = postData.find((detail) => detail.id === params.id);
  console.log(postData);

  const showComment = (ev) => {
    setToggleComment(!toggleComment);
  }


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
      {toggleComment ? <Comment /> : null}
    </div>
  )
}

export default Inspect;