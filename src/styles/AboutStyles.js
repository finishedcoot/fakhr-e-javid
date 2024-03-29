import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 601px) {
    flex-direction: column-reverse;
    height: auto !important;

    .logoContainer {
      width: 100% !important;
      height: auto !important;
    }
  }
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
  @media (max-width: 1025px) {
    .logo {
      width: 40%;
    }
  }
  @media (max-width: 601px) {
    flex-direction: column-reverse;
  }
`

export const Description = styled.div`
  width: 50%;
  padding: 2rem 4rem;
  height: 70%;
  overflow-y: scroll;
  z-index: 100;
  div {
    line-height: 30px;
    height: 100%;
    text-align: justify;
    word-spacing: 6px;
    h3 {
      display: inline;
      font-size: 18px;
      margin: 0 15px;
    }
  }
  span {
    display: block;
  }
  span.first {
    margin-top: 0.5rem;
  }
  p {
    margin-bottom: 1rem;
    line-height: 30px;
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
  @media (max-width: 769px) {
    margin-top: 4rem;
    height: 80%;
    padding-bottom: 4rem;
    p {
      font-size: 12px;
    }
  }
  @media (max-width: 601px) {
    height: auto;
    width: 90%;
    padding: 0rem;
    margin: 0;
    overflow-y: visible;
    margin-top: 10rem;
    div {
      line-height: 20px;
      word-spacing: 4px;
      h3 {
        font-size: 14px;
      }
    }
    p {
      line-height: 22px;
    }
    h2 {
      font-size: 18px;
    }
    margin-bottom: 1rem;
  }
`
