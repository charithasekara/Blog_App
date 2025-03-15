import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-content">
        <h1 className="title">Welcome to My Blog</h1>
        <p className="subtitle">
          Explore my thoughts, experiences, and insights on web development,
          technology, and more.
        </p>

        {/* Action Buttons */}
        <div className="buttons">
          <Link href="/about" className="button primary-button">
            Learn More About Me
          </Link>
          <Link href="/blog" className="button secondary-button">
            Read My Blog Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;