import { useParams } from "react-router-dom";


const Inspect = ({ postData }) => {
  const params = useParams();
  const details = postData.find((detail) => detail.id === params.id);
  console.log(postData);
  return (
    <div>
      <h1>{details.fields.title}</h1>
    </div>
  )
}

export default Inspect;