import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://www.html.am/images/html-codes/links/boracay-white-beach-sunset-300x225.jpg",
            caption: "Beautiful image"
        }
    ]);

    useEffect(() => {
    axios.get("http://localhost:3000/posts")
     .then((res) => {
      setPosts(res.data.posts)
     })
     
    }, [])
    
    return (
        <div className="create-feed">
            {posts.length > 0 ? (
             posts.map((post) => {
                 return (
                    <div key={post._id} className="post-card">
                    <img src={post.image} alt="post"/>
                    <p>{post.caption}</p>
                        </div>
                    );
                })
            ) : (
                <h1>Post not available</h1>
            )}
        </div>
    );
};

export default Feed;