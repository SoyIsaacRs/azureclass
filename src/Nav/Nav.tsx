import React from "react"
import styles from "./nav.module.css"

import { BiSearchAlt, BiHomeAlt, BiLeftArrowAlt, BiMusic } from "react-icons/bi"
import { FaSpotify } from "react-icons/fa";

const icons = [FaSpotify,BiSearchAlt, BiHomeAlt, BiLeftArrowAlt, BiMusic]
const Nav = () => {
  return (
    <aside>
      {icons.map((Icon, index) => (
        <div key={index} className={Icon === BiSearchAlt ? styles.selected : styles.unselected}>
          <Icon />
        </div>
      ))}
    </aside>
  )
}

export default Nav
