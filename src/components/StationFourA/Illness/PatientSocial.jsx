import React from 'react';
import { useState } from 'react';

const PatientIllness = () => {
	const [isShown, setIsShown] = useState(false);
	const handleClick = (event) => {
		setIsShown((current) => !current);
	};

	return (
		<>
		<div className="col-lg-12">
			<div className="form-check form-switch">
				<input
					className="form-check-input"
					type="checkbox"
					onClick={handleClick}
					role="switch"
					id="flexSwitchCheckChecked"
					defaultChecked=""
				/>
			</div>
			</div>


			{isShown && (
				<div className="col-lg-12">
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Recreational Change</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioOne" id="recreationalchange1" value="option1" />
								<label className="form-check-label text-capitalize" for="recreationalchange1">
									No
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioOne" id="recreationalchange2" value="option2" />
								<label className="form-check-label text-capitalize" for="recreationalchange2">
									Yes
								</label>
							</div>
						</div>
					</div>

					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Housing 	mediation</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioTwo" id="housingmediation1" value="option1" />
								<label className="form-check-label text-capitalize" for="housingmediation1">
									catcha
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioTwo" id="housingmediation2" value="option2" />
								<label className="form-check-label text-capitalize" for="housingmediation2">
									Paka
								</label>
							</div>
						</div>
					</div>

					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Drinkin water sources</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioThree" id="water1sources1" value="option1" />
								<label className="form-check-label text-capitalize" for="water1sources1">
									safe
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioThree" id="water1sources2" value="option2" />
								<label className="form-check-label text-capitalize" for="water1sources2">
									unsafe
								</label>
							</div>
						</div>
					</div>

					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Alcohol</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFour" id="alcohol1" value="option1" />
								<label className="form-check-label text-capitalize" for="alcohol1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFour" id="alcohol2" value="option2" />
								<label className="form-check-label text-capitalize" for="alcohol2">
									yes
								</label>
							</div>
						</div>
					</div>

					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Drugs</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFive" id="drugs1" value="option3" />
								<label className="form-check-label text-capitalize" for="drugs1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFive" id="drugs2" value="option4" />
								<label className="form-check-label text-capitalize" for="drugs2">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Smoking</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSix" id="smoking1" value="option3" />
								<label className="form-check-label text-capitalize" for="smoking1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSix" id="smoking2" value="option4" />
								<label className="form-check-label text-capitalize" for="smoking2">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Betel Nuts</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSeven" id="betelnuts1" value="option3" />
								<label className="form-check-label text-capitalize" for="betelnuts1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSeven" id="betelnuts2" value="option4" />
								<label className="form-check-label text-capitalize" for="betelnuts2">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Chewing tobacco</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioEight" id="chewingtobacco1" value="option3" />
								<label className="form-check-label text-capitalize" for="chewingtobacco1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioEight" id="chewingtobacco2" value="option4" />
								<label className="form-check-label text-capitalize" for="chewingtobacco2">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Other</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioNine" id="other1" value="option3" />
								<label className="form-check-label text-capitalize" for="other1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioNine" id="other2" value="option4" />
								<label className="form-check-label text-capitalize" for="other2">
									yes
								</label>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* show component on click  */}
			{isShown || (
				<div>
					<h2></h2>
				</div>
			)}
		</>
	);
};

export default PatientIllness;
