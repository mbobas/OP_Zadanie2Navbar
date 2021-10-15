import React, {useState} from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from 'assets/logo.svg';
import {IoMdSearch} from 'react-icons/io';
import {MdNotificationsNone, MdAccountCircle} from 'react-icons/md'


const NavbarWrapper = styled.div`
    position: relative;
    width: 1440px;
    height: 72px;   
    background: ${({theme}) => theme.white};
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
`
const MainFrame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    position: absolute;
    width: 1280px;
    height: 40px;
    left: 80px;
    top: 16px;
`
const LeftFrame = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;


    position: static;
    min-width: 500px;
    height: 32px;

   // border: 2px solid red;
`
const RightFrame = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    position: static;
    width: 188px;
    height: 40px;
    left: 1092px;
    top: 0px;
`
const LeftFrameTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    height: 19px;
    //border: 1px solid green;
`
const LeftFrameTextWydarzenia = styled.div`
    width: 91px;
    height: 19px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-right: 32px;

`
const LeftFrameTextKontakt = styled.div`
    width: 60px;
    height: 19px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-right: 32px;
    color: #000000;
`
const LeftFrameTextWesprzyjNas = styled.div`
    width: 60px;
    height: 19px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    white-space: nowrap;
`
const LeftFrameLogoWrapper = styled.div`
    margin-right: 32px;
    width: 33px;
    height: 32px;


`
const StyledIcon = styled(Icon)`
    width: 32px;
    height: 32px;
    background: #000000;
`;

const IoMdSearchStyled = styled(IoMdSearch)`
    margin: 9.5px;
    width: 28px;
    height: 28px;
`;

const ButtonStyled = styled.button`
    width: 128px;
    height: 40px;
    border-radius: 20px;
    background: #9E1C1C;
    border: 1px solid white;
    margin-left: 30px;
`;

const ButtonTextStyled = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`;

const MdNotificationsNoneStyled = styled(MdNotificationsNone)`
    margin: 9.5px;
    width: 28px;
    height: 28px;
`;
const MdAccountCircleStyled = styled(MdAccountCircle)`
    margin: 9.5px;
    width: 28px;
    height: 28px;
`;


function Navbar () {
    const [isActive, setIsActive] = useState(true);

    return(
        <NavbarWrapper>
        <MainFrame>
            <LeftFrame>
                <LeftFrameLogoWrapper>
                <StyledIcon />
                </LeftFrameLogoWrapper>
                <LeftFrameTextWrapper>
                    <LeftFrameTextWydarzenia>Wydarzenia</LeftFrameTextWydarzenia>
                    <LeftFrameTextKontakt>Kontakt</LeftFrameTextKontakt>
                    <LeftFrameTextWesprzyjNas>Wesprzyj Nas</LeftFrameTextWesprzyjNas>
                </LeftFrameTextWrapper>
            </LeftFrame>    
            <RightFrame>
                <IoMdSearchStyled />
                {isActive 
                ? 
                <ButtonStyled onClick={() =>setIsActive(false)}>
                    <ButtonTextStyled>Zaloguj się</ButtonTextStyled>   
                </ButtonStyled>
                :
                <>
                <MdNotificationsNoneStyled />
                <MdAccountCircleStyled />
                </>
                }
            </RightFrame>
        </MainFrame>
    </NavbarWrapper>
    );
    }

  export default Navbar;