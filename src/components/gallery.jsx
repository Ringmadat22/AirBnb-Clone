import React from 'react';
import Carousel from '../components/carousel'; // Import the Carousel component
import { FaStar } from "react-icons/fa6";
import styled from 'styled-components';

const ImageGallery = () => {

    const CarouselContent = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:20px;
    `

    const H1 = styled.h3`
    font-size:1rem;
    font-weight:500;
    color:black;
    `

    const Span = styled.span`
    font-size:1rem;
    font-weight:300;
    color:black;
    `

    const P = styled.p`
    font-size:0.8rem;
    font-weight:"300";
    color:gray;
    `


  const images = [
    'https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1613323593608-abc90fec84ff?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Add more image URLs as needed
  ];

  return (
    <>
        <section className='carousel-section' style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
        }}>
            <div className='carousel-container' style={{
                display:"flex",
                justifyContent:"space-between",
                width:"95%",
                padding:"30px 0",
            }}>
                <div>
                    <Carousel images={images} />
                    <CarouselContent className='Carousel-content'>
                        <H1>High Mountains</H1>
                        <Span><FaStar style={{
                            fontSize:"15px"
                        }} /> 4.98</Span>
                    </CarouselContent>

                    <P>9,222 kilometers away</P>
                    <P>May 22-29</P>

                    <h4 style={{
                        color:'#323131',
                        fontWeight:'400'
                    }}><span style={{
                        color:'black',
                        fontWeight:'900',
                        fontSize:'1rem'
                    }}>75$</span> night</h4>
                </div>
                <div>
                    <Carousel images={images} />
                    <CarouselContent className='Carousel-content'>
                        <H1>High Mountains</H1>
                        <Span><FaStar style={{
                            fontSize:"15px"
                        }} /> 4.98</Span>
                    </CarouselContent>

                    <P>9,222 kilometers away</P>
                    <P>May 22-29</P>

                    <h4 style={{
                        color:'#323131',
                        fontWeight:'400'
                    }}><span style={{
                        color:'black',
                        fontWeight:'900',
                        fontSize:'1rem'
                    }}>75$</span> night</h4>
                </div>

                <div>
                    <Carousel images={images} />
                    <CarouselContent className='Carousel-content'>
                        <H1>High Mountains</H1>
                        <Span><FaStar style={{
                            fontSize:"15px"
                        }} /> 4.98</Span>
                    </CarouselContent>

                    <P>9,222 kilometers away</P>
                    <P>May 22-29</P>

                    <h4 style={{
                        color:'#323131',
                        fontWeight:'400'
                    }}><span style={{
                        color:'black',
                        fontWeight:'900',
                        fontSize:'1rem'
                    }}>75$</span> night</h4>
                </div>

            </div>






            <div className='carousel-container' style={{
                display:"flex",
                justifyContent:"space-between",
                width:"95%",
                padding:"30px 0",
            }}>
                <div>
                    <Carousel images={images} />
                    <div className='Carousel-content'>
                        <h3>High Mountains</h3>
                        <span><FaStar /> 4.98</span>
                    </div>

                    <p>9,222 kilometers away</p>
                    <p>May 22-29</p>

                    <h2>75$ night</h2>
                </div>

                <div>
                    <Carousel images={images} />
                    <div className='Carousel-content'>
                        <h3>High Mountains</h3>
                        <span><FaStar /> 4.98</span>
                    </div>

                    <p>9,222 kilometers away</p>
                    <p>May 22-29</p>

                    <h2>75$ night</h2>
                </div>

                <div>
                    <Carousel images={images} />
                    <div className='Carousel-content'>
                        <h3>High Mountains</h3>
                        <span><FaStar /> 4.98</span>
                    </div>

                    <p>9,222 kilometers away</p>
                    <p>May 22-29</p>

                    <h2>75$ night</h2>
                </div>

                <div>
                    <Carousel images={images} />
                    <div className='Carousel-content'>
                        <h3>High Mountains</h3>
                        <span><FaStar /> 4.98</span>
                    </div>

                    <p>9,222 kilometers away</p>
                    <p>May 22-29</p>

                    <h2>75$ night</h2>
                </div>

                <div>
                    <Carousel images={images} />
                    <div className='Carousel-content'>
                        <h3>High Mountains</h3>
                        <span><FaStar /> 4.98</span>
                    </div>

                    <p>9,222 kilometers away</p>
                    <p>May 22-29</p>

                    <h2>75$ night</h2>
                </div>
            </div>
        </section>
    </>
  );
}

export default ImageGallery; // Export the ImageGallery component as default
