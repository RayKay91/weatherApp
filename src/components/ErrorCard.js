import React from 'react';

function ErrorCard({ location }) {
  return (
    <div className="row">
      <div className="card z-depth-3 col l8 offset-l2 red lighten-2 white-text">
        <div className="card-content">
          <span className="card-title">
            Oops... Looks like something went wrong
          </span>
          <p>Are you sure you spelled the location correctly?</p>
          <p>This is what you typed: {location}</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorCard;
