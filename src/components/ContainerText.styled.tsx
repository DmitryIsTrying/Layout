import { styled } from "styled-components";

type ContainerTextPropsType = {
  colorTheme: Themes;
};

type Themes = {
  colorTextH: string;
  colorTextP: string;
};

export const ContainerText = styled.div<ContainerTextPropsType>`
  min-width: 160px;
  margin: 20px 10px 12px;
  text-align: left;
  h2 {
    font-size: 1rem;
    color: ${(props) => props.colorTheme.colorTextH};
    font-weight: 700;
    line-height: 19.36px;
    margin-bottom: 20px;
  }
  p {
    color: ${(props) => props.colorTheme.colorTextP};
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 19px;
  }
`;
