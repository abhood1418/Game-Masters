import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Cards from "./components/Cards/Cards.js";
import Header from "./components/Header/Header.js";
// import Logo from './Media/Logo.png'; -- Alternate Media
import Logo2 from './Media/Logo2.png';
import Footer from './components/Footer/Footer';
// import Game from './Media/Game.mp4'; -- Alternate Media
import Inspect from './components/Inspect/Inspect.js';
import Post from './components/Post/Post.js';
import Resources from './components/Resources/Resources.js';


//Post GET URL
const API_URL = `https://api.airtable.com/v0/appwDf75VNBRVmPrC/Post?api_key=${process.env.REACT_APP_API_KEY}`;

const API2_URL = `https://api.airtable.com/v0/appwDf75VNBRVmPrC/Comment?api_key=${process.env.REACT_APP_API_KEY}`;


function App() {
 //Data Handling 
  const [postData, setPostData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  
    //Menu & Data Toggles
  // const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleFetch, setToggleFetch] = useState(true);
  const [toggleComms, setToggleComms] = useState(true);
  
  //Data from Airtable
  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await axios.get(API_URL);
      setPostData(resp.data.records);
    }
    
    fetchPosts();
  }, [toggleFetch])
  
  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(API2_URL);
      setCommentData(response.data.records);
      console.log(commentData);
    }
    fetchComments();
  }, [toggleComms]);



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
          commentData={commentData}
          toggleComms={toggleComms}
          setToggleComms={setToggleComms}
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
