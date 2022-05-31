import logo from "./logo.svg";
import "./App.css";
import api from "./api/posts";
import { useEffect, useState } from "react";
import ListItem from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        if(response&&response.data){
          setPosts(response.data);
        }
      } catch (err) {
        if (err.response) {
          //Not in the 200 response range
          console.log(err.response.status);
        } else {
          console.log(`Error:${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  return (
    <ul>
      {posts.map(({ name,id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}

export default App;
