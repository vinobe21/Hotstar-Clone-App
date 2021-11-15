import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Tray = (props) => {
    const settings = {
        infinity: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true
    };
    return (

        <div>
            <TrayContainer >
                <TrayWrapper>
                    <TrayCarousel>
                        <Container>
                            <TrayTitle>
                                Continue Watching
                            </TrayTitle>
                        </Container>
                        <SliderContainer>
                            <Carousel {...settings}>
                                <Wrap>
                                    <a>
                                        <img src="/images/Continue/1.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Continue/2.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Continue/3.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Continue/4.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Continue/5.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Continue/6.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Continue/1.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Continue/2.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Continue/3.png" />
                                    </a>
                                </Wrap>
                            </Carousel>
                        </SliderContainer>
                    </TrayCarousel>
                </TrayWrapper>
            </TrayContainer>
            {/* end of Continue Watching */}
            {/* Watch List */}
            <TrayContainer >
                <TrayWrapper>
                    <TrayCarousel>
                        <Container>
                            <TrayTitle>
                                Watch List
                            </TrayTitle>
                        </Container>
                        <SliderContainer>
                            <Carousel {...settings}>
                                <Wrap>
                                    <a>
                                        <img src="/images/Watchlist/1.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Watchlist/2.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Watchlist/3.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Watchlist/4.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Watchlist/5.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Watchlist/6.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Watchlist/1.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Watchlist/2.png" />
                                    </a>
                                </Wrap>
                            </Carousel>
                        </SliderContainer>
                    </TrayCarousel>
                </TrayWrapper>
            </TrayContainer>
            {/* End of Watch List */}
            {/* Latest movies */}
            <TrayContainer >
                <TrayWrapper>
                    <TrayCarousel>
                        <Container>
                            <TrayTitle>
                                Latest & Trending
                            </TrayTitle>
                        </Container>
                        <SliderContainer>
                            <Carousel {...settings}>
                                <Wrap>
                                    <a>
                                        <img src="/images/Latest/1.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Latest/1.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Latest/1.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Latest/2.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Latest/3.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Latest/4.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Latest/5.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Latest/6.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Latest/1.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Latest/2.png" />
                                    </a>
                                </Wrap>
                            </Carousel>
                        </SliderContainer>
                    </TrayCarousel>
                </TrayWrapper>
            </TrayContainer>
            {/* End of Latest */}
            {/* Best in Sports */}
            <TrayContainer >
                <TrayWrapper>
                    <TrayCarousel>
                        <Container>
                            <TrayTitle>
                                Best in Sports
                            </TrayTitle>
                        </Container>
                        <SliderContainer>
                            <Carousel {...settings}>
                                <Wrap>
                                    <a>
                                        <img src="/images/Sports/1.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Sports/2.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Sports/3.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Sports/4.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Sports/5.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Sports/6.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Sports/7.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Sports/8.png" />
                                    </a>
                                </Wrap>



                            </Carousel>

                        </SliderContainer>
                    </TrayCarousel>
                </TrayWrapper>
            </TrayContainer>
            {/* End of Watch List */}
            {/* Star Vijay Shows */}
            <TrayContainer >
                <TrayWrapper>
                    <TrayCarousel>
                        <Container>
                            <TrayTitle>
                                Star Vijay Shows
                            </TrayTitle>
                        </Container>
                        <SliderContainer>
                            <Carousel {...settings}>
                                <Wrap>
                                    <a>
                                        <img src="/images/Populer/1.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Populer/2.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Populer/3.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Populer/4.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Populer/5.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Populer/6.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Populer/1.png" />
                                    </a>
                                </Wrap>
                                <Wrap>
                                    <a>
                                        <img src="/images/Populer/2.png" />
                                    </a>
                                </Wrap>



                            </Carousel>

                        </SliderContainer>
                    </TrayCarousel>
                </TrayWrapper>
            </TrayContainer>
            {/* End of Watch List */}

        </div>







    )
}


const TrayContainer = styled.div`
    padding-top: 15px;
    //padding-bottom: 45px;
    max-width: 1170px;
    margin: 0 auto;
    position: relative;

    @media only screen and (min-width: 1170px)
    {
        max-width: calc(100vw - 100px);
        //height: 200px;
    }
    @media only screen and (min-width: 769px) and (max-width: 1260px)
    {
        max-width: 100%;
        padding: 15px 10px 45px;
        margin: 0 80px 0 35px;
        height: 100px;
    }
    @media only screen and (max-width: 479px)
    {
        padding-top: 0;
        padding-left: 0;
        height: 100px;
    }
`;

const TrayWrapper = styled.div`
    padding: 0px;
    min-height: unset;
`;

const TrayCarousel = styled.div`
padding: 0;
`;

const Container = styled.div`
    width: initial;
    padding: 0;
    margin-right: auto;
    margin-left: auto;

    @media only screen and (max-width: 479px){
        padding: 10px 0 0 0;
    }
`;

const TrayTitle = styled.h2`
    padding: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
    margin: 0;
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    text-transform: none;

    &:before{
    content: " ";
    display: table;
    }

    &:after{
    clear: both;
    }    
`;

const SliderContainer = styled.div`
    position: relative;
    padding-top: 15px;
`;

const Carousel = styled(Slider)`
position: relative;

.slick-slide{
    padding-bottom: 5px;
    margin-right: 10px;
    outline: none !important;
    float: left;
    height: 100%;
    min-height: 1px;
    width: 145px !important;
}
.slick-list{
    height: 130px;
}
}
`;
const Wrap = styled.div`
    padding-bottom: calc(.56471 * 100%);

    background: #192133;
    overflow: hidden;
    position: relative;
    transform: translate3d(0, 0, 0);

    backface-visibility: hidden;
    border-radius: 5px;
    transition: transform .25s cubic-bezier(0.33, 0.04, 0.63, 0.93);
    
    img{
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
    border-radius: 5px;
    display: inline-block;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    }

`;

export default Tray;
