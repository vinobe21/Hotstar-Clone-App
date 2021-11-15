import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';

const ImgSlider = (props) => {
    const settings = {
        infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div>
            <Carousel {...settings}>
                <Warp>
                    <a>
                        <img src="/images/slider_image1.png" />
                    </a>
                </Warp>
                <Warp>
                    <a>
                        <img src="/images/slider_image2.png" />
                    </a>
                </Warp>
                <Warp>
                    <a>
                        <img src="/images/slider_image3.png" />
                    </a>
                </Warp>
                <Warp>
                    <a>
                        <img src="/images/slider_image4.png" />
                    </a>
                </Warp>

            </Carousel>
        </div>
    )
}

//Carousel style
const Carousel = styled(Slider)`
    margin: 0 auto;
    width: calc(100% - 80px);
    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
    &:hover{
            opacity: 1;
            transform: opacity 0.2s ease 0s;
        }
        
    }
    .slick-list{
        overflow: visible;
    }
    .slick-prev{
    left: -75px;
    }
    .slick-next{
        right: -75px;
    }
`;

const Warp = styled.div`
cursor: pointer;
position: relative;

a{
    position: relative;
    display: block;
    cursor: pointer;
    padding: 5px;
}
img{
    width: 100%;
    height: 100%;
}
`;


export default ImgSlider
