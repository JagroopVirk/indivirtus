import React from "react"
import { TopBar } from "./TopBar"
import { NavBar } from "./NavBar"

export const Header = () => {
  return (
    <header>
      <TopBar />
        <NavBar />
    </header>
  )
}
