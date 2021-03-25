export default {
	id: 1,
	oneline:
		'To analyze the illegal process of money laundering in India and its impacts on the economy',
	logo:
		'https://www.clipartmax.com/png/middle/56-562832_money-laundering-icon-png.png',
	name: 'Analysis of Money Laundering in India',
	imgUrl: [
		'https://drive.google.com/file/d/1s7nXWEAZpu1g_f0Nk3F0MDJkA17cVJtv/preview',
		'https://drive.google.com/file/d/1kocvMABB5yj8yHptOiPISAvxB_cu0sNb/preview',
		'https://drive.google.com/file/d/1vaS1pO4epkNAsrC20BHoKBQOW9J_x8IT/preview',
		'https://drive.google.com/file/d/1PUqi9R3sZxzcXLIAjwbLfcjk4Ttvpc2S/preview',
		'https://drive.google.com/file/d/1XAGfKG_m5jb8-tUabYPKuet2qVX-xpsS/preview',
		'https://drive.google.com/file/d/11W_Jp2fhQ5OLos3e_FB8AwmMOqzDDOX3/preview',
	],
	members: [
		'Shreya Raghavendra',
		'Kunal Motwani',
		' Avikal Sagar',
		'Rahul Harikumar',
		' Aadil Khalifa,',
		'Rohan Suratkal',
		'Kumar Vitthal,',
		'Sahana Praveen Bhandari',
	],
	description: {
		aim: (
			<div>
				To analyze the illegal process of money laundering in India and its
				impacts on the economy. We also looked into the adverse effects of
				demonetization and COVID-19 had on it.
			</div>
		),
		meth: (
			<div>
				<ol>
					<li>
						This project was begun by understanding the basics of money
						laundering. We first looked into the steps and the strategies
						commonly used for laundering
					</li>
					<li>
						Understand the impact of this activity on the private sector,
						government sector and also the economy as a whole. Impact on the
						society was also discussed
					</li>
					<li>
						Understand the impact of demonetization. Analyse if the decision was
						beneficial or not for the country. Also discuss other impacts.
					</li>
					<li>
						Look into why money laundering has increased since the pandemic
						struckand how advantage of the pandemic is being taken. Also discuss
						various measures taken by the government to combat illicit
						financing.
					</li>
					<li>
						Closely study the Anti-Money laundering acts (AML) and its impact.
					</li>
					<li>
						Have a thorough review of the Punjab National Bank (PNB) scam in
						2018. This review looked into the monetary extent of the scam and
						other losses as well.
					</li>
					<li>
						{' '}
						A time series forecasting was performed on the stocks of PNB using
						regression models; thus proving that the laundering caused a major
						decline in the stocks of PNB.
					</li>
					<li>
						Have a thorough review of the Commonwealth games (CWG) scam in 2010.
						This review consisted of segments such as revenue generation,
						Financial Planning and Execution, Irregularities in venue
						construction etc.
					</li>
					<li>
						An analysis of the revenue of various commonwealth games was also
						performed where the revenues of different commonwealth games for the
						past 25 years are compared. Using revenue values adjusted to
						inflation, we show that the cost of the CommonWealth games in 2010
						was indeed much higher; i.e. a scam had occurred.
					</li>
				</ol>
			</div>
		),
		res: (
			<div>
				<ul>
					<li>
						PNB Case study
						<ol type="a">
							<li>
								<u>PNB High Analysis</u>
								<br />
								(Daily High values in INR vs Dates)
								<br />
								<iframe
									src="https://drive.google.com/file/d/1QCsApLUMV8Yj9_OaYpL85gRstmadyXMY/preview"
									width="640"
									height="480"
								></iframe>
							</li>
							<li>
								<u>PNB LOW ANALYSIS:</u>
								<br />
								(Daily Low values in INR vs Dates)
								<br />
								<iframe
									src="https://drive.google.com/file/d/1fEmzcCNUahy2DsllUaAWaYDsl90Rw7MV/preview"
									width="640"
									height="480"
								></iframe>
							</li>
							<li>
								<u>PNB OPEN ANALYSIS:</u>
								<br />
								(Daily Open Values in INR vs Dates)
								<br />
								<iframe
									src="https://drive.google.com/file/d/1QCsApLUMV8Yj9_OaYpL85gRstmadyXMY/preview"
									width="640"
									height="480"
								></iframe>
							</li>
							<li>
								<u>PNB ADJUSTED CLOSE ANALYSIS:</u>
								<br />
								(Daily Adj Close values in INR vs Dates)
								<br />
								<iframe
									src="https://drive.google.com/file/d/1QhGw6e7hglQKqL7OMaRJ-YoWHQTPXUyK/preview"
									width="640"
									height="480"
								></iframe>
							</li>
						</ol>
						<ul>
							<br />
							<li>
								In models (a), (b) and (c), the actual high, low and the opening
								values of the stock respectively are close to the predicted
								values of the same in the time period of Dec’17 - Feb’18. This
								indicates that the regression models formed on the basis of the
								dataset containing dates from Jan’10 - Nov’17 is accurate enough
								to predict the values of the same for the first two months of
								2018. In other words, there are no evident deviations from
								normalcy.
							</li>
							<li>
								As we move further into 2018, starting from mid-Feb, we observe
								that the deviation of the predicted values’ regression lines in
								the first three graphs(represented in either red or orange) and
								the actual values’ regression lines(represented in either green
								or black) increases drastically
								<br />
								<br />
								<ul>
									<li>
										&emsp;&emsp;- In graph (a), the predicted high value towards
										the end of 2020 is nearly 85 INR, but the actual high value
										is close to 25 INR (error of nearly &emsp;&emsp;&emsp;240%).
									</li>
									<li>
										&emsp;&emsp;- In graph (b), the predicted low value towards
										the end of 2020 is nearly 100 INR, but the actual low value
										is close to 30 INR (error of nearly &emsp;&emsp;&emsp;234%).
									</li>
									<li>
										&emsp;&emsp;-In graph (c), the predicted open value towards
										the end of 2020 is nearly 90 INR, but the actual open value
										is close to 30 INR (error of nearly &emsp;&emsp;&emsp;200%).
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						CWG Case study:
						<br />
						<iframe
							src="https://drive.google.com/file/d/19lgkIa26D6goFZk5-6AAz9DO4NixV6QJ/preview"
							width="640"
							height="480"
						></iframe>
					</li>
				</ul>
				<p>
					By the end of the games, the cost had exceeded the budget by 16 times
					making it the most expensive commonwealth games. India, being an
					economically developing country where a third of the population lives
					below the poverty line, spending billions of dollars on a 12-day
					sports event seems astonishing. This points to mismanagement and
					corruption by the officials in-charge. There were major delays in the
					preparation and many big construction projects exceeded the budget.
					There was found to be corruption in the awarding of projects to
					different companies as well, where the lowest bidder was not always
					awarded the project. The games left many concerned and confused
					whether the games had ended being a matter of national pride or a
					matter of national shame.
				</p>
				<br /> <br />
			</div>
		),
		con: (
			<div>
				<u>
					<b>Future Scope of the project:</b>
				</u>
				<br />
				<ul>
					<li>● Analysis of money laundering in the covid-recovery era</li>
					<li>
						● Implementation of Artificial Intelligence in Anti-Money Laundering
						(AML) softwares
					</li>
					<li>
						● Comparison of the money laundering processes in the neighbouring
						countries
					</li>
				</ul>
			</div>
		),
	},
};
