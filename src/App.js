import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from "./componet/main/main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
