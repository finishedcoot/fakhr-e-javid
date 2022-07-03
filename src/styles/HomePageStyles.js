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
  .imageContainer {
    width: 50%;
    height: 100%;
  }
  @media (max-width: 510px) {
    flex-direction: column-reverse;
    height: 1034px;
    margin-top: 35px;
    margin-bottom: 100px;
    .imageContainer {
      width: 90%;
      margin-top: 50px;
    }
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
  @media (max-width: 1370px) {
    h2 {
      font-size: 28px;
    }
    img {
      width: 65px;
    }
  }
  @media (max-width: 1170px) {
    h2 {
      letter-spacing: 1px;
      word-spacing: 4px;
      font-size: 24px;
    }
  }
  @media (max-width: 1025px) {
    margin-top: 3rem;
  }
  @media (max-width: 825px) {
    h2 {
      font-size: 20px;
      word-spacing: 2px;
      letter-spacing: 0;
    }
  }
  @media (max-width: 510px) {
    margin-top: 6rem;
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
  @media (max-width: 1370px) {
    margin-top: 2rem;
    h3 {
      font-size: 18px;
      font-style: italic;
      font-weight: 300;
    }
  }
  @media (max-width: 900px) {
    margin-top: 4rem;
    h3 {
      font-size: 14px;
    }
    h4 {
      font-size: 14px;
    }
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
  @media (max-width: 1370px) {
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 1170px) {
    h2 {
      letter-spacing: 1px;
      word-spacing: 4px;
      font-size: 24px;
    }
  }
  @media (max-width: 1025px) {
    justify-content: start;
    margin-top: 2rem;
    p {
      line-height: 20px;
    }
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`

export const InfoSectionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1025px) {
    flex-direction: column;
  }
  @media (max-width: 510px) {
    width: 85%;
  }
`
export const TimelineMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center;
  width: 10%;
  height: 100%;

  @media (max-width: 1025px) {
    width: 100%;
    height: 40px;
    flex-direction: row;
  }
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
    font-size: 14px;
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

  @media (max-width: 1370px) {
    margin-left: 1rem;
    height: 138px;
    h3 {
      font-size: 10px;
    }
    ::after {
      height: 134px;
      width: 1.5px;

      left: 56%;
    }
  }
  @media (max-width: 1025px) {
    margin-left: 0rem;
    height: 100px;
    width: 60px;
    padding-top: 40px;
    z-index: 500;
    h3 {
      width: 50px;
      display: flex;
      flex-direction: column;
    }
    span.date {
      left: 40%;
      top: -15px;
    }
    span.time {
      left: 40%;
      top: 15px;
    }
    ::after {
      height: 1.5px;
      width: 70px;

      left: 40.5%;
      top: 67%;
      z-index: 0;
    }
  }
`
