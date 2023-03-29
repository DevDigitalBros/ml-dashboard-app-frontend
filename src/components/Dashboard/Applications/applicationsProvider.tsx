import styled from 'styled-components';
import nodata from '../../../assets/icons/nodata.png';
import BackgroundImage from '../../../assets/images/application-background.svg';

interface CardProps {
    applicationBackgroundImage?: Boolean;
    children?: any;
    height?: any;
}
interface HeaderProps {
    marginBottom?: string;
}

export const DashboardCard = styled.div<CardProps>`
  padding: 24px;
  border-radius: 4px;
  border: solid 1px #dfe6eb;
  background-color: #fff;
  min-height: ${({ height }: any) => height ? height : '350px'};
  height: 100%;
  cursor: grabbing;
  background-image: ${props =>
        props.applicationBackgroundImage === true ? `url(${BackgroundImage})` : ''};
  background-repeat: no-repeat;
  background-size: cover;
  z-index:2;
  position:relative;
 overflow-y:hidden
`;

export const DashboardCardHeader = styled.div<HeaderProps>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? `${marginBottom}` : '5px')};
  height : 25.3px;

  h3 {
    font-family: 'Roboto Slab', serif;
    font-size: 18px;
    font-weight: 500;
    height: 24px;

    color: ${props => (props.color === 'green' ? '#3ee1c7' : '#00467e')};

    span{
      padding: 3px 6px;
      height: 20px;
      border-radius: 50%;
      margin-left: 4px;
      font-family: 'Inter', sans-serif;
     font-size: 11.7px;
     font-weight: 600;
      color: #636465;
      position : absolute;
      background-color: #f0f3f4;
      margin-top:3px;

}
    }
  
`;


interface IconProps {
    fontSize?: string;
    left?: string;
    top?: string;
    Color?: string;
    backgroundColor?: string;
    hoverColor?: string;
    hoverbackgroundColor?: string;
    borderColor?: string;
    hoverborderColor?: string;
    paddingTop?: string;
}
export { nodata };
    
    
export const Icons = styled.div<IconProps>`
 
  width: 34px;
  height: 34px;
  color:${({ Color }) => Color ? Color : '#00467e'};
  background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : '#f0f3f4'};
  border:2px solid ${({ borderColor }) => borderColor ? borderColor : '#f0f3f4'}; 
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:50px;
  position: relative;
i{
  font-size:0.9rem !important;
  padding-top:${({ paddingTop }) => paddingTop ? paddingTop : ''};
  position: absolute;
  top: 50%;
  padding: 0; 
  left: 50%;
  transform: translate(-50%, -50%);
}
      &:hover{
        background-color:${({ hoverbackgroundColor }) => hoverbackgroundColor ? hoverbackgroundColor : '#f0f3f4'} ;
        color:${({ hoverColor }) => hoverColor ? hoverColor : '#00467e'};
        border-color:${({ hoverborderColor }) => hoverborderColor ? hoverborderColor : ''};
        cursor:pointer !important;
      }
    
`

export const EmptyContainer = styled.div`
  .container-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    padding: 5px 5px;
    p {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 500;
      text-align: left;
      color: #949aa5;
    }
    img {
      width: 44px;
      height: 44px;
      margin-bottom: 24px;
    }
  }

  .container {
    display: flex;
    align-items: center;
    margin-top: auto;
    position: fixed;
    bottom: 18px;
    right: 24px;
    justify-content: flex-end;

    p {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.8;
      color: #00467e;
      padding: 0 4px;
    }
  }
`;

export const ActionContainer = styled.div`
  
  cursor: pointer !important;
  position: absolute;
  bottom: 20px;
   right: 24px;
  
`;


export const ActionContainer2 = styled.div`
  cursor: pointer !important;
  position: absolute;
  bottom: 20px;
   right: 24px;
  /* div{
    cursor: pointer !important;
    width: 100%;
    z-index: 100;
   display: flex;
   justify-content: flex-end;
   position: absolute;
   bottom: 20px;
   right: 24px;
  } */
`;
export const ApplicationCardLayout = styled.div`
  padding-top: 0.3rem;
  margin-bottom: 0.2rem;
  .heading {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 2px;
  }
  .text {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: #fff;
  }
  .containq{
    cursor: pointer;
  }
  .containerp {
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }
  .contain {
    display: flex;
    .p-button {
      font-size: 10px;
      margin: 0 0 0 2px;
      padding: 4.6px 12.1px;
      border-radius: 4px;
      background-color: #3ee1c7;
    }
  }
  .new {
    margin: 0 0 0 2px;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    background-color: #3ee1c7;
    font-family: 'Inter', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    text-align: center;
    color: #fff;

   

  }

   
`;
