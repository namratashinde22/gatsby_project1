import React from "react"
import { Router } from "@reach/router"
import Dashboard from "../components/Dashboard/dashboard"
import Contract from "../components/Contract_mangement/contract"
import Layout from "../components/layout"
import EditContract from "../components/Contract_mangement/editcontract"
import NewContract from "../components/Contract_mangement/newcontract"

const App = () => (
  <Layout>
    <Router>
      <Dashboard path="/app/dashboard" />
      <Contract path="/app/contract" />
      <EditContract path="/app/edit/:id" />
      <NewContract path="/app/newcontract" />
    </Router>
  </Layout>
)

export default App
