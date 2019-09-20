import React from "react"

import LayoutStyles from "../css/Layout.module.css"

export default ({ children }) => (
  <div className={LayoutStyles.layoutContainer}>{children}</div>
)
