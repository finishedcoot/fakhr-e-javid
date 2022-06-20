import * as React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { motion } from "framer-motion"
const Layout = ({ children, path }) => {
  return (
    <motion.main>
      <motion.div
        animate={{ left: "100%" }}
        transition={{
          duration: 1,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        exit={{ left: "0" }}
        style={{
          position: "absolute",
          top: 0,
          left: "0%",
          width: "100vw",
          height: "100%",
          backgroundColor: "#fff",
          zIndex: "400",
        }}
      ></motion.div>

      <Navbar />
      {children}
      <Footer />
    </motion.main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
