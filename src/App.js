import React from "react";
import StudentForm from "./Components/Registration/StudentForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Verifier from "./Components/VerifierPage/Verifier";
import DownloadCertificate from "./Components/DownloadCertificate/DownloadCertificate";
import HomePage from "./Components/LandingPage/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 h-screen select-none">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/studentform" element={<StudentForm/>}/>
          <Route path="/verifier" element={<Verifier/>}/>
          <Route path="/downloadcertificate" element={<DownloadCertificate />} />
        </Routes>
      </div>
    </BrowserRouter>
    );
}


export default App;


