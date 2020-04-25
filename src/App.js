import React, {useState} from "react";
import { Route, Switch, Link} from 'react-router-dom';
import Form from './components/Form.js';
import HomePage from './components/HomePage.js';
import Success from './components/Sucess.js';
import Orders from './components/Orders.js';

const initFormValues = {
  size: '',
  // sauce: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    bacon: false,
    itSausage:false,
  },
  special:''
}

const initFormErrors = {
  size: '',
  toppings: '',
  special: ''
}

const App = () => {

  const [orders, setOrders] = useState([])

  const [formValues, setFormValues] = useState(initFormValues)
  const [formErrors, setFormErrors] = useState(initFormErrors)

  const onInputChange = event =>{
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

  const onCheckboxChange = event =>{
    setFormValues({
      ...formValues,
      toppings:{
        ...formValues.toppings,
        [event.target.name]: event.target.checked
      }
    })
  }

  const onSubmit = event =>{
    event.preventDefault()

    const newOrder = {
      size: formValues.size,
      // sauce: formValues.sauce,
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true),
      special: formValues.special
    }

    setOrders([
      ...orders,
      newOrder
    ])

    setFormValues(initFormValues)
  }


  return (
    <div>
      <header>
        <Route path='/'>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Help</Link>
        </nav>
        </Route>
        </header>

        <Switch>
          <Route path='/pizza'>
            <Form values={formValues} onInputChange={onInputChange} onCheckboxChange={onCheckboxChange} onSubmit={onSubmit}/>

            {/* test for form submission */}
            {
              orders.map((order,index) =>{
                return (
                  <pre key={index}>{JSON.stringify(order)}</pre>
                )
              })
            }
          </Route>

          <Route path='/pizza/success'>
            <Success />
          </Route>

          <Route path='/pizza/orders'>
            <Orders />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
    </div>
  );
};
export default App;
