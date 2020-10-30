import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { Typography, Button, Form, message, Input } from 'antd';
import FileUpload from '../../utils/FileUpload';

const Continents = [
  { key: 1, value: "Africa" },
  { key: 2, value: "Europe" },
  { key: 3, value: "Asia" },
  { key: 4, value: "North America" },
  { key: 5, value: "South America" },
  { key: 6, value: "Australia" },
  { key: 7, value: "Antarctica" }
]

function UploadProduct(props) {
  const [value, setValue] = useState({
    title: '',
    description: '',
    price: 0,
    continent: 1,
  })
  const [Images, setImages] = useState([])

  const onChange = e => {
    setValue({
      ...value,
      [e.target.name] : e.target.value
    })
  }
  const onSubmit = e => {
    e.preventDefault();
  }

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography.Title level={2}> 
          Upload Travel Product
        </Typography.Title>
      </div>
      <Form onSubmit={onSubmit}>
        <FileUpload/>
        <br/>
        <label>Title</label>
        <Input name="title" onChange={onChange} value={value.title} />
        <br /><br />
        <label>Description</label>
        <Input.TextArea name="description" onChange={onChange} value={value.description}/>
        <br />
        <label>Price($)</label>
        <Input name="price" onChange={onChange} value={value.price} type="number" />
        <br /><br />
          <select name="continent" onChange={onChange} value={value.continent}>
            {Continents.map(item => (
              <option key={item.key} value={item.key}>{item.value} </option>
            ))}
          </select>
        <br /><br />
        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default withRouter(UploadProduct);