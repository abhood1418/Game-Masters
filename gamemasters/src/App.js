import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
// import Header from 'src/components/Header/Header.js';
// import Details from './components/Details/Details.js';
// import Footer from 'src/components/Footer/Footer.js';
// import Comment from 'src/components/Comment/Comment.js';
// import Post from 'src/components/Post/Post.js';
// import Resources from 'src/components/Resources/Resources.js';

//Post GET URL
const API_URL = "https://api.airtable.com/v0/appwDf75VNBRVmPrC/Post?api_key=keyTC7ZYPD0132E0A";


function App() {

  //Data from Airtable
  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await axios.get(API_URL);
      setPostData(resp.data.records);
      console.log(postData)
    }
    
    fetchPosts();
  }, [])
  //Data Handling 
  const [postData, setPostData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  
  //Menu & Data Toggles
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleFetch, setToggleFetch] = useState(true);



  return (
    <div>
      <h2>Post Test</h2>
        {postData.map((post, idx) => (
          <Link key={idx} to={`/`}>
            <p>{post.fields.title}</p>
          </Link>
        ))}
    </div>
  );
}

export default App;
