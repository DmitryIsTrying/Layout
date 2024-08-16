import { css, styled } from "styled-components";

type StyledBtnPropsType = {
  colorTheme: Themes;
  nonActive?: boolean;
};

type Themes = {
  colorBtn: string;
  colorTextBtn: string;
  colorShadow: string;
  colorHoverShadow: string;
};

export const StyledBtn = styled.a<StyledBtnPropsType>`
  text-decoration: none;
  background-color: ${(props) => props.colorTheme.colorBtn};
  color: ${(props) => props.colorTheme.colorTextBtn};
  font-family: Inter;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  width: 86px;
  height: 30px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  ${(props) =>
    props.nonActive &&
    css`
      cursor: not-allowed;

      img {
      }
    `}

  &:hover {
    box-shadow: 0px 0px 6px 3px ${(props) => props.colorTheme.colorHoverShadow};
  }

  &:last-of-type {
    background-color: transparent;
    border: 2px solid ${(props) => props.colorTheme.colorBtn};
    color: ${(props) => props.colorTheme?.colorBtn};
    &:hover {
      box-shadow: 0px 0px 6px 3px ${(props) => props.colorTheme.colorShadow}
        inset;
    }
  }
`;
