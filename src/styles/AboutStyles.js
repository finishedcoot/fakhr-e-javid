import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LogoSection = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #181818;
  .logo {
    width: 60%;
  }
`

export const Description = styled.div`
  width: 50%;
  padding: 2rem;
  height: 70%;
  overflow-y: scroll;
  z-index: 100;
  div {
    line-height: 30px;
    height: 100%;
  }
  span {
    display: block;
  }
  span.first {
    margin-top: 0.5rem;
  }
  p {
    margin-bottom: 1rem;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }
`
