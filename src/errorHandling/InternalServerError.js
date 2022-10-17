import React from 'react';
import Status from './Status';
import './InternalServerError.css';
import './Status404.css'

const InternalServerError = () => {
    return (
      <Status code={500}>
        <div className='error-505-container'>
          <h2 className='sorry'>The server is down at the moment. . .</h2>
        </div>
      </Status>
    );
  };

export default InternalServerError;