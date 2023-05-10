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
					<div className="mb-2">
						<div className="">
							<p className="font-16 mb-1">1. Have you been a happy person?</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioOne" id="happy1" value="option1" />
								<label className="form-check-label text-capitalize" for="happy1">
									Always
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioOne" id="happy2" value="option2" />
								<label className="form-check-label text-capitalize" for="happy2">
									Sometimes
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioOne" id="happy3" value="option3" />
								<label className="form-check-label text-capitalize" for="happy3">
									Never
								</label>
							</div>
						</div>
					</div>

					<div className="mb-2">
						<div className="">
							<p className="font-16 mb-1"> 2. Do you feel nervous / tense?</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioTwo" id="nervous1" value="option1" />
								<label className="form-check-label text-capitalize" for="nervous1">
									Always
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioTwo" id="nervous2" value="option2" />
								<label className="form-check-label text-capitalize" for="nervous2">
									Sometimes
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioTwo" id="nervous3" value="option2" />
								<label className="form-check-label text-capitalize" for="nervous3">
									Never
								</label>
							</div>
						</div>
					</div>

					<div className="mb-2">
						<div className="">
							<p className="font-16 mb-1">3. Do you feel sad / downhearted?</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioThree" id="downhearted1" value="option1" />
								<label className="form-check-label text-capitalize" for="downhearted1">
									Always
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioThree" id="downhearted2" value="option2" />
								<label className="form-check-label text-capitalize" for="downhearted2">
									Sometimes
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioThree" id="downhearted3" value="option3" />
								<label className="form-check-label text-capitalize" for="downhearted3">
									Never
								</label>
							</div>
						</div>
					</div>

					<div className="mb-2">
						<div className="">
							<p className="font-16 mb-1">4. In the past 1 month, have you visited family / friends? </p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFour" id="visitedfamily1" value="option1" />
								<label className="form-check-label text-capitalize" for="visitedfamily1">
									Yes
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFour" id="visitedfamily2" value="option2" />
								<label className="form-check-label text-capitalize" for="visitedfamily2">
									no
								</label>
							</div>
						</div>
					</div>

					<div className="mb-2">
						<div className="">
							<p className="font-16 mb-1">
								5. In the past 1 month, have your mental state negatively affected your work / productivity?{' '}
							</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFive" id="productivity1" value="option1" />
								<label className="form-check-label text-capitalize" for="productivity1">
									Yes
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFive" id="productivity2" value="option2" />
								<label className="form-check-label text-capitalize" for="productivity2">
									No
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFive" id="productivity3" value="option2" />
								<label className="form-check-label text-capitalize" for="productivity3">
									Never
								</label>
							</div>
						</div>
					</div>

					<div className="mb-2">
						<div className="">
							<p className="font-16 mb-1">6. How do you feel about your health? </p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSix" id="patienthealth1" value="option1" />
								<label className="form-check-label text-capitalize" for="patienthealth1">
									Excellent
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSix" id="patienthealth2" value="option2" />
								<label className="form-check-label text-capitalize" for="patienthealth2">
									Good
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSix" id="patienthealth3" value="option2" />
								<label className="form-check-label text-capitalize" for="patienthealth3">
									Fair
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSix" id="patienthealth4" value="option2" />
								<label className="form-check-label text-capitalize" for="patienthealth4">
									Poor
								</label>
							</div>
						</div>
					</div>

					<div className="mb-2">
						<div className="">
							<p className="font-16 mb-1">7. Compared to 1 year ago, your general health is </p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSeven" id="generalhealth1" value="option1" />
								<label className="form-check-label text-capitalize" for="generalhealth1">
									Better
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSeven" id="generalhealth2" value="option2" />
								<label className="form-check-label text-capitalize" for="generalhealth2">
									Same
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioSeven" id="generalhealth3" value="option2" />
								<label className="form-check-label text-capitalize" for="generalhealth3">
									Worse
								</label>
							</div>
						</div>
					</div>






					<div className="">
						<p className="font-16 mb-1 fw-semibold">Does your health limit you to do the following?</p>
					</div>

					<div className="mb-2">
						<div className="">
							<p className="font-16 mb-1">8. Vigorous activity / running</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioEight" id="Vigorousactivity1" value="option1" />
								<label className="form-check-label text-capitalize" for="Vigorousactivity1">
								Limited a lot
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioEight" id="Vigorousactivity2" value="option2" />
								<label className="form-check-label text-capitalize" for="Vigorousactivity2">
								Limited a little
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioEight" id="Vigorousactivity3" value="option2" />
								<label className="form-check-label text-capitalize" for="Vigorousactivity3">
								Not limited
								</label>
							</div>
						</div>
					</div>

					<div className="mb-2">
						<div className="">
							<p className="font-16 mb-1">9. Moderate / housework</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioNine" id="moderate1" value="option1" />
								<label className="form-check-label text-capitalize" for="moderate1">
								Limited a lot
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioNine" id="moderate2" value="option2" />
								<label className="form-check-label text-capitalize" for="moderate2">
								Limited a little
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioNine" id="moderate3" value="option2" />
								<label className="form-check-label text-capitalize" for="moderate3">
								Not limited
								</label>
							</div>
						</div>
					</div>

					<div className="mb-2">
						<div className="">
							<p className="font-16 mb-1">10. Climbing stairs</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioTen" id="climbingstairs1" value="option1" />
								<label className="form-check-label text-capitalize" for="climbingstairs1">
								Limited a lot
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioTen" id="climbingstairs2" value="option2" />
								<label className="form-check-label text-capitalize" for="climbingstairs2">
								Limited a little
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioTen" id="climbingstairs3" value="option2" />
								<label className="form-check-label text-capitalize" for="climbingstairs3">
								Not limited
								</label>
							</div>
						</div>
					</div>

					<div className="mb-2">
						<div className="">
							<p className="font-16 mb-1">11. Climbing 1 flight of stairs</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioEleven" id="Climbing1" value="option1" />
								<label className="form-check-label text-capitalize" for="Climbing1">
								Limited a lot
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioEleven" id="Climbing2" value="option2" />
								<label className="form-check-label text-capitalize" for="Climbing2">
								Limited a little
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioEleven" id="Climbing3" value="option2" />
								<label className="form-check-label text-capitalize" for="Climbing3">
								Not limited
								</label>
							</div>
						</div>
					</div>

					<div className="mb-2">
						<div className="">
							<p className="font-16 mb-1">12. Bending / kneeling</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadiotwelve" id="Bending1" value="option1" />
								<label className="form-check-label text-capitalize" for="Bending1">
								Limited a lot
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadiotwelve" id="Bending2" value="option2" />
								<label className="form-check-label text-capitalize" for="Bending2">
								Limited a little
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadiotwelve" id="Bending3" value="option2" />
								<label className="form-check-label text-capitalize" for="Bending3">
								Not limited
								</label>
							</div>
						</div>
					</div>

					<div className="mb-2">
						<div className="">
							<p className="font-16 mb-1">13. Walk a mile</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioThirteen" id="Walkamile1" value="option1" />
								<label className="form-check-label text-capitalize" for="Walkamile1">
								Limited a lot
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioThirteen" id="Walkamile2" value="option2" />
								<label className="form-check-label text-capitalize" for="Walkamile2">
								Limited a little
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioThirteen" id="Walkamile3" value="option2" />
								<label className="form-check-label text-capitalize" for="Walkamile3">
								Not limited
								</label>
							</div>
						</div>
					</div>


					<div className="mb-2">
						<div className="">
							<p className="font-16 mb-1">14. Walk a several blocks</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFourteen" id="severalblocks1" value="option1" />
								<label className="form-check-label text-capitalize" for="severalblocks1">
								Limited a lot
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFourteen" id="severalblocks2" value="option2" />
								<label className="form-check-label text-capitalize" for="severalblocks2">
								Limited a little
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFourteen" id="severalblocks3" value="option2" />
								<label className="form-check-label text-capitalize" for="severalblocks3">
								Not limited
								</label>
							</div>
						</div>
					</div>


					<div className="mb-2">
						<div className="">
							<p className="font-16 mb-1">15. Walk one blocks</p>
						</div>
						<div className="">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFifteen" id="oneblocks1" value="option1" />
								<label className="form-check-label text-capitalize" for="oneblocks1">
								Limited a lot
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFifteen" id="oneblocks2" value="option2" />
								<label className="form-check-label text-capitalize" for="oneblocks2">
								Limited a little
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="inlineRadioFifteen" id="oneblocks3" value="option2" />
								<label className="form-check-label text-capitalize" for="oneblocks3">
								Not limited
								</label>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* show component on click  */}
			{isShown || <div></div>}
		</>
	);
};

export default PatientIllness;
