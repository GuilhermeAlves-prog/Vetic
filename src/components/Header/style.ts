import styled from 'styled-components'

export const HeaderNavegation = styled.header `
  padding-top: 3.2rem;
  min-height: 780px;
  
  nav {
    @media (max-width: 1080px) {
      display: none;
}
    display: flex;
    align-items: center;
    padding-left: 10rem;
    gap: 15rem;

    ul {
      display: flex;
      list-style: none;
      gap: 4.5rem;

      li {

        a {
          text-decoration: none;
          color: #000;
          font-weight: bold;
          font-size: 1.8rem;

          &:hover {
            color: #193A6A;
          }
        }
      }
    }
  }
`
interface NavegationMobileProps {
  isOpen: boolean;
}

export const NavegationMobile = styled.header<NavegationMobileProps>`
  padding: 2rem 4rem;
   @media (min-width: 1080px) {
      display: none;
   }

   div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      border: none;
      border-radius: 0.8rem;
      background: none;
      cursor: pointer;

      img {
        width: 60px;
      }
    }
   }
  nav {
    position: absolute;
    left: 0;
    right: 0;
    display: ${(props) => props.isOpen ? 'block' : 'none'};
  }

  ul {
    list-style: none;
  }
  li {
    background-color: var(--blue-dark);
    padding: 2rem;
    text-align: center;
  }
  li + li {

  }
  a {
    text-decoration: none;
    color: white;
    padding: 2rem;
  }
`