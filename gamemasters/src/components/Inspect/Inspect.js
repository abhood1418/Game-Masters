import { useParams } from "react-router-dom";


const Inspect = ({ postData }) => {
  const params = useParams();
  const details = postData.find((detail) => detail.id === params.id);
  console.log(postData);
  return (
    <div className='inspection'>
      <h1>{details.fields.title}</h1>
      <h2>{details.fields.description}</h2>
      <img src={details.fields.img}/>
      <p>{details.fields.comment}</p>
      <em>{details.fields.author}</em>
    </div>
  )
}

export default Inspect;