import React from 'react';
import posts from '../../data/posts';
import { Post } from '../../types/post';

const Blog: React.FC = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;