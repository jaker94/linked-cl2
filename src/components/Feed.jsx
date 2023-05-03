import { useEffect, useState } from "react";
import Input from "./Input.jsx";
import { useRecoilState } from "recoil";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom.js";

function Feed() {
  const [realTimePosts, setRealTimePosts] = useState([]);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:3000/api/posts/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const responseData = await response.json();
      setRealTimePosts(responseData);
      setHandlePost(false);
      setUseSSRPosts(false);
    };
    fetchPosts();
  }, [handlePost]);


  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input />
      {/* Posts */}
      {realTimePosts.map((post) => (
        <div key={post._id}>
        <img src={post.photoUrl} alt="" />
        <div>{post.input}</div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
