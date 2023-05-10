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
							<p className="font-16">Hyperension</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioOptions" id="Hyperension1" value="option1" />
								<label className="form-check-label text-capitalize" for="Hyperension1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioOptions" id="Hyperension2" value="option2" />
								<label className="form-check-label text-capitalize" for="Hyperension2">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Diabetes</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadiotwo" id="Diabetes1" value="option3" />
								<label className="form-check-label text-capitalize" for="Diabetes1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadiotwo" id="Diabetes2" value="option4" />
								<label className="form-check-label text-capitalize" for="Diabetes2">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Asthma</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioThree" id="Asthma1" value="option3" />
								<label className="form-check-label text-capitalize" for="Asthma1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioThree" id="Asthma2" value="option4" />
								<label className="form-check-label text-capitalize" for="Asthma2">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">TB</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFour" id="TB1" value="option3" />
								<label className="form-check-label text-capitalize" for="TB1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFour" id="TB2" value="option4" />
								<label className="form-check-label text-capitalize" for="TB2">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Typhoid</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFive" id="Typhoid1" value="option3" />
								<label className="form-check-label text-capitalize" for="Typhoid1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFive" id="Typhoid2" value="option4" />
								<label className="form-check-label text-capitalize" for="Typhoid2">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Malaria</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSix" id="Malaria" value="option3" />
								<label className="form-check-label text-capitalize" for="Malaria">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSix" id="Malaria1" value="option4" />
								<label className="form-check-label text-capitalize" for="Malaria1">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Hepatits</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSeven" id="Hepatits" value="option3" />
								<label className="form-check-label text-capitalize" for="Hepatits">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSeven" id="Hepatits1" value="option4" />
								<label className="form-check-label text-capitalize" for="Hepatits1">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Dengue</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioEight" id="Dengue" value="option3" />
								<label className="form-check-label text-capitalize" for="Dengue">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioEight" id="Dengue1" value="option4" />
								<label className="form-check-label text-capitalize" for="Dengue1">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Fracture/ injury</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioNine" id="injury1" value="option3" />
								<label className="form-check-label text-capitalize" for="injury1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioNine" id="injury2" value="option4" />
								<label className="form-check-label text-capitalize" for="injury2">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Skin diseases</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioEleven" id="Skin1" value="option3" />
								<label className="form-check-label text-capitalize" for="Skin1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioEleven" id="Skin" value="option4" />
								<label className="form-check-label text-capitalize" for="Skin">
									yes
								</label>
							</div>
						</div>
					</div>

					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Cancer</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSeventeen" id="cancer" value="option3" />
								<label className="form-check-label text-capitalize" for="cancer">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSeventeen" id="cancer1" value="option4" />
								<label className="form-check-label text-capitalize" for="cancer1">
									yes
								</label>
							</div>
						</div>
					</div>

					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">IHD</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioTwelve" id="IHD" value="option3" />
								<label className="form-check-label text-capitalize" for="IHD">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioTwelve" id="ihd1" value="option4" />
								<label className="form-check-label text-capitalize" for="ihd1">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Stroke</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioThirteen" id="Stroke" value="option3" />
								<label className="form-check-label text-capitalize" for="Stroke">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioThirteen" id="Stroke1" value="option4" />
								<label className="form-check-label text-capitalize" for="Stroke1">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Surgery</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFourteen" id="Surgery" value="option3" />
								<label className="form-check-label text-capitalize" for="Surgery">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFourteen" id="Surgery1" value="option4" />
								<label className="form-check-label text-capitalize" for="Surgery1">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Depression</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFifteen" id="Depression" value="option3" />
								<label className="form-check-label text-capitalize" for="Depression">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFifteen" id="Depression1" value="option4" />
								<label className="form-check-label text-capitalize" for="Depression1">
									yes
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Others</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadiosixteen" id="others" value="option3" />
								<label className="form-check-label text-capitalize" for="others">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadiosixteen" id="others2" value="option4" />
								<label className="form-check-label text-capitalize" for="others2">
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
