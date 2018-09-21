
import React from 'react';
import Router from 'next/router';

function onClickHandler(href) {
  return e => {
    e.preventDefault();
    Router.push(href);
  };
}

const Link = ({ children, href }) => (
  <a href="#" onClick={onClickHandler(href)}>
    {children}
    <style jsx>{`
      a:hover {
        text-decoration: none;
      },
      a:focus {
          outline: none;
      }
    `}</style>
  </a>
);

export default Link;
