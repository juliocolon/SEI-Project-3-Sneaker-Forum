import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../index.css';
import { useState, useRef } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';


export default function ThreadForm({user, refresh, setRefresh}) {

  const {id} = useParams(); 
  console.log(id)



    const [didSubmit, setDidSubmit] = useState(false)
    // const [enteredTitle, setEnteredTitle] = useState("");
    // const [enteredBody, setEnteredBody] = useState("");
    const [enteredBrand, setEnteredBrand] = useState("");

    const threadtitle = useRef(null)
    const brandcategory = useRef(null)
    const threadbody = useRef(null)
    const navigate= useNavigate(); 

  // function titleChangeHandler(event) {
  //   setEnteredTitle(event.target.value);
  // }

  // function bodyChangeHandler(event) {
  //   setEnteredBody(event.target.value);
  // }

  function brandChangeHandler(event) {
    setEnteredBrand(event.target.value);
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    console.log("edit before try")
    try {
      await axios.put(`/threads/${id}`, {
        threadtitle: threadtitle.current.value,
        brandcategory: brandcategory.current.value, 
        threadbody: threadbody.current.value, 
        
      })
      setDidSubmit(!didSubmit)
      console.log("edit")
      // setEnteredTitle("");
      // setEnteredBody("");
      // setEnteredBrand("");
      navigate('/threads/new')
      setRefresh(!refresh)
  
    } catch (err) {
      console.log(err)
    }
  }





    return (
        <Form className="thread-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-4" >
                <Form.Label style={{color: "white"}}>Thread Title</Form.Label>
                <Form.Control  ref={threadtitle} type="text" required />
            </Form.Group>
            <Form.Label style={{color: "white"}}>Brand Category</Form.Label>
            <Form.Select value={enteredBrand}   onChange={brandChangeHandler} ref={brandcategory} className="mb-4" required>
                <option>Choose Category</option>
                <option value="Nike">Nike</option>
                <option value="Jordan">Jordan</option>
                <option value="Adidas">Adidas</option>
            </Form.Select>
            <Form.Group className="mb-5" >
                <Form.Label  style={{color: "white"}}>Thread Body</Form.Label>
                <Form.Control ref={threadbody} type="text" as="textarea" rows={6} required />
            </Form.Group>
            <Button variant="secondary"  type="submit">
               Update Thread
            </Button>
        </Form>
    )
}