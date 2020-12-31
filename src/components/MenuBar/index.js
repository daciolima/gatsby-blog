import React, { useState, useEffect } from "react"

import { Home } from "@styled-icons/boxicons-regular/Home"
import { Search } from "@styled-icons/boxicons-regular/Search"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Flashlight as Light } from "@styled-icons/ionicons-outline/Flashlight"
import { Grid } from "@styled-icons/boxicons-regular/Grid"
import { ThList as List } from "@styled-icons/typicons/ThList"

import * as STYLE from "./styled"

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
  }, [])

  return (
    <STYLE.MenuBarWrapper>
      <STYLE.MenuBarGroup>
        <STYLE.MenuBarLink to="/" title="Voltar a home">
          <STYLE.MenuBarItem>
            <Home />
          </STYLE.MenuBarItem>
        </STYLE.MenuBarLink>
        <STYLE.MenuBarLink to="/search/" title="Pesquisar">
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
        <STYLE.MenuBarItem title="Ir para o Topo">
          <Arrow />
        </STYLE.MenuBarItem>
      </STYLE.MenuBarGroup>
    </STYLE.MenuBarWrapper>
  )
}

export default MenuBar
