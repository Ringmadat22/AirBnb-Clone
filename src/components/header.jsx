import '/Users/ringo/Desktop/airbnbclone/src/App.css'
import styled from "styled-components"; 
import Logo from "/Users/ringo/Desktop/airbnbclone/src/images/logo.png"
import { LuGlobe } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";


function Header() {

    const Header = styled.section`
        width:100%;
    `;

    const Navbar = styled.div`
        width:100%;
    `;


    return(
        <>
            <Header >
                <Navbar>
                    <diiv className="upper-nav">
                        <div className='logo-div'>
                            <img src={Logo} alt='' />
                        </div>

                        <div className='middle-upper-div'>
                            <ul className='middle-ul'>
                                <li>
                                    <a href='#index' >Stays</a>
                                </li>

                                <li>
                                    <a href='#index' >Experiences</a>
                                </li>

                                <li>
                                    <a href='#index' >Online Experiences</a>
                                </li>
                            </ul>
                        </div>

                        <div className='rigth-upper-div'>
                            <ul className='right-ul'>
                                <li>
                                    <a href='#index'>Airbnb your home</a>
                                </li>

                                <li>
                                    <a href='#index'><LuGlobe /></a>
                                </li>

                                <button className='userbutton'><IoIosMenu /> <BiUserCircle /></button>
                            </ul>
                        </div>

                    </diiv>

                    <div className='lower-nav'>
                        <div className='lower-nav-content'>
                            <form>
                                
                            </form>
                        </div>
                    </div>
                </Navbar>
            </Header>
        </>
    )
}

export default Header