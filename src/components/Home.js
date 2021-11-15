import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Tray from './Tray';

const Home = (props) => {
    return (
        <Container>
            <ImgSlider />
            <Tray />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    top: 72px;
    overflow-x: hidden;
    overflow-y: hidden;
    display: block;
    min-height: 100vh;
    &:after{
    background: linear-gradient(to bottom,#141b29,#0c111b 300px);
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
    }
`;
export default Home;
