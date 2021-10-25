import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import Cards from "./components/Cards/Cards.js";
import Header from "./components/Header/Header.js";
import Logo from './Media/Logo.png';
import Logo2 from './Media/Logo2.png';
import Footer from './components/Footer/Footer';
// import Game from './Media/Game.mp4';
import Inspect from './components/Inspect/Inspect.js';
// import Comment from 'src/components/Comment/Comment.js';
import Post from './components/Post/Post.js';
import Resources from './components/Resources/Resources.js';


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
  }, [toggleFetch])
  




  return (

    <div className="global">
      <Route path='/' exact>
      <Header />
      <img src={Logo2} alt="Game Masters Logo" className="logoclass"/>

      <h2>Recent Posts</h2>
        {postData.map((post, idx) => (
          <Cards
            postData={postData}
            key={post.id}
            post={post}
          />
        ))}
      
      <Footer />
      
      </Route>
      
      <Route path="/Inspect/:id">
        <Header />
        <Inspect
        postData={postData}
        />
        <Footer />
      </Route>

      <Route path="/Post">
        <Header />
        <Post
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
        <Footer />
      </Route>

      <Route path="/Resources">
        <Header />
        <Resources />
        <Footer />
      </Route>

      <Route path="/All">
        <Header />
        <h1>All Posts</h1>
        {postData.map((post, idx) => (
          <Cards
            postData={postData}
            key={post.id}
            post={post}
          />
        ))}
        <Footer />
      </Route>
    </div>
  );
}

export default App;
