import { styled } from "styled-components";
import { Container } from "../Container.styled";
import { Painting } from "../Painting.styled";
import { ContainerText } from "../ContainerText.styled";
import { StyledBtn } from "../StyledBtn.styled";

type ModelCardPropsType = {
  colorTheme: Themes;
};

type Themes = {
  colorBtn: string;
  colorTextBtn: string;
  colorTextP: string;
  colorTextH: string;
  colorShadow: string;
  colorBack: string;
  colorHoverShadow: string;
};

export const ModelCard = (props: ModelCardPropsType) => {
  return (
    <Container colorTheme={props.colorTheme}>
      <Painting />
      <ContainerText colorTheme={props.colorTheme}>
        <h2>Headline</h2>
        <p>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </p>
        <ContainerBtn>
          <StyledBtn nonActive colorTheme={props.colorTheme}>
            See more
          </StyledBtn>
          <StyledBtn thisLink colorTheme={props.colorTheme}>
            Save
          </StyledBtn>
        </ContainerBtn>
      </ContainerText>
    </Container>
  );
};

const ContainerBtn = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
`;
