import React from 'react';
import '/Users/ringo/Desktop/airbnbclone/src/App.css'
import { GiMountaintop  } from 'react-icons/gi';
import { IoFilterCircleOutline } from 'react-icons/io5';
import { LuKey } from 'react-icons/lu';
import Carousel from 'react-grid-carousel';
import styled from 'styled-components';
import { GiFamilyHouse } from "react-icons/gi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { PiParkFill } from "react-icons/pi";
import { GiWindmill } from "react-icons/gi";
import { LiaWheelchairSolid } from "react-icons/lia";
import { GiSpaceship } from "react-icons/gi";
import { GiVillage } from "react-icons/gi";
import { TbCamper } from "react-icons/tb";
import { GiIsland } from "react-icons/gi";
import { FaRegSnowflake } from "react-icons/fa";
import { MdSurfing } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { GiCoffeeCup } from "react-icons/gi";
import { GiMountainCave } from "react-icons/gi";
import { GiPalmTree } from "react-icons/gi";
import { FaFireAlt } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { GiCampingTent } from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { GiHouse } from "react-icons/gi";
import { FaHouseTsunami } from "react-icons/fa6";
import { MdOutlineSportsGolf } from "react-icons/md";
import { SiInfluxdb } from "react-icons/si";
import { MdCastle } from "react-icons/md";
import { GiCastle } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { PiCactusBold } from "react-icons/pi";
import { FaLandmarkDome } from "react-icons/fa6";
import { GiBowlingStrike } from "react-icons/gi";



const CarouselSection = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-top:1px solid rgba(174, 169, 169, 0.342);
    padding:20px 0 0 0;
    border-top:gray;
`

const CarouselContainer = styled.div`
    width:95%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#fff;
    flex-direction:row;
`

const CarouselItem = styled.div`
  height: 60px;
  background-color: #fff;
  margin:0 0 0 20px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const CarouselItemContent = styled.div`
  height: 50px;
  background-color: #fff;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  transition:0.3s;
`;

const FilterBtn = styled.button`
    padding:14px 7px 0;
    border: 1px solid rgba(174, 169, 169, 0.342);
    background-color:#fff;
    display:flex;
    justify-content:space-between;
    width:90px;
    cursor:pointer;
    border-radius:7px;
    height:5vh;
    font-size:13px;
    margin-left:6px;
`;

const CarouselSpan = styled.span`
    font-size:10px;
    padding: 8px 0 0  0;
`

function Slider() {
  return (
    <>
        <CarouselSection style={{
            width:"100%",
            borderTop:"1px solid rgba(174, 169, 169, 0.342)"
        }}>
            <CarouselContainer>
            <div className='first-div' style={{width:"75%"}}>
                    <Carousel 
                        breakpoints={[
                            {
                            breakpoint: 800,
                            cols: 11,
                            rows: 1,
                            gap: 1,
                            loop: true,
                            autoplay: 1000
                            }
                        ]}
                        cols={11} // Display 10 items on the first page
                        rows={1}
                        gap={1}
                        loop
                        autoplay={false} >
                        <Carousel.Item style={{width:"20px", height: "20px",margin:"0"}}>
                            <CarouselItem>
                                <CarouselItemContent className='carouselItemContent activeCarouselItemContent'>
                                <GiMountaintop />
                                <span>
                                    Top of the world
                                </span>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent className='design' >
                                <GiFamilyHouse  />
                                <span>
                                    Design
                                </span>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent className='pool'>
                                <LiaSwimmingPoolSolid style={{
                                    fontSize:"20px"
                                }} />
                                <CarouselSpan>
                                    Swimming Pools
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='park'>
                                <PiParkFill style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    National Parks
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='windmill'>
                                <GiWindmill style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    WindMills
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='adapted'>
                                <LiaWheelchairSolid style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Adapted
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='key'>
                                <LuKey style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    New
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='alien'>
                                <GiSpaceship style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    OMG!
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='country-side'>
                                <GiVillage style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Country Side
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='camp'>
                                <TbCamper style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Campers
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='island'>
                                <GiIsland style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Islands
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='arctic'>
                                <FaRegSnowflake style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Arctic
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='surf'>
                                <MdSurfing style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Surfing
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='views'>
                                <GrOverview style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Amazing Views
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='breakfast'>
                                <GiCoffeeCup style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Bed & Breakfast
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='cave'>
                                <GiMountainCave style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Caves
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='tropical'>
                                <GiPalmTree style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Tropical
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='trending'>
                                <FaFireAlt style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Trending
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='city'>
                                <GiModernCity style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Iconic Cities
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='rooms'>
                                <MdBedroomParent style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Rooms
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='camping'>
                                <GiCampingTent style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Camping
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='mansion'>
                                <GiFamilyHouse style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Mansions
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='beach'>
                                <FaUmbrellaBeach style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Beach
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='earth-homes'>
                                <FaHouseTsunami style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Earth Homes
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='cabins'>
                                <GiHouse style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Cabins
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='luxery'>
                                <SiInfluxdb style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Luxery
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='MdOutlineSportsGolf'>
                                <MdOutlineSportsGolf style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Golf
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='castle'>
                                <MdCastle style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Castles
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='chef'>
                                <SiCodechef style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Chef's Kitchen
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='GiCastle'>
                                <GiCastle style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Historical Homes
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='desert'>
                                <PiCactusBold style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Deserts
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='dome'>
                                <FaLandmarkDome style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Domes
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>

                        <Carousel.Item style={{width:"200px", height: "200px"}}>
                            <CarouselItem>
                                <CarouselItemContent id='carouselItemContent' className='MdOutlineSportsGolf'>
                                <GiBowlingStrike style={{
                                    fontSize:"30px"
                                }} />
                                <CarouselSpan>
                                    Play
                                </CarouselSpan>
                                </CarouselItemContent>
                            </CarouselItem>
                        </Carousel.Item>
                        </Carousel>
                    </div>


                <div className="filter-div">
                    <FilterBtn className="filter-btn">
                        <span>
                            <IoFilterCircleOutline style={{ fontSize:"19px"}} /> 
                        </span>
                        <span>Filters</span>
                    </FilterBtn>
                </div>

                <div className="options-div">
                    <button className="options-btn"><p style={{
                        marginTop:"5px"
                    }}>Display total before taxes</p>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider">
                                <svg class="slider-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg> 
                            </span>
                        </label>
                    </button>
                </div>
            </CarouselContainer>
      </CarouselSection>
    </>
  );
}

export default Slider;
