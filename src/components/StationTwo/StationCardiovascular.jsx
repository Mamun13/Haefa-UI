import React from 'react';
import SectionBanner from '../SectionBannerDemo/SectionBanner';
import GlobalButton from '../GlobalBtn/GlobalButton';
import SectionTitle from '../SectionTitleDemo/SectionTitle';
import './StationCardiovascular.css';
import SingleButton from './../Buttons/SingleButton/SingleButton';
import StationButton from './../Buttons/StationButton/StationButton';

const StationCardiovascular = () => {
	return (
		<>
			<section>
				<SectionBanner title="Cardiovascular risk assessment(10-year, men: Patient education)" />
				<div className="container">
					<SectionTitle title="input" />
					<form action="">
						<div className="row">
							<div className="col-lg-9">
								<div className="mb-3 shadowme">
									<input
										type="text"
										name="PAge"
										id="PAge"
										className="form-control form-radious inputBox"
										placeholder="Age"
									/>
								</div>

								<div className="mb-3 shadowme">
									<input
										type="text"
										name="SystolicBloodPressure"
										id="SystolicBloodPressure"
										className="form-control form-radious inputBox"
										placeholder="Systolic blood pressure"
									/>
								</div>
								<div className="mb-3 shadowme">
									<input
										type="text"
										name="TotalCholesterol"
										id="TotalCholesterol"
										className="form-control form-radious inputBox"
										placeholder="Total cholesterol"
									/>
								</div>
								<div className="mb-3">
									<select id="Select" className="form-select rounded-pill inputBox">
										<option>HDL cholesterol</option>
										<option> Yes </option>
										<option>No </option>
									</select>
								</div>
								<div className="mb-3">
									<select id="Select" className="form-select rounded-pill inputBox">
										<option>Diabetes present</option>
										<option> Yes </option>
										<option>No </option>
									</select>
								</div>
								<div className="mb-3">
									<select id="Select" className="form-select rounded-pill inputBox">
										<option>Cigarette smoker</option>
										<option> Yes </option>
										<option>No </option>
									</select>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="mb-3">
									<select id="Select" className="form-select rounded-pill inputBox">
										<option>Year</option>
										<option> Day </option>
										<option> Month </option>
										{/* <option> Year </option> */}
									</select>
								</div>

								<div className="mb-3">
									<select id="Select" className="form-select rounded-pill inputBox">
										<option>mmHg</option>
										<option>1 mmHg </option>
										<option>2 mmHg </option>
										<option>3 mmHg </option>
									</select>
								</div>
								<div className="mb-3">
									<select id="Select" className="form-select rounded-pill inputBox">
										<option>mg/dl</option>
										<option>1 mg/dl </option>
										<option>2 mg/dl </option>
										<option>3 mg/dl </option>
									</select>
								</div>

								<div className="mb-3 shadowme">
									<input
										type="number"
										name="TotalCholesterol"
										id="TotalCholesterol"
										className="form-control form-radious inputBox"
										placeholder="Total cholesterol"
									/>
								</div>
							</div>
							<h1 className="text-capitalize fw-normal font-32 text-center mt-5	mb-4">result</h1>
							<SectionTitle title="Important: Inputs must be complete to perform calculation" />
							<div className="col-lg-6 mt-3">
								<div className="mb-3 shadowme">
									<input
										type="number"
										name="Risk"
										id="Risk"
										className="form-control form-radious inputBox"
										placeholder="Risk"
									/>
								</div>
							</div>
							<div className="col-lg-6 mt-3">
								<div className="mb-3">
									<select id="Select" className="form-select rounded-pill inputBox">
										<option>%</option>
										<option> 10% </option>
										<option>20% </option>
									</select>
								</div>
							</div>
						</div>
						{/* <DoubleButton btnone="save" btntwo="staion 3"  link="/dashboard" link2="/glucose-hemoglobin-table"/> */}


						<div className="text-center mt-3 position-relative">
							<SingleButton btnOne="save" link="/blood-pressure-table"/>
							<StationButton btnOne="Save & station 3" link="/glucose-hemoglobin-table" btnBg="button-bg"/>
						</div>
					</form>

				</div>
				<GlobalButton />
			</section>
		</>
	);
};

export default StationCardiovascular;
