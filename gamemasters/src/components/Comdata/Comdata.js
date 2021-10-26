import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Comdata.css';


const Comdata = ({ details, commentData }) => {
  // const findId = commentData.fields;
  console.log(details);
  console.log(commentData);
  const detailsId = details.id;
  console.log(detailsId);
  const commentId = commentData[0].fields.Post[0];
  console.log(commentId);
  const showComments = commentData.filter((comment) => commentId === detailsId)
  console.log(showComments);

  return (
    <div className="comments-display">
      {showComments.map((comment) => (
        <section>
          <p>{comment.fields.content}
            <em>{comment.fields.author}</em>
          </p>
          
          </section>
      ))}
    </div>
  )
}

export default Comdata;







// {id: 'recMlv1PpzMlQtMat', fields: {…}, createdTime: '2021-10-24T12:49:31.000Z'}
// createdTime: "2021-10-24T12:49:31.000Z"
// fields:
// author: "PeteTheBeat"
// author (from replies): Array(1)
// 0: "Test Wizard"
// length: 1
// [[Prototype]]: Array(0)
// comment: "There in the darkest woods"
// content (from replies): Array(1)
// 0: "test wizard was here"
// length: 1
// [[Prototype]]: Array(0)
// description: "A secret society of Wildfire"
// img: "https://cdnb.artstation.com/p/assets/images/images/039/070/641/large/janine-maganito-trilf-druid.jpg?1624879081"
// replies: ['recZQwlaUhT0b0h48']
// title: "Wildfire Druids"
// [[Prototype]]: Object
// id: "recMlv1PpzMlQtMat"
// [[Prototype]]: Object



// const comments = commentData.find((comment) => commentData.id === details.id);

// useEffect(() => {
//   const fetchComments = async () => {
//     const resp = await axios.get(API_URL);
//     setCommentData(resp.data.records);
//     console.log(commentData);
//   }
//     fetchComments();
// }, [])

// const comments = commentData.find((comment) => commentData.id === details.id);

// const [commentData, setCommentData] = useState([]);
//   console.log(commentData);