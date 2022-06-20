import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 30px);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  .image {
    height: 100%;
    width: 100%;
  }
`
export const CoverModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.5;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const OverContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
`
export const WelcomeText = styled.div`
  display: flex;
  height: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  img {
    width: 80px;
    z-index: 5;
  }
  h2 {
    font-size: 35px;
    margin-top: 2rem;
    font-weight: 400;
    letter-spacing: 1.5px;
    word-spacing: 13px;
  }
`

export const PoemContainer = styled(motion.div)`
  margin-top: 9rem;
  z-index: 3;
  margin-left: 2rem;
  h3 {
    font-size: 24px;
    font-style: italic;
    font-weight: 300;
  }
  .first-line {
    margin-bottom: 5px;
  }
  .second-line {
    margin-left: 10rem;
    margin-bottom: 15px;
  }
`
export const HistoryDesc = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 80%;
  line-height: 30px;
  h3 {
    letter-spacing: 5px;
    word-spacing: 10px;
  }
`

export const InfoSectionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`
export const TimelineMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center;
  width: 10%;
  height: 100%;
`

export const TimelineItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  font-size: 12px;
  display: flex;
  align-items: center;
  font-family: "Times New Roman", Times, serif;
  h3 {
    position: relative;
    width: 100%;
  }
  span.date {
    position: absolute;
    left: 5%;
  }
  span.time {
    position: absolute;
    left: 70%;
  }
  .button {
    position: absolute;
    left: 48%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    border: 1px solid black;
    z-index: 100;
    transition: all 1s ease-in-out;
    cursor: pointer;
  }
  .button.active {
    background-color: black;
    border: 1px solid white;
  }

  /* ::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    border: 1px solid black;
    left: 46%;
    top: 50%;
    z-index: 200;
  }
  */
  ::after {
    position: absolute;
    content: "";
    height: 144px;
    width: 1.5px;
    background-color: black;
    left: 54.5%;
    top: 54%;
    z-index: 0;
  }

  :last-of-type::after {
    height: 0px;
  }
`
