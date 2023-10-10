import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='app'>
      <div
        style={{
          marginTop: "64px",
          fontSize: "48px",
          fontWeight: "700",
          marginBottom: "32px",
          textAlign:"center"
        }}
      >Page Not Found</div>
      <div
        onClick={() => navigate('/')}
        style={{
          fontSize: "25px",
          lineHeight: "1.6",
          color: "#E5547C",
          cursor: "pointer",
          textAlign:"center"
        }}
      >go to Main page</div>
    </div>
  )
}

export default NotFound