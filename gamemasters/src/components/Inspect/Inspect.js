import { useParams } from "react-router-dom";
import AddCommentIcon from '@mui/icons-material/AddComment';
import './Inspect.css';


const Inspect = ({ postData }) => {
  const params = useParams();
  const details = postData.find((detail) => detail.id === params.id);
  console.log(postData);
  return (
    <div className='inspection'>
      <h1>{details.fields.title}</h1>
      <h2>{details.fields.description}</h2>
      <img src={details.fields.img} className="inspimg"/>
      <p className="describe">{details.fields.comment}<br/><br/><em className="author"><strong>{details.fields.author}</strong></em><br/><br/><button className="combtn"><AddCommentIcon /></button></p>
      {/* <button className="combtn"><AddCommentIcon /></button> */}
    </div>
  )
}

export default Inspect;