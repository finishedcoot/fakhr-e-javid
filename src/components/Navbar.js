import React from "react"
import {
  Container,
  LeftSide,
  LogoContainer,
  RightSide,
  Space,
} from "../styles/NavbarStyles"
import logo from "../images/logo.png"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { AnimatePresence, motion } from "framer-motion"

const Navbar = () => {
  const location = useLocation()
  return (
    <Container>
      <LeftSide>
        <LogoContainer>
          <Link to="/">
            <AnimatePresence exitBeforeEnter initial={false}>
              {location.pathname !== "/" && location.pathname !== "/about" && (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: "all 1s ease" }}
                  transition={{
                    duration: 1,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  src={logo}
                  alt="perspolis"
                />
              )}
            </AnimatePresence>
          </Link>
        </LogoContainer>
      </LeftSide>
      <Space></Space>
      <RightSide>
        <ul>
          <li>
            <Link to="/activities">Activities</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </RightSide>
    </Container>
  )
}

export default Navbar
