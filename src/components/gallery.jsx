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
    'https://images.unsplash.com/photo-1710415273471-24431054c4da?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=3475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


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
                        fontWeight:'400',
                        marginTop:'10px',
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
                        fontWeight:'400',
                        marginTop:'10px',
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
                        fontWeight:'400',
                        marginTop:'10px',
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
                        fontWeight:'400',
                        marginTop:'10px',
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
                        fontWeight:'400',
                        marginTop:'10px',
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
                        fontWeight:'400',
                        marginTop:'10px',
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
                        fontWeight:'400',
                        marginTop:'10px',
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
                        fontWeight:'400',
                        marginTop:'10px',
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
                        fontWeight:'400',
                        marginTop:'10px',
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
                        fontWeight:'400',
                        marginTop:'10px',
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
                        fontWeight:'400',
                        marginTop:'10px',
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
                        fontWeight:'400',
                        marginTop:'10px',
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
                        fontWeight:'400',
                        marginTop:'10px',
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
                        fontWeight:'400',
                        marginTop:'10px',
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
                        fontWeight:'400',
                        marginTop:'10px',
                    }}><span style={{
                        color:'black',
                        fontWeight:'900',
                        fontSize:'1rem'
                    }}>75$</span> night</h4>
                </div>
            </div>

            <div className='button-div'>
                <ShowMapButton >show map</ShowMapButton>
            </div>
            

            
        </section>
    </>
  );
}

export default ImageGallery; // Export the ImageGallery component as default

const ShowMapButton = styled.button`
    background-color:#000;
    color:#fff;
    position:fixed;
    padding:20px 60px
`