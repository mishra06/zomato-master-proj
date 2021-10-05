// Component
import Temp from "./Components/temp";

// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

function App() {
  return (
    <>
     <HomeLayoutHOC path="/" exact component={Temp} />
     </>
  );
  }

export default App;