// src/components/UserPosts.js

import React, { useEffect } from "react";
import { getPostsByUser } from "../api";
import "./UserPosts.css";

const UserPosts = ({ currentUser, userPosts }) => {
  useEffect(() => {
    if (!currentUser) {
      setUserPosts([]);
      return;
    }
    getPostsByUser(currentUser.id)
      .then((posts) => {
        setUserPosts(posts);
      })
      .catch((error) => {
        // something something errors
      });
  }, [currentUser]);

  return (
    <div className="user-posts">
      <h2>Posts By {currentUser.username}</h2>
      {userPosts.map(({ id, title, body }) => (
        <div key={id} className="post">
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
