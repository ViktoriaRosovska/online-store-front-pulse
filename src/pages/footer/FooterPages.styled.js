import styled from "styled-components";

export const FooterPages = styled.div`
  > h3 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 24px;
    text-align: center;

    @media screen and (min-width: 1440px) {
      font-size: 36px;
    }

    > p {
      margin-bottom: 24px;
    }
  }
`;
export const FooterList = styled.ul`
li {
  margin-bottom: 24px; 
  list-style-type: disc;
  list-style-position: outside; 
  margin-left: 24px;
  font-size: 16px;
}

h4 {
  font-weight: bold; 
  margin-bottom: 24px; 
  font-size: 20px;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
}
}`;

export const FooterListNoBottom = styled.ul`
li {

  margin-bottom: 0px; 
  list-style-type: disc;
  list-style-position: outside; 
  margin-left: 24px;
  font-size: 16px;
}

h4 {
  margin-top: 24px; 
  font-weight: 500;  
  margin-bottom: 24px; 
  font-size: 20px;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
}
}`;

export const FooterListNoMarker = styled.ul`
li {
  margin-bottom: 24px; 
  list-style-type: none;
  margin-left: 0px;
  font-size: 16px;
}

h4 {
  font-weight: 500; 
  margin-bottom: 24px; 
  margin-top: 36px; 
  font-size: 20px;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
}
}`;

export const FooterItem = styled.li`
  > li {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 240px;
  }

  > p {
    margin-top: 8px;
  }
  > span {
    weigth: 700;
  }
`;

export const HighlightedWord = styled.span`
  font-weight: bold;
`;

// const FooterPages = styled.footer`
//   background-color: var(--black-bg-color);
//   background-image: url(${footerBackground});
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: relative;
//   border-top-left-radius: 36px;
//   border-top-right-radius: 36px;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.2);
//     border-top-left-radius: 36px;
//     border-top-right-radius: 36px;
//   }
// `;
// const FooterContainer = styled.div``;

// export default FooterPages;
