import React, { Component } from "react"

import IndexStyles from "../css/index.module.css"

import Layout from "../components/Layout"
import SideBar from "../components/Sidebar"

class Index extends Component {
  render() {
    return (
      <div className={IndexStyles.mainContainer}>
        <Layout>
          <SideBar />
        </Layout>
      </div>
    )
  }
}

export default Index
