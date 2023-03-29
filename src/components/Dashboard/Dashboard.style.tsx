import styled from 'styled-components';

interface DashboardingProps {
    paddingSm?: string
}
export const DashboardContainer = styled.div`
  .react-grid-item.react-grid-placeholder {
    background-color: transparent !important;
  }
`;

export const DashboardHeader = styled.div`

  .p-input-icon-left {
    width: 345px;

    i:first-of-type,
    svg:first-of-type,
    .p-input-prefix {
      left: 1rem;
    }

    .search {
      width: 345px;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      text-align: left;
      color: #222b3a !important;
      margin-bottom: 25px;
      margin-top: 25px;
      &::placeholder {
        color: #636465;
      }
    }
  }
`;

export const DashboardHeading = styled.div<DashboardingProps>`
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.15;
  color: #00467e;
  margin-bottom: 20px;
  margin-top: 20px;
@media(max-width:576px){
  padding-left: ${({ paddingSm }) => paddingSm ? paddingSm : ''}  !important;
}
  p{
    font-family: 'Poppins', sans-serif;
  }
  // .loans{
  // width: 345px;
  // }
  .loans-link {
    text-decoration: underline;
  }
`;
