import { ThemeProvider } from "@emotion/react";
import { mainTheme } from "./theme/main-theme";
import CardWrapper from "./components/cards/card-wrapper";

function App() {

  return (
    <>
      <ThemeProvider theme={mainTheme}>
    <CardWrapper/>
      </ThemeProvider>
    </>
  );
}

export default App;
