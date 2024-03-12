import '/Users/ringo/Desktop/airbnbclone/src/App.css'
//import styled from "styled-components"; 
import Logo from "/Users/ringo/Desktop/airbnbclone/src/images/logo.png"
import { LuGlobe } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";


function Header() {
    return(
        <>
            <header >
                <section className='navbar'>
                    <nav className="upper-nav">
                        <div className='logo-div'>
                            <img src={Logo} alt='' />
                        </div>

                        <div className='middle-upper-div'>
                            <ul className='middle-ul'>
                                <li>
                                    <a href='#index' className='active' >Stays</a>
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

                    </nav>

                    <nav className='lower-nav'>
                        <div className='lower-nav-content'>
                            <form>
                                <div className='f-div'>
                                    <label for="search">
                                        Where 
                                    </label>
                                    <input type='search' placeholder='Search Destinations' />
                                </div>
                                <div className='s-div'>
                                    <h3>Check in</h3>
                                    <p>Add dates</p>
                                </div>
                                <div className='t-div'>
                                    <h3>Check out</h3>
                                    <p>Add dates</p>
                                </div>
                                <div className='f-div'>
                                    <div className='f-div-content'>
                                        <div className='f-div-left'>
                                            <h3>Who</h3>
                                            <p>Add guest</p>
                                        </div>
                                        <div className='f-div-right'>
                                            <CiSearch />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </nav>
                </section>
            </header>
        </>
    )
}

export default Header