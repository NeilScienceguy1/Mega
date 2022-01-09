import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/auth.context"

import Chats from "./Chats"
import Home from "./Home"
import Login from "./Login"
import Calculator from "./Calculator"
import PDFConverter from "./PDFConverter"
import Stopwatch from "./Stopwatch"
import Dictionary from "./Dictionary"


function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pdf/converter" component={PDFConverter} />
          <Route exact path="/stopwatch" component={Stopwatch} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/dictionary" component={Dictionary} />
          <Route exact path="/chats" component={Chats} />
          <Route exact path="/login" component={Login} /> 
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
