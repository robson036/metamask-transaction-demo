import "animate.css"
import styled from "styled-components"

const colors = {
    darkBlue: "#213242",
    mediumBlue: "#3c5a72",
    lightBlue: "#517490",
    yellow: "#e3a92b",
    gold: "#cd9a03",
    beige: "#e1c988",
}

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f9f9f9;
`

export const Header = styled.div`
    width: 100%;
    background-color: ${colors.darkBlue};
    padding: 10px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
`

export const PageTitle = styled.h1`
    font-size: 1.8rem;
    color: #ffffff;
`

export const Hero = styled.div`
    width: 100%;
    height: calc(100% - 59px);
    background-color: ${colors.mediumBlue};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MetamaskLogoImage = styled.img`
    width: 400px;
    animation: fadeIn 0.8s linear 0s;
`

export const CenteredColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    margin: 15px auto;
`

export const Status = styled.span`
    color: #fff;
    font-size: 1.8rem;
    margin: 0 3px;
    animation: fadeInUp 0.1s linear 0s;
`
export const StatusValue = styled(Status)`
    color: ${({ connected }: { connected: boolean }) =>
        connected ? "#48c78e" : "#f14668"};
`

export const Button = styled.div`
    padding: 10px 15px;
    background-color: #48d1b2;
    border: none;
    outline: none;
    border-radius: 8px;
    font-size: 1rem;
    margin: 0 5px;
    color: #fff;
    cursor: pointer;
    transition: linear 0.2s;
    animation: fadeInUp 0.1s linear 0s;

    &:hover {
        opacity: 0.33;
    }

    &:active {
        transform: translateY(2px);
    }
`

export const TextAdvice = styled.h3`
    color: #ffffff;
    font-size: 1rem;
`
export const TextAdviceTitle = styled.span`
    color: #f14668;
    font-size: 1rem;
    animation: fadeInUp 0.1s linear 0s;
`

export const accountInfo = styled(Status)`
    font-size: 1.2rem;
    animation: fadeInUp 0.1s;
`
