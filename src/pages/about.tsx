import React from 'react';
import Link from 'next/link'; // Import the Link component

const About: React.FC = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi, I'm a passionate developer who loves building things with Next.js and TypeScript. 
        This blog is a place where I share my thoughts, tutorials, and experiences.
      </p>
      <p>
        When I'm not coding, you can find me reading books, exploring new technologies, or enjoying a cup of coffee.
      </p>
      <p>
        Feel free to reach out to me on{' '}
        <Link
          href="https://twitter.com"
          passHref
          target="_blank"
          rel="noopener noreferrer">
          
            Twitter
          
        </Link>{' '}
        or check out my{' '}
        <Link
          href="https://github.com"
          passHref
          target="_blank"
          rel="noopener noreferrer">
          
            GitHub
          
        </Link>.
      </p>
    </div>
  );
};

export default About;