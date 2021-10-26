import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Comdata.css';


const Comdata = ({ details, commentData, postData }) => {

  const detailsId = details.id;
  console.log(detailsId);
  
  const commentId = commentData[0].fields.Post[0];
  console.log(commentId);
  
  console.log(commentData);


  const showComments = commentData.filter((comment) => comment.fields.Post[0] === detailsId)
  console.log(showComments);


  return (
    <div className="comments-display">
        
      <section id="comdata-section">
        {showComments.map((comment, idx) => (
          
          <p id="comment-content" key={idx}>{comment.fields.content}
            <em id="comment-author" key={idx}><strong>- {comment.fields.author}</strong></em>
          </p>
        ))
        }
      </section>
          
    </div>
  )
}

export default Comdata;