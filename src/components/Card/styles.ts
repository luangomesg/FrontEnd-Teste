import styled from "styled-components";
import breakpoints from "../../styles/breakPoints";

export const Container = styled.div`
    width: 100%;
    height: 726px;
    max-width: 1008px;
    display: grid;
    grid-template-columns: repeat(4, 240px);
    gap: 16px;


    .card {
    
        max-height: 355px;
        border-radius: 6px;
        box-shadow: 0px 4px 8px 0px #0C19321F;

        

        .card-image {
            background-color: #ABBBCC;
            width: 100%;
            height: 160px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px 6px 0 0;
        }

        .card-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            max-height: 200px;
            gap: 16px;
            padding: 16px 16px 20px 16px;
            
            h2 {
                font-weight: 600;
                font-size: 18px;
                height: 54px;
                
            }

            p {
                font-weight: 600;
                font-size: 12px;
            }

            span {
                font-weight: 400;
                font-size: 14px;
            }

            .money-box {
                display: flex;
                justify-content: space-between;

                >div {
                    text-align: center;
                }
            }
        }

        .award-box {
            display: flex;
        }

    }

    @media ${breakpoints.lg} {
            grid-template-columns: repeat(3, 240px);
            height: 100%;
            justify-content: center;
            
        }

    @media ${breakpoints.md} {
        grid-template-columns: repeat(2, 240px);
    }

    @media ${breakpoints.sm} {
        grid-template-columns: repeat(1, 80%);
    }

    @media ${breakpoints.xs} {
        grid-template-columns: repeat(1, 100%);

        .card {
            .card-content {

                h2 {
                font-size: 15px;
                }
        }
            }

        
    }
`