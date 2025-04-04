import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import MeIMG from '../IMG/MeIMG.jpg';
import diploma from '../IMG/diploma.jpg';
import awardDC from '../IMG/awardDC.png';
import clickHere from '../IMG/clickHere.gif';
import awardTeaching from '../IMG/rewardTeaching.jpg';
import meG from '../IMG/meG.jpg';
export function AboutMe() {
	const [data, setData] = useState([]);
	useEffect(()=> {
		fetch("http://localhost:3308/data")
		.then(res => res.json())
		.then(data => setData(data))
		.catch(err => console.log(err));
	}, []);
	return (
		<div>
			<div className="main1">
			<section className="mainSection1">
            			<img className="meimg" src={MeIMG} alt='404'></img>
            			<div className="Pinfo">
                			<div className="PinfoC1"><p>Name: </p><p className="PinfoC1Space">
						{data.length > 0 ? data[0].first_name : "Name not found"}
						{data.length > 0 ? data[0].last_name : "Name not found"}
					</p></div>
                			<div className="PinfoC1"><p>Date of birth: </p><p className="PinfoC1Space">
						{data.length > 0 ? 
					 	(data[0].date_of_birth.length > 10 ? 
    						data[0].date_of_birth.slice(0, 10) : 
    						data[0].date_of_birth
  						) : 
  						"date not found"
						}
					</p></div>
                			<div className="PinfoC1"><p>Education: </p><p className="PinfoC1Space">
						{data.length > 0 ? data[0].education : "Education not found"}
					</p></div>
            			</div>
        		</section>
        		<section className="mainSection2">
            			<div className='tab1imgsC'>
                			<img className="section2imgs" src={diploma} alt='404'></img>
                			<p className="IMGD"> I've received this diploma as a result of graduating.</p>
            			</div>
            			<div className='tab1imgsC'>
                			<img className="section2imgs" src={awardDC} alt='404'></img>
                			<p className="IMGD"> The Teachers at Hixson High School anonymously voted 3 people to receive a reward for self discipline.</p>
            			</div>
            			<div className='tab1imgsC tab1imgsC3'>
                			<img className="section2imgs section2imgs2" src={awardTeaching} alt='404'></img>
                			<p className="IMGD">I got the Denise Burt-Turner Special Needs P.E award for taking a small group of special needs students to a classroom and teaching them.</p>
            			</div>
        		</section>
			</div>
		</div>
	)
}
export default AboutMe;
