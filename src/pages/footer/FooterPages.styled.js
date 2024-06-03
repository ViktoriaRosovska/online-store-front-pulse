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
    outline: 2px solid green;
    color: blue;
  }

  > p {
    margin-top: 8px;
    outline: 2px solid red;
    color: blue;
  }
  > span {
    weigth: 700;
  }
`;

export const FooterItemBottom = styled.div`
  margin-bottom: 23px;
`;

export const FooterItemText = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const HighlightedWord = styled.span`
  font-weight: bold;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 36px;
  gap: 24px;
`;

export const FooterSectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  margin-left: 61px;

  @media (max-width: 1440px) {
    margin-left: 0px; 
  }

  > img {
    margin-bottom: 24px;
  }

  > a {
    margin-top: 60px;
  }
`;

export const FooterSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 23px;
`;


export const FooterSectionCenter = styled.div`
  display: flex;
  justify-content: center;
`;
