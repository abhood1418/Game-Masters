import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Comdata = ({ details }) => {
  const commentContent = details.fields["content (from replies)"][0];
  const commentAuthor = details.fields["author (from replies)"][0];
  console.log(details);

  return (
    <div>
      <p>{commentContent}</p>
      <h5>{commentAuthor}</h5>
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