import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./styles/theme.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import History from "./pages/History/History.tsx";
import {GlobalStyle} from "./styles/global.styled.ts";
import DefaultLayout from "./pages/DefaultLayout.tsx";
import Timer from "./pages/Timer/Timer.tsx";
import CyclesContextProvider from "./contexts/CyclesContextProvider.tsx";
function App() {
  return (
      <ThemeProvider theme={defaultTheme}>

          <BrowserRouter>
              <CyclesContextProvider>
              <Routes>
                  <Route path={'/'} element={<DefaultLayout/>}>
                          <Route index element={<Timer/>}/>
                          <Route path={'/history'} element={<History/>}/>
                  </Route>
              </Routes>
              </CyclesContextProvider>
          </BrowserRouter>

          <GlobalStyle/>
      </ThemeProvider>

  )
}

export default App
