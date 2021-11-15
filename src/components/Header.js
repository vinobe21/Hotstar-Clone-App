import React from 'react'
import styled from 'styled-components';
import { useEffect } from 'react';
import { auth, provider } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/user/userSlice';

const Header = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                history.push("/home");
            }
        });
    }, [userName]);

    const handleAuth = () => {
        if (!userName) {
            auth.signInWithPopup(provider).then((result) => {
                setUser(result.user);
                console.log(result.user);
            }).catch((error) => {
                alert(error.message);//when click login button show popup login form
            });
        }//login function if userName is not exist
        else if (userName) {
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                history.push('/')
            }).catch((error) => {
                alert(error.message);
            });
        }//logout function if userName is exist
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })//dispatch the user details like name, email, photoURL
        );
    };

    return (
        <Nav>
            <WrapIcon>
                <Icon>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </Icon>
            </WrapIcon>
            <Logo>
                <img src='/images/logo.svg' />
            </Logo>
            <NavMenu>
                <StyleUl>
                    <DropDownLi>
                        <StyleA>
                            TV
                        </StyleA>
                        <DropDownContent>
                            <DropDownLink>Quix</DropDownLink>
                            <DropDownLink>Star Vijay</DropDownLink>
                            <DropDownLink>StarPlus</DropDownLink>
                            <DropDownLink>Star Maa</DropDownLink>
                            <DropDownLink>more...</DropDownLink>
                        </DropDownContent>
                    </DropDownLi>
                    <DropDownLi>
                        <StyleA>
                            Movies
                        </StyleA>
                        <DropDownContent>
                            <DropDownLink>Hindi</DropDownLink>
                            <DropDownLink>Telugu</DropDownLink>
                            <DropDownLink>Malayalam</DropDownLink>
                            <DropDownLink>Tamil</DropDownLink>
                            <DropDownLink>English</DropDownLink>
                            <DropDownLink>Kannada</DropDownLink>
                        </DropDownContent>
                    </DropDownLi>
                    <DropDownLi>
                        <StyleA>
                            Sports
                        </StyleA>
                        <DropDownContent>
                            <DropDownLink>Cricket</DropDownLink>
                            <DropDownLink>Football</DropDownLink>
                            <DropDownLink>Badminton</DropDownLink>
                            <DropDownLink>Tennis</DropDownLink>
                        </DropDownContent>
                    </DropDownLi>
                    <StyleLi>
                        <StyleA>
                            Disney+
                        </StyleA>
                    </StyleLi>
                    <StyleLi>
                        <StyleA>
                            <img src='/images/kids.svg' />
                        </StyleA>
                    </StyleLi>
                    {/* <DropDownLi>
                        <StyleA>Home 3</StyleA>
                        <DropDownContent>
                            <SubA>link 1</SubA>
                            <SubA>link 2</SubA>
                            <SubA>link 3</SubA>
                        </DropDownContent>
                    </DropDownLi> */}
                </StyleUl>
            </NavMenu>
            <Search>
                <input type="search" placeholder="Search" />
                <SearchIcon>
                    <i className="search-icon"></i>
                </SearchIcon>
            </Search>
            <Subscribe>
                Subscribe
            </Subscribe>
            {
                !userName ? (
                    <Login onClick={handleAuth} >Login</Login>
                ) : (
                    <>

                        <Logout>
                            <UserImg src={userPhoto} art={userName} ></UserImg>
                            <DropDown>
                                <DropDownLink>Watchlist</DropDownLink>
                                <DropDownLink>My Account</DropDownLink>
                                <DropDownLink onClick={handleAuth}>Log Out</DropDownLink>
                            </DropDown>
                        </Logout>

                    </>
                )
            }
        </Nav>
    )
};

// Header Nav
const Nav = styled.nav`
    position: fixed;
    display: flex;
    padding: 0 50px;
    margin: 0 auto;
    min-height: 72px;
    background-color: #131a27;
    align-content: space-between;
    align-items: center;
    left: 0px;
    top: 0px;
    right: 0px;
    z-index: 3;
`;

// Header Logo 
const Logo = styled.a`
    padding: 0px;
    display: inline-block;
    padding-bottom: 10px;
    cursor: pointer;
    img {
        display: block;
        width: 100%;
    }
`;

//Header Nav Menu Items
const NavMenu = styled.div`
    align-items: center;
    height: 100%;
    flex-flow: row nowrap;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-left: 25px;
    margin-right: 0px;

    @media (max-width: 768px){
        display: none;
    }
`;

const StyleUl = styled.ul`
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    padding: 0px;
    background-color: #131a27;
    font-size: 16px;
    font-weight: 400;
    text-transform: none;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    padding: 20px 15px 10px;
    line-height: normal;
    
    
`;
const StyleLi = styled.li`
    float: left;
    height: 100%;
    padding: 10px 15px;
    cursor: pointer;
    
    
`;
const DropDownContent = styled.div`
    display: none;
    position: absolute;
    min-width: fit-content;
    z-index: 1;
    cursor: pointer;

    height: auto;
    border-radius: 4px;
    background-color: #192133;
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 22%);
    font-size: 14px;
    //margin-top: 20px;
    // top: 66px;
    // left: 122px;
    
      
}
`;
const DropDownLi = styled(StyleLi)`
    display: block;
    &:hover  ${DropDownContent} {
        display: block;
        cursor: pointer;
    }
`;
const StyleA = styled.a`
    display: block;
    text-align: center;
    text-decoration: none;
    color: rgb(255 255 255 / 80%);
    &:hover {
        color: #ffffff;
    }
`;
const DropDownLink = styled(StyleA)`
    text-decoration: none;
    display: block;
    text-align: left;
    background-color: #192133;
    padding: 10px;
    cursor: pointer;

    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
    color: #fff;
    opacity: 1;
    padding: 10px 20px;
    white-space: nowrap;
    

    &:hover{
        background-color: #0c111b;


    }
`;
// Login Component
const Login = styled.a`
    font-weight: 500;
    text-transform: uppercase;
    color: rgb(255 255 255 / 80%);
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    padding: 13px 0;
    margin-left: 15px;
    opacity: 1;
    font-size: 14px;
    &:hover {
        color: #ffffff;

    }
`;

const Search = styled.div`
margin-left: auto;
position: relative;
z-index: 1;

input{
    position: relative;
    width: 240px;
    height: 32px;
    border: none;
    border-bottom: 1px solid #ffffff;
    color: rgb(255 255 255 / 80%);
    font-size: 16px;
    outline: 0;
    padding: 0 28px 0 0px;
    border-radius: 0;
    background: none;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    opacity: 1;
    overflow: visible;
    // &:active {
    // width: 360px;
    // }
    &:focus{
        border-bottom: 1px solid #1f80e0;
        width: 360px;
    }
}
`;

const SearchIcon = styled.div`
    display: inline-block;
    position: absolute;
    top: 7px;
    right: 0px;
    pointer-events: none;
    height: 15px;
    width: 16px;
    opacity: .7;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    transform: translateY(1px);

    i {
    background: url("/images/search.svg") no-repeat;
    display: inline-block;
    width: 100%;
    height: 23px;
    background-position: 50% 50%;
    margin-top: -3px;
    }
`;

const Subscribe = styled.button`
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    background: #1f80e0;
    border: none;
    position: relative;
    outline: none !important;
    font-size: 11px;
    margin: 15px 0 15px 20px;
    padding: 0 12px;
    letter-spacing: 0.2px;
    font-weight: 700;
    height: 24px;
    line-height: 24px;
    border-radius: 4px;
    cursor: pointer;
`;

const WrapIcon = styled.div`
cursor: pointer;
`;
const Icon = styled.div`
    position: relative;
    padding: 20px;
    margin-left: -10px;

    span {
    width: 18px;
    height: 2px;
    background: rgb(255 255 255 / 60%);
    display: block;
    margin 3px;
    }
`;
const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: unset;
    display: inline-block;
    margin-left: 15px;
`;

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: #192133;
    font-size: 14px;
    width: 100px;
    display: none;
    &:hover{
        background-color: #0c111b;
    }
`;

const Logout = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    &:hover{
        ${DropDown} {
            display: block;
        }
    }
`;
export default Header;
