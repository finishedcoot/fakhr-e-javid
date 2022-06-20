import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`
const lineAnimation = keyframes`
 0% { height: 0px }
 30% { height: 120px }
 40% { height: 220px}
 100% { height: 300px }
`
export const Section = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  :first-of-type {
    justify-content: end;
    margin-right: 1rem;
    ::after {
      content: "";
      width: 1px;
      height: 300px;
      background-color: black;
      margin-left: 1rem;
      animation-name: ${lineAnimation};
      animation-duration: 3s;
      animation-iteration-count: 1;
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
`
