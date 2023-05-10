import React, { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Dashboard = lazy(() => import("../components/Dashboard/Dashboard"));

import ImageOne from '../assets/img/dashboard-icon/patient-reg.png'
import ImageTwo from '../assets/img/dashboard-icon/patient-edit.png'
import ImageThree from '../assets/img/dashboard-icon/counter.png'
import ImageFour from '../assets/img/dashboard-icon/height&width2.png'
import ImageFive from '../assets/img/dashboard-icon/blood-pressure.png'
import ImageSix from '../assets/img/dashboard-icon/glucose.png'
import ImageSeven from '../assets/img/dashboard-icon/treatment-plan.png'
import ImageEight from '../assets/img/dashboard-icon/fingerprint.png'

import GlobalButton from '../components/GlobalBtn/GlobalButton'

const DashboardPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <div id="deshboard">
          <div className="items w-100">
            <div className="container">
              <div className="row gy-4">
                <Dashboard image={ImageOne} title="Patient Registration" link="/patient-registration" bg="bg1"/>
                <Dashboard image={ImageFour} title="Station 1" title2=" Height & Weight" link="/user-table" bg="bg4"/>
                <Dashboard image={ImageFive} title2="Blood Pressure" title="Station 2" link="/blood-pressure-table" bg="bg5"/>
                <Dashboard image={ImageSix} title2="Glucose & Hemoglobin" title="Station 3" link="/glucose-hemoglobin-table" bg="bg6"/>
                <Dashboard image={ImageSeven} title2="Physician, Obs & Gynae Treatment Plan" title="Station 4" link="/treatment-plan" bg='bg7'/>
                <Dashboard image={ImageEight} title2="" title="Fingerprint Verification" bg="bg8"/>
                <Dashboard image={ImageTwo} title="Patient Data" bg="bg2"/>
                <Dashboard image={ImageThree} title="Counter [ 20 / 25 ]" bg="bg3"/>
              </div>
              {/* global button */}
				      <GlobalButton />
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default DashboardPage;
