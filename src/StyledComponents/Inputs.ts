import {styled} from "styled-components";

const breakpoints = {md: "768px", lg:"1024px"}
const media = {md:`(min-width: ${breakpoints.md})`, lg:`(min-width:${breakpoints.lg})`}

//Landing Page
 export const InputHolder = styled.div`
  height: 54.2%;
  width: 94%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4%;

  @media ${media.md} {
   width: 50.8%;
   height: 100%;
  }

  @media ${media.lg} {
   
  width: 62.3%;
  }
  
 `;

 export const SearchInput = styled.input.attrs({type: 'text', placeholder:'Try "Civil Engineer"'})`
  width: 46.4%;
  height: 100%;
  border-style: none;
  font-size: 16px;
  
  &:focus {
   outline: none;
   border-style: none;
  }
  
  &::placeholder{
   font-size: 16px;
   //color: blue;
  }
  &::-webkit-input-placeholder{
   font-size: 16px;
  }
  &::-ms-input-placeholder{
   font-size: 16px;
  }

  
 `;
