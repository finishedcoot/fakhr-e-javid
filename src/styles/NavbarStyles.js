import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  z-index: 600;
`
export const Space = styled.div`
  flex: 2;
`

export const LeftSide = styled.div`
  height: 100%;
  float: left;
  width: 60px;
`

export const LogoContainer = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
  img {
    width: 70px;
    z-index: 5;
  }
  @media (max-width: 644px) {
    img {
      width: 50px;
    }
  }
`

export const RightSide = styled.div`
  height: 100%;
  width: 400px;

  ul {
    display: flex;
    justify-content: flex-end;
    margin-right: 1rem;
    margin-top: 1rem;
    z-index: 2;
    letter-spacing: 1px;
    li {
      list-style: none;
      margin-right: 1rem;
      z-index: 600;
    }
    a {
      color: #000;
      text-shadow: 1px 1px 5px #fff;
      font-family: Poppins;
      font-weight: 500;

      text-decoration: none;
    }
  }
`
