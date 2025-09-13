import { useState } from "react";
import Header from "./components/layouts/Header";
import LoadingScreen from "./components/LoadingScreen";
import Main from "./components/layouts/Main";
import Footer from "./components/layouts/Footer";

function App() {
  const [loadingScreenVisible, setLoadingScreenVisible] = useState(true);

  return (
    <>
      <LoadingScreen
        visible={loadingScreenVisible}
        onHide={() => setLoadingScreenVisible(false)}
      />

      <div className="min-h-screen flex flex-col items-center">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
