import React, { useEffect } from 'react';

import Header from '../components/Header';

const Blog = () => {
  useEffect(() => {
    document.title = 'About me'
  });

  const header = { bg: 'post', main: 'my', sub: 'blogs' };

  return (
    <div className="Blog container">
      <div className="row d-flex justify-content-center">
        <Header header={header} />
      </div>
      <div
        style={{
          color: "#fff"
        }}
      >
        No posts yet.
      </div>
    </div>
  );
}

export default Blog;