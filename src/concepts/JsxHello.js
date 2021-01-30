import React from 'react'
import Calculator from "./LiftingStateUp";
import Contacts from "./Composition";

function getGreeting(name) {
  return <div>{name}</div>
}

const name = 'Felipe Neuhauss'
const element = <h4>Hello, {getGreeting(name)}</h4>
const reactCreatedElement = React.createElement('h4', {className: 'greeging'}, 'Let\'s go!')

function JsxHello() {
  return (
    <div>
      {element}
      {reactCreatedElement}
      <Calculator />
      <Contacts />
    </div>
  )
}

export default JsxHello;
