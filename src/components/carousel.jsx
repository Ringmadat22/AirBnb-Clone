import React from 'react';
import '/Users/ringo/Desktop/airbnbclone/src/App.css'
import { GiMountaintop } from 'react-icons/gi';
import { IoFilterCircleOutline } from 'react-icons/io5';
import { LuKey } from 'react-icons/lu';
import Carousel from 'react-grid-carousel';
import styled from 'styled-components';

<GiMountaintop />;

const CarouselSection = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:blue;
    border-top:gray;
`

const CarouselContainer = styled.div`
    width:95%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:brown;
`

const CarouselItem = styled.div`
  width: 100px;
  height: 60px;
  background-color: red;
  margin:0;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const CarouselItemContent = styled.div`
  width: 100px;
  height: 50px;
  background-color: yellow;
`;

const FilterBtn = styled.button`
    padding:14px 7px 0;
    border:1px solid gray;
    display:flex;
    justify-content:space-between;
    width:90px;
    cursor:pointer;
    border-radius:7px;
    height:5vh;
    font-size:13px;
`

function Slider() {
  return (
    <>
        <CarouselSection style={{
            width:"100%",
            background:"blue"
        }}>
            <CarouselContainer>
                <div className="first-div" style={{width:"75%"}}>
                    <Carousel
                    breakpoints={[
                        {
                        breakpoint: 1200,
                        cols: 3,
                        rows: 1,
                        gap: 0,
                        loop: false,
                        autoplay: 100
                        }
                    ]}
                    cols={10} 
                    rows={1}
                    gap={0}
                    loop
                    autoplay={false}
                    >
                    {[...Array(30)].map((_, index) => (
                        <Carousel.Item key={index} style={{ width: '100px', height: '100px' }}>
                        <CarouselItem>
                            <CarouselItemContent>
                            <LuKey />
                            <span>New</span>
                            </CarouselItemContent>
                        </CarouselItem>
                        </Carousel.Item>
                    ))}
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
                        marginTop:"7px"
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
