import React from 'react';
import Link from 'next/link'; // Import the Link component

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <p>This is the home page of our simple blog app.</p>
      <ul>
        <li>
          <Link href="/about">
            Learn more about me
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Read my blog posts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;