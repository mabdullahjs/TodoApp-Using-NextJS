import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, ListGroup, Badge } from 'react-bootstrap';
import { deleteDocument, getAllData, sendData, updateDocument } from '@/config/firebaseMethod';

function index() {
  // state
  const [data, setData] = useState<[] | null>(null);
  const [val, setVal] = useState("");

  //add todo function
  const addTodo = async () => {
    if (!val.trim()) {
      alert("Please Fill the form")
    }
    else {
      await sendData({
        val
      }, "TodoData")
        .then((res) => {
          setVal("")
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    }


  }

  //useEffect for get data
  useEffect(() => {
    getAllData("TodoData")
      .then((res) => {
        setData(res as [])
        // console.log(data);

      })
      .catch((err) => {
        console.log(err);

      })
  }, [data])

  //delete todo function
  const deleteTodo =  (item: { documentId: string }) => {
    deleteDocument(item.documentId, "TodoData")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  //update todo function
  const updateTodo = (item:{documentId:string ; val:string})=>{
    setVal(item.val)
  }

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
        <Button className='m-2' onClick={addTodo} variant="primary">Add Todo</Button>
        <Button className='m-2' disabled={true} onClick={addTodo} variant="primary">Update Todo</Button>
      </div>
      <div className="list container mt-5 pt-5">
        <ListGroup>
          {data && data.length > 1 ? data.map((item: { val: string; documentId: string }, index: number) => {
            return <ListGroup.Item
              as="li" key={index}
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                {item.val}
              </div>
              <Button onClick={() => deleteTodo(item)} className='m-2' variant="danger">Delete</Button>
              <Button className='m-2' variant="info">Update</Button>
            </ListGroup.Item>
          }) : <h1>Loading....</h1>}
        </ListGroup>
      </div>
    </>

  )
}

export default index