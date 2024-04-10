import styled from 'styled-components'
function Header() {
  return (
    <Nav>
        <Logo src="./images/logo.svg" />
        <NavMenu>
          <a>
            <img src="./images/home-icon.svg" alt=""  />
            <span>HOME</span>
          </a>
          <a>
            <img src="./images/search-icon.svg" alt=""  />
            <span>SEARCH</span>
          </a>
          <a>
            <img src="./images/watchlist-icon.svg" alt=""  />
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src="./images/original-icon.svg" alt=""  />
            <span>ORIGINAL</span>
          </a>
          <a>
            <img src="./images/movie-icon.svg" alt=""  />
            <span>MOVIES</span>
          </a>
          <a>
            <img src="./images/series-icon.svg" alt=""  />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <UserImg src='data:image/jpeg;base64,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'/>
    </Nav>
  )
}
const Nav = styled.nav`
    display: flex;  
    align-items:center;
    height: 70px;
    background: #090b13;
    display: flex;
    padding: 0 36px;
    
`
const Logo = styled.img`
    width: 80px;
    cursor: pointer;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    padding: 8px;
    cursor: pointer;

    a{
      display: flex;
      align-items: center;
      padding: 0 12px;

      img{
        height: 20px;
      }

      span{
        font-size: 13px;
        letter-spacing: 1.52px;
        position: relative;

        &:after{
          content: "";
          height: 2px;
          background-color: white;
          position: absolute;
          /* top: 0; */
          left: 0;
          right: 0;
          bottom: -6px;
          opacity:  0;
          transform-origin: left center;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          transform: scaleX(0);
        }
      }
      &:hover{
        span:after{
          transform: scaleX(1);
          opacity: 1;
        }
      }
    }
`
const UserImg = styled.img`
      height: 48px;
      width: 48px;
      border-radius:50%;
      cursor: pointer;
` 
export default Header