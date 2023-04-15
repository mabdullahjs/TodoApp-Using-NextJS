import React, { useState , useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, ListGroup } from 'react-bootstrap';
import { getAllData, sendData } from '@/config/firebaseMethod';

function index() {
  // state
  const [data, setData] = useState(null);
  const [val, setVal] = useState("");

  //add todo function
  const addTodo = async () => {
    await sendData({
      val
    }, "TodoData")
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })

  }

  //useEffect for get data
  useEffect(() => {
    getAllData("TodoData")
    .then((res)=>{
      setData(res)
      // console.log(data);
      
    })
    .catch((err)=>{
      console.log(err);
      
    })
  }, [data])
  
  return (
    <>
      <h1 className='text-center mt-3'>TODO APP</h1>
      <div className='container mt-5'>
        <Form.Control
          type="text"
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Button onClick={addTodo} variant="primary">Add Todo</Button>
      </div>
      <div className="list container mt-5 pt-5">
        <ListGroup>
          {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
          {/* {data.map((item, index) => {
            return <ListGroup.Item key={index}>{item}</ListGroup.Item>
          })} */}
          {data?data.map((item:{val:string} , index:number)=>{
            return <ListGroup.Item key={index}>{item.val}</ListGroup.Item>
          }) : <h1>Loading....</h1>}
        </ListGroup>
      </div>
    </>

  )
}

export default index