import { styled } from "styled-components";
import "./App.css";
import { ModelCard } from "./components/ModelCard/ModelCard";
import { layoutsTheme } from "./styles/Theme.styled";

function App() {
  return (
    <div className="App">
      <ContainerBig>
        <ModelCard colorTheme={layoutsTheme.colorsTheme.standart} />
        <ModelCard colorTheme={layoutsTheme.colorsTheme.balanced} />
        <ModelCard colorTheme={layoutsTheme.colorsTheme.easyDay} />
        <ModelCard colorTheme={layoutsTheme.colorsTheme.strict} />
        <ModelCard colorTheme={layoutsTheme.colorsTheme.reddish} />
        <ModelCard colorTheme={layoutsTheme.colorsTheme.grayWorld} />
        <ModelCard colorTheme={layoutsTheme.colorsTheme.drakula} />
      </ContainerBig>
    </div>
  );
}

export default App;

const ContainerBig = styled.span`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  row-gap: 4vw;
  padding: 3% 0;

  @media ${layoutsTheme.media.laptop} {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 10vw;
    padding: 8% 0;
  }

  @media ${layoutsTheme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 15vw;
    padding: 12% 0;
  }

  @media ${layoutsTheme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20vw;
    padding: 20% 0;
  }
`;
