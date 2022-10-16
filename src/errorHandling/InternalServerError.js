import React from 'react';
import Status from './Status';


const InternalServerError = () => {
    return (
      <Status code={500}>
        <div>
          <h2>The server is down at the moment. . .</h2>
        </div>
      </Status>
    );
  };

export default InternalServerError;