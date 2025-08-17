import "./App.css";
import Header from "./Header";
import MainLayout from "./MainLayout";
import SeatLayout from "./SeatLayout";


function App() {
  return (
    <>
      <Header/>
      <MainLayout>
        <SeatLayout/>
      </MainLayout>
    </>
  );
}

export default App;
