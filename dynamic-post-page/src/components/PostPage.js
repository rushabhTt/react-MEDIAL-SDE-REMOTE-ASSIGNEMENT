// File: components/PostPage.js
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { generateOGImage } from "../utils/ogImageGenerator";

const PostPage = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [ogImageUrl, setOgImageUrl] = useState("");

  useEffect(() => {
    if (post.title || post.content) {
      generateOGImage(post).then(setOgImageUrl);
    }
  }, [post]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setPost((prev) => ({ ...prev, image: file }));
  };

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Create a Post</h1>
      <div className="mb-4">
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleInputChange}
          placeholder="Post Title"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <textarea
          name="content"
          value={post.content}
          onChange={handleInputChange}
          placeholder="Post Content"
          className="w-full p-2 border rounded"
          rows="4"
        ></textarea>
      </div>
      <div className="mb-4">
        <input
          type="file"
          onChange={handleImageUpload}
          accept="image/*"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="mb-2">{post.content}</p>
        {post.image && (
          <img
            src={URL.createObjectURL(post.image)}
            alt="Uploaded"
            className="max-w-full h-auto"
          />
        )}
      </div>
      {ogImageUrl && (
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Generated OG Image:</h3>
          <img src={ogImageUrl} alt="OG Image" className="max-w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export default PostPage;
