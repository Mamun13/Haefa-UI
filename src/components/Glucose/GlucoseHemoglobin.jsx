import React from 'react';
import SectionBanner from '../SectionBannerDemo/SectionBanner';
import GlobalButton from '../GlobalBtn/GlobalButton';
import SectionTitle from '../SectionTitleDemo/SectionTitle';
import SingleButton from '../Buttons/SingleButton/SingleButton';
import StationButton from '../Buttons/StationButton/StationButton';

const GlucoseHemoglobin = () => {
	return (
		<>
			<section>
				<SectionBanner title="Station 3 - Jiaur Rahman" />
				<div className="container">
					<SectionTitle title="Glucose & Hemoglobin" />
					<form action="">
						<div className="row">
							<div className="col-lg-6">
								<div className="mb-3 shadowme">
									<input
										type="number"
										name="RBG"
										id="RBG"
										className="form-control form-radious inputBox"
										placeholder="RBG (mmol/L)"
									/>
								</div>

								<div className="mb-3 shadowme">
									<input
										type="number"
										name="FBG"
										id="FBG"
										className="form-control form-radious inputBox"
										placeholder="FBG (mmol/L)"
									/>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="mb-3 shadowme">
									<input
										type="number"
										name="LastEat"
										id="LastEat"
										className="form-control form-radious inputBox"
										placeholder="2 Hours After Breakfast"
									/>
								</div>
								<div className="mb-3 shadowme">
									<input
										type="number"
										name="Hemoglobin"
										id="Hemoglobin"
										className="form-control form-radious inputBox"
										placeholder="Hemoglobin (g/dL)"
									/>
								</div>
							</div>
						</div>
						<div className="text-center mt-3 position-relative">
							<SingleButton btnOne="save" link="/glucose-hemoglobin-table"/>
							<StationButton btnOne="Save & station 4" link="/treatment-plan" btnBg="button-bg"/>
						</div>
					</form>
				</div>
				<GlobalButton/>
			</section>
		</>
	);
};

export default GlucoseHemoglobin;
