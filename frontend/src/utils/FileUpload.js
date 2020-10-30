import React from 'react';
import Dropzone from 'react-dropzone'
import { PlusCircleOutlined } from '@ant-design/icons';
import './FileUpload.css'
function FileUpload(props) {

  const onDrop = (files) => {
    let formData = new FormData();
    console.log(formData)
  }

  return (
    <div className="file">
      <Dropzone onDrop={onDrop} multiple maxSize={800000000}>
        {({getRootProps,getInputProps}) => (
          <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            <PlusCircleOutlined style={{ fontSize: '3rem' }}/>
          </div>
        )
        }
      </Dropzone>
    </div>
  );
}

export default FileUpload;