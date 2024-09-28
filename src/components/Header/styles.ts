import styled from "styled-components";
import breakpoints from "../../styles/breakPoints";


export const TopHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    width: 100vw;
    height: 56px;
    background-color: #4C16C9;

    p {
        color: #ffffff;
    }
`

export const BottomHeader = styled.div`
    width: 100%;
    max-width: 1008px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 40px 0;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 32px;

    .about {
        display: flex;
        justify-content: space-between;
    }

    .filter {
        display: flex;
        gap: 7px;

        input {
            
            width: 200px;
            height: 40px;
            padding-left: 11px;
            font-size: 14px;
            border: 1px solid #C5D2E0;
            outline: none;
        }

        select {
            
            width: 200px;
            height: 40px;
            padding-left: 11px;
            font-size: 14px;
            color: #0C1932;
            border: 1px solid #C5D2E0;
            outline: none;
        }
    }
    
    @media ${breakpoints.sm} {

        h1 {
            align-self: center;
        }

        .about {
            flex-direction: column;
        }

        .filter {
            flex-direction: column;
        }
        
    }

 @media ${breakpoints.xs} {
    h1 {
        font-size: 25px;
    }

    .filter {
        input {
            width: 100%;
        }

        select {
            width: 100%;
        }
    }
 }
`