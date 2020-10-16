import React from 'react';
import { withRouter } from 'react-router-dom';

import { Typography, Button, Form, message, Input } from 'antd';

function UploadProduct(props) {
  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography.Title level={2}> 
          Upload Travel Product
        </Typography.Title>
      </div>
    </div>
  );
}

export default withRouter(UploadProduct);