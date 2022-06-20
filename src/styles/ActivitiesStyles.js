import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`

export const ActivitiesSection = styled(motion.div)`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0a043c;
  z-index: 100;
`

export const Slider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  transition: all 1.5s ease-in-out;
`
export const Slide = styled.div`
  width: 100% !important;
  flex: 0 0 100%;
  padding-right: 15px;
`

export const DescriptionSection = styled(motion.div)`
  width: 50%;
  padding: 2rem;
  p {
    line-height: 30px;
  }
`

export const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  bottom: 50%;
  left: 0;
  width: 100%;
  height: 20px;
  button {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 2px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  button.next {
    transform: rotate(180deg);
  }
`
