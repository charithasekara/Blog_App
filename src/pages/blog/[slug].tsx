import React from 'react';
import { useRouter } from 'next/router';
import posts from '../../data/posts';
import { Post } from '../../types/post';

const PostPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the post with the matching slug
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;