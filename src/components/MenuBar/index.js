import React from "react"

import { Home } from "@styled-icons/boxicons-regular/Home"
import { Search } from "@styled-icons/boxicons-regular/Search"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Flashlight as Light } from "@styled-icons/ionicons-outline/Flashlight"
import { Grid } from "@styled-icons/boxicons-regular/Grid"
// import { ThList as List } from "@styled-icons/typicons/ThList"

import * as STYLE from "./styled"

const MenuBar = () => (
    <STYLE.MenuBarWrapper>
        <STYLE.MenuBarGroup>
            <STYLE.MenuBarLink to="/" title="Voltar a home">
                <STYLE.MenuBarItem><Home /></STYLE.MenuBarItem>
            </STYLE.MenuBarLink>
            <STYLE.MenuBarLink to="/search/" title="Pesquisar">
                <STYLE.MenuBarItem><Search /></STYLE.MenuBarItem>
            </STYLE.MenuBarLink>
        </STYLE.MenuBarGroup>
        <STYLE.MenuBarGroup>
        <STYLE.MenuBarItem title="Mudar Tema"><Light /></STYLE.MenuBarItem>
        <STYLE.MenuBarItem title="Mudar Visualização"><Grid /></STYLE.MenuBarItem>
        <STYLE.MenuBarItem title="Ir para o Topo"><Arrow /></STYLE.MenuBarItem>
        </STYLE.MenuBarGroup>
    </STYLE.MenuBarWrapper>
)

export default MenuBar