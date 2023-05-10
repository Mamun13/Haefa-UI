import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/Dashboard-Page/";
import CreatePage from "./pages/Create-Page";
import Page404 from "./pages/Page-404";
import FullscreenLoader from "./components/masterLayout/Fullscreen-Loader";
import Index from './pages/PatientReg/Index';
import TakeUser from './pages/TakeUser';
import UserDetail from './pages/UserDetail';
import StationHeight from './pages/SectionHeight';
import BloodPressure from './pages/BloodPressure';
import CardiovascularRisk from './pages/CardiovascularRisk';
import UserTable from './pages/UserTable';
import Login from './components/Login/Login';
import GlucoseInput from './pages/GlucoseInput';
import BloodPressureTable from './pages/BloodPressureTable';
import GlucoseHemTable from './pages/GlucoseHemTable'
import TreatmentPlan from './pages/StationFourA/TreatmentPlan';
import TPuserData from './components/StationFourA/TPuserInput';
// import FourCuserInput from './components/StationFourC/FourCuserInput';
import PatientRegB from './pages/StationFourB/PatientRegB'
import FourAddInformation from './pages/StationFourC/FourAddInformation';
import Prescriptions from './pages/Prescriptions';
import FinalPrescription from './pages/FinalPrescription';
import GoPic from './components/TakePic/GoPic';


const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route exact path="/dashboard" element={<DashboardPage/>}/>
                    <Route exact path="/patient-registration" element={<Index/>}/>
                    <Route exact path="/take-picture" element={<TakeUser/>}/>
                    <Route exact path="/go-pic" element={<GoPic/>}/>
                    <Route exact path="/user-details" element={<UserDetail/>}/>
                    <Route exact path="/user-table" element={<UserTable/>}/>
                    <Route exact path="/height-weight" element={<StationHeight/>}/>
                    <Route exact path="/blood-pressure" element={<BloodPressure/>}/>
                    <Route exact path="/blood-pressure-table" element={<BloodPressureTable/>}/>
                    <Route exact path="/glucose-hemoglobin-table" element={<GlucoseHemTable/>}/>
                    <Route exact path="/glucose-hemoglobin" element={<GlucoseInput/>}/>
                    <Route exact path="/cardiovascular-risk" element={<CardiovascularRisk/>}/>

                    {/* station four */}
                    <Route exact path="/treatment-plan" element={<TreatmentPlan/>}/>
                    <Route exact path="/user-data" element={<TPuserData/>}/>
                    <Route exact path="/station-fourb" element={<PatientRegB/>}/>
                    <Route exact path="/four-c-userinput" element={<FourAddInformation/>}/>

                    {/* Prescription */}
                    <Route exact path="/prescription" element={<Prescriptions/>}/>
                    <Route exact path="/final-prescription" element={<FinalPrescription/>}/>

                    <Route exact path="/Create" element={<CreatePage />}/>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </BrowserRouter>
            <FullscreenLoader/>
        </>
    );

};

export default App;