import './Comdata.css';


const Comdata = ({ details, commentData, postData }) => {

  const detailsId = details.id;
  
  const showComments = commentData.filter((comment) => comment.fields.Post[0] === detailsId)


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