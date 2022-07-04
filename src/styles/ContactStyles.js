import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  @media (max-width: 769px) {
    flex-direction: column;
    height: auto;
  }
`
const lineAnimation = keyframes`
 0% { height: 0px }
 30% { height: 120px }
 40% { height: 220px}
 100% { height: 300px }
`
const lineAnimationSmallScreen = keyframes`
 0% { width: 0px }
 30% { width: 120px }
 40% { width: 220px}
 100% { width: 350px }
`
export const Section = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  :first-of-type {
    justify-content: end;
    margin-right: 1rem;
    position: relative;
    ::after {
      content: "";
      width: 1px;
      height: 300px;
      background-color: black;
      margin-left: 1rem;
      animation-name: ${lineAnimation};
      animation-duration: 3s;
      animation-iteration-count: 1;
      @media (max-width: 769px) {
        height: 1px;
        width: 350px;
        animation-name: ${lineAnimationSmallScreen};
        animation-duration: 3s;
        animation-iteration-count: 1;
        position: absolute;
        margin-left: 0rem;
        bottom: -30px;
        left: 0;
      }
    }
  }
  @media (max-width: 769px) {
    margin-bottom: 5rem;
    justify-content: center;
    align-items: center;
    :first-of-type {
      justify-content: center;
      margin-top: 5rem;
    }
  }
  @media (max-width: 501px) {
    width: 80%;
    ::after {
      display: none;
    }
  }
`

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 1rem;
  width: 60%;
  z-index: 300;
  label {
    margin-bottom: 10px;
  }
  input {
    margin-bottom: 15px;
    background-color: transparent;
    border: none;
    border-bottom: solid 1px #181818;
  }
  input.submit {
    border: solid 1px #181818;
    height: 40px;
    cursor: pointer;
  }

  textarea {
    height: 200px;
    background-color: transparent;
    border: solid 1px #181818;
    margin-bottom: 10px;
  }
`

export const ContactInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  z-index: 300;
`
export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  @media (max-width: 769px) {
    line-height: 14px;
  }
`

export const TitleContainer = styled.div`
  width: 75px;
  position: relative;
  overflow: hidden;
  span {
    position: absolute;
    display: inline;
  }
`
export const Info = styled.div`
  margin-left: 1rem;
  p {
    display: inline;
  }
  @media (max-width: 769px) {
    font-size: 12px;
  }
`
