import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import Cards from "./components/Cards/Cards.js";
import Header from "./components/Header/Header.js";
import Logo from './Media/Logo.png';
import Footer from './components/Footer/Footer';
// import Game from './Media/Game.mp4';
// import Header from 'src/components/Header/Header.js';
import Inspect from './components/Inspect/Inspect.js';
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

    <div className="global">
      <Header />
      <img src={Logo} alt="Game Masters Logo" className="logoclass"/>

      <h2>Recent Posts</h2>
      {postData.map((post, idx) => (
          <Cards
            postData={postData}
            key={post.id}
            post={post}
          />
        ))}
      <Footer />

      {/* <Route path="Inspect/:id">
        <Inspect
          postData={postData}
        />
      </Route> */}
    </div>
  );
}

export default App;
