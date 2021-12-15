import styled from 'styled-components'
import { c } from 'config'

export const AppWrapper = styled.div`
    background: #000;
    color: #fff;
    min-height: 100vh;
`

export const MainWrapper = styled.div`
    padding: 0;
`

export const MintWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-size: 100%;
    width: 100%;
    padding-right: var(--bs-gutter-x,.75rem);
    padding-left: var(--bs-gutter-x,.75rem);
    margin-right: auto;
    margin-left: auto;
    background-position: 50%;
    background-repeat: repeat;
    background-image: url("/background.png");
`

export const FormWrapper = styled.div`
    padding: 50px 30px;
    text-align: center;
    width: 70%;
    margin: 0 auto;
    border-radius: 7px;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: rgb(255, 255, 255); 
    background-color: rgb(0, 0, 0);
`

export const LogoWrapper = styled.div`
    font-size: 60px;
    line-height: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    color: #fff;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
`

export const ButtonWrapper = styled.button`
    font-size: 60px;
    line-height: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    color: #fff;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
`

export const Divider = styled.div`
    display: block;
    height: 1px;
    width: 80%;
    margin: 20px auto;
    background-color: rgb(255, 255, 255);
`

export const Title = styled.h1`
    color: rgb(255, 255, 255);
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
`

export const Description = styled.p`
    font-size: 18px;
    line-height: 1;
    width: 100%;
    margin: 20px auto;
`

export const Image = styled.img.attrs(({
    src: '/logo.png',
    height: '252px',
    alt: c.title
}))`
    max-width: 50%;
`

export const MintButton = styled.img.attrs(({
    src: '/mint.png',
    key: 'mint-button',
}))`
    height: 50%;
    width: 50%;
`
