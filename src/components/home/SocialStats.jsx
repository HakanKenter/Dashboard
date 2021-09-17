import "./SocialStats.scss";
import React, { useState, useEffect } from "react";
import facebook from '../../assets/img/SocialMedia/facebook.png'
import instagram from '../../assets/img/SocialMedia/instagram.png'
import linkedin from '../../assets/img/SocialMedia/linkedin.png'
import youtube from '../../assets/img/SocialMedia/youtube.png'

const SocialStats = () => {
	const [datas, setDatas] = useState([
		{
			name: "facebook",
			visitors: 50,
			color: "#017efa"
		},
		{
			name: "instagram",
			visitors: 124,
			color: "#FD1F9B"
		},
		{
			name: "linkedin",
			visitors: 245,
			color: "#007AB5"
		},
		{
			name: "youtube",
			visitors: 22,
			color: "#FF0000"
		},
	])


	useEffect(() => {
		const datasUpdate = [...datas];
		let total = 0;

		datas.forEach((data) => {
			total += data.visitors;
		});

        
		const percent = total / 100;
        
		datasUpdate.forEach((data, index) => {
            let percentOfTotal = data.visitors / percent;
			datasUpdate[index].percent = Math.round(percentOfTotal);
		});

		setDatas(datasUpdate);
		}, []);

	return (
		<div className="socialStats">
			<div className="title">
				<h1 className="s28 w600">120K</h1>
				<h2 className="s10 w700">
					<svg
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 7 9"
					>
						<path
							d="M6.1 4.1 3.5 1.5.9 4.1M3.5 1.5v6"
							stroke="#30D988"
							strokeWidth="1.4"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					12%<span className="w400">visit</span>
				</h2>
			</div>

			<StatBar datas={datas} />
			
		</div>
	);
};

const StatBar = ({datas}) => {
	return (
		<div className="blocTopChannels">
			<div className="statBar">
				{
					datas.map((data, i) =>(
						<div 
						key={i}
						className="bar"
						style={{
							background:data.color,
							flex: data.percent
						}}
						></div>
					))
				}
			</div>
			<div className="statPerSocial">

				<div className="facebookBloc">
					<div className="left">
						<img src={facebook} alt=""/>
						<div className="media s14 w600" 
						>{datas[0].name}</div>
					</div>

					<div className="right">
						<div className="visitor s14 w400">{datas[0].visitors} visitor</div>
						<div className="pourcent s14 w400">{datas[0].percent} %</div>
					</div>
				</div>

				<div className="separator"></div>

				<div className="instagramBloc">
					<div className="left">
						<img src={instagram} alt=""/>
						<div className="media s14 w600" 
						>{datas[1].name}</div>
					</div>

					<div className="right">
						<div className="visitor s14 w400">{datas[1].visitors} visitor</div>
						<div className="pourcent s14 w400">{datas[1].percent} %</div>
					</div>
				</div>

				<div className="separator"></div>

				<div className="linkedinBloc">
					<div className="left">
						<img src={linkedin} alt=""/>
						<div className="media s14 w600" 
						>{datas[2].name}</div>
					</div>

					<div className="right">
						<div className="visitor s14 w400">{datas[2].visitors} visitor</div>
						<div className="pourcent s14 w400">{datas[2].percent} %</div>
					</div>
				</div>

				<div className="separator"></div>


				<div className="youtubeBloc">
					<div className="left">
						<img src={youtube} alt=""/>
						<div className="media s14 w600" 
						>{datas[3].name}</div>
					</div>

					<div className="right">
						<div className="visitor s14 w400">{datas[3].visitors} visitor</div>
						<div className="pourcent s14 w400">{datas[3].percent} %</div>
					</div>
				</div>

			</div>
		</div>
		)

}

export default SocialStats;