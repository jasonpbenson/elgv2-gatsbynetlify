import React from "react"

import SidebarStyles from "./Sidebar.module.css"

import Logo from "../../assets/logos/enchanted_splatter_OffRegTrace_ed.png"

export default () => {
  return (
    <div className={SidebarStyles.sidebarContainer}>
      <img
        className={SidebarStyles.logo}
        src={Logo}
        alt="Enchanted Life Goods logo"
      />
      <div className={SidebarStyles.headersContainer}>
        <h1>
          ec + stat + ic <br /> house + wares <br />& wear + ables
        </h1>
        <h2>
          by Erin Jane Nelson <br /> and Jason Benson
        </h2>
        <h3>info @ inter-species . us</h3>
      </div>
    </div>
  )
}
