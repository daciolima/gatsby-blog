import React, { useState, useEffect } from "react"

import { Home } from "@styled-icons/boxicons-regular/Home"
import { Search } from "@styled-icons/boxicons-regular/Search"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Flashlight as Light } from "@styled-icons/ionicons-outline/Flashlight"
import { Grid } from "@styled-icons/boxicons-regular/Grid"
import { ThList as List } from "@styled-icons/typicons/ThList"

import getThemeColor from "../../utils/getThemeColor"

import * as STYLE from "./styled"
import * as GA from "./trackers"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
    window.scrollTo(0, 0)
  }, [])

  return (
    <STYLE.MenuBarWrapper>
      <STYLE.MenuBarGroup>
        <STYLE.MenuBarLink
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          to="/"
          title="Voltar a home"
        >
          <STYLE.MenuBarItem>
            <Home />
          </STYLE.MenuBarItem>
        </STYLE.MenuBarLink>
        <STYLE.MenuBarLink
          cover
          direction="left"
          bg="#16202c"
          duration={0.6}
          to="/search/"
          title="Pesquisar"
        >
          <STYLE.MenuBarItem>
            <Search />
          </STYLE.MenuBarItem>
        </STYLE.MenuBarLink>
      </STYLE.MenuBarGroup>
      <STYLE.MenuBarGroup>
        <STYLE.MenuBarItem
          title="Mudar Tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className="theme"
        >
          <Light />
        </STYLE.MenuBarItem>
        <STYLE.MenuBarItem
          title="Mudar Visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
        >
          {isListMode ? <Grid /> : <List />}
        </STYLE.MenuBarItem>
        <STYLE.MenuBarItem
          title="Ir para o Topo"
          onClick={() => {
            GA.topClickTrack()
            window.scroll({ top: 0, behavior: "smooth" })
          }}
        >
          <Arrow />
        </STYLE.MenuBarItem>
      </STYLE.MenuBarGroup>
    </STYLE.MenuBarWrapper>
  )
}

export default MenuBar
