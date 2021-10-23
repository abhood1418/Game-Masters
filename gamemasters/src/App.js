import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import Cards from "./components/Cards/Cards.js";
// import Header from 'src/components/Header/Header.js';
// import Details from './components/Details/Details.js';
// import Footer from 'src/components/Footer/Footer.js';
// import Comment from 'src/components/Comment/Comment.js';
// import Post from 'src/components/Post/Post.js';
// import Resources from 'src/components/Resources/Resources.js';


//Post GET URL
const API_URL = "https://api.airtable.com/v0/appwDf75VNBRVmPrC/Post?api_key=keyTC7ZYPD0132E0A";


function App() {
 //Data Handling 
  const [postData, setPostData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  
    //Menu & Data Toggles
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleFetch, setToggleFetch] = useState(true);
  
  //Data from Airtable
  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await axios.get(API_URL);
      setPostData(resp.data.records);
      
    }
    
    fetchPosts();
  }, [])
  




  return (
    <div className="cardstyles">
      <h2>Recent Posts</h2>
        {postData.map((post, idx) => (
          <Cards
            postData={postData}
            key={post.id}
            post={post}
          />
        ))}
    </div>
  );
}

export default App;
