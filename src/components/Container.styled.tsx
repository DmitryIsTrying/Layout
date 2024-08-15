import { styled } from "styled-components";

type ContainerPropsType = {
  colorTheme: Themes;
};

type Themes = {
  colorBack: string;
};

export const Container = styled.div<ContainerPropsType>`
  max-width: 280px;
  padding: 10px;
  border-radius: 15px;
  background-color: ${(props) => props.colorTheme.colorBack};
  box-shadow: 0px 4px 20px 5px #0000001a;
`;
