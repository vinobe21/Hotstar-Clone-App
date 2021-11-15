import styled from 'styled-components'; //npm install styled-components
import React from 'react'

const Login = (props) => {
    return (
        <Container>
            <Content>
                <SML>
                    <SmallLogoOne src="/images/sml-logo-one.svg" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</Description>
                    <SmallLogoTwo src="/images/sml-logo-two.png" />
                </SML>
                <BgImage />
            </Content>
        </Container>
    );
};

//section use Container
const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

//Content use div inside the section
const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;

//background image style
const BgImage = styled.div`
height: 100%;
width: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/login-background.jpg");
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;
`;

//small logo main div(SML)
const SML = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: column;
`;

//small logo main SML->image one
const SmallLogoOne = styled.img`
margin-left: 20px;
max-width: 600px;
display: block;
min-height: 1px;

`;

//SML->SignUp Button
const SignUp = styled.a`
    font-size: 19px;
    font-weight: bold;
    background-color: #0025ff;
    width: 100%;
    letter-spacing: 2px;
    padding: 16px 0;
    border: 1px solid transparent;
    border-radius: 15px;

    &:hover{
        background-color: #0483ee;
    }
`;
//SML->Description 
const Description = styled.p`
color: #ffffff;
font-size: 11px;
line-height: 16px;
padding: 3px;
`;
//SmallLogoTwo
const SmallLogoTwo = styled.img`
    max-width: 600px;
    display: inline-block;
    vertical-align: bottom;
    margin: 10px 20px;
    width: 100%;
`;
export default Login;
