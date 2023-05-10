import React from 'react';
import { useState } from 'react';

const PatientIllness = () => {
	const [isShown, setIsShown] = useState(false);
	const handleClick = (event) => {
		setIsShown((current) => !current);
	};

	return (
		<>
			<div className="col-lg-12 d-flex">
				<div className="form-check form-switch btn">
					<input
						className="form-check-input"
						type="checkbox"
						onClick={handleClick}
						role="switch"
						id="flexSwitchCheckChecked"
						defaultChecked=""
					/>
				</div>
				<p className='nirog-team-font text-center'>Given <br/>by nirog team?</p>
			</div>

			{isShown && (
				<div className="col-lg-12">
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">BCG</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioOptions" id="bcg1" value="option1" />
								<label className="form-check-label text-capitalize" for="bcg1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioOptions" id="bcg2" value="option2" />
								<label className="form-check-label text-capitalize" for="bcg2">
									yes
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value=""/>
								<label className="form-check-label text-capitalize" for="inlineRadio2">
									
								</label>
							</div>
							
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Pentavalent</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadiotwo" id="pentavalent1" value="option3" />
								<label className="form-check-label text-capitalize" for="pentavalent1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadiotwo" id="pentavalent2" value="option4" />
								<label className="form-check-label text-capitalize" for="pentavalent2">
									yes
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value=""/>
								<label className="form-check-label text-capitalize" for="inlineRadio2">
									
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">OPV</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioThree" id="opv1" value="option3" />
								<label className="form-check-label text-capitalize" for="opv1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioThree" id="opv2" value="option4" />
								<label className="form-check-label text-capitalize" for="opv2">
									yes
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value=""/>
								<label className="form-check-label text-capitalize" for="inlineRadio2">
									
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">PCV</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFour" id="pcv1" value="option3" />
								<label className="form-check-label text-capitalize" for="pcv1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFour" id="pcv2" value="option4" />
								<label className="form-check-label text-capitalize" for="pcv2">
									yes
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value=""/>
								<label className="form-check-label text-capitalize" for="inlineRadio2">
									
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">IPV</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFive" id="ipv1" value="option3" />
								<label className="form-check-label text-capitalize" for="ipv1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFive" id="ipv2" value="option4" />
								<label className="form-check-label text-capitalize" for="ipv2">
									yes
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value=""/>
								<label className="form-check-label text-capitalize" for="inlineRadio2">
									
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">MR</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSix" id="mr1" value="option3" />
								<label className="form-check-label text-capitalize" for="mr1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSix" id="mr2" value="option4" />
								<label className="form-check-label text-capitalize" for="mr2">
									yes
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value=""/>
								<label className="form-check-label text-capitalize" for="inlineRadio2">
									
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Cholera: Dose-1</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSeven" id="choleraDose1" value="option3" />
								<label className="form-check-label text-capitalize" for="choleraDose1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSeven" id="choleraDose2" value="option4" />
								<label className="form-check-label text-capitalize" for="choleraDose2">
									yes
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value=""/>
								<label className="form-check-label text-capitalize" for="inlineRadio2">
									
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Cholera: Dose-2</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioEight" id="choleraDose3" value="option3" />
								<label className="form-check-label text-capitalize" for="choleraDose3">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioEight" id="choleraDose4" value="option4" />
								<label className="form-check-label text-capitalize" for="choleraDose4">
									yes
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value=""/>
								<label className="form-check-label text-capitalize" for="inlineRadio2">
									
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Cholera: Dose-3</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioNine" id="choleraDose5" value="option3" />
								<label className="form-check-label text-capitalize" for="choleraDose5">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioNine" id="choleraDose6" value="option4" />
								<label className="form-check-label text-capitalize" for="choleraDose6">
									yes
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value=""/>
								<label className="form-check-label text-capitalize" for="inlineRadio2">
									
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="">
							<p className="font-16">Measles</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioEleven" id="measles1" value="option3" />
								<label className="form-check-label text-capitalize" for="measles1">
									no
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioEleven" id="measles2" value="option4" />
								<label className="form-check-label text-capitalize" for="measles2">
									yes
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value=""/>
								<label className="form-check-label text-capitalize" for="inlineRadio2">
									
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
