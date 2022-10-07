import styled from 'styled-components'

export const HeaderNavegation = styled.header `
  padding-top: 3.2rem;
  min-height: 780px;
  
  nav {
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