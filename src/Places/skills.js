import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import MeIMG from '../IMG/MeIMG.jpg';
import diploma from '../IMG/diploma.jpg';
import awardDC from '../IMG/awardDC.png';
import clickHere from '../IMG/clickHere.gif';
import awardTeaching from '../IMG/rewardTeaching.jpg';
import meG from '../IMG/meG.jpg';
var blogLinks = [
'https://www.youtube.com/embed/r-h2IPPMpBo?si=QYezHrv30jGCPQ29',
'https://www.youtube.com/embed/bSdCY3ay8Qk?si=GdEtpMNVbdo2JXCy',
'https://www.youtube.com/embed/_WRFMGZHrGs?si=qleUhM8ltZ3EesUA',
'https://www.youtube.com/embed/ryfU13Vkmls?si=yu7zO8p8D2oI3CGS',
'https://www.youtube.com/embed/s7Ih4r3CFsE?si=JKDVSNr9f_0lhxpd',
'https://www.youtube.com/embed/L2SW84Q7L2I?si=lWbUwU7UbyHAP9M2',
'https://www.youtube.com/embed/H8eIcx-YAtE?si=Wk0M95i93yUk_9fD',
'https://www.youtube.com/embed/gG2aYsNgx88?si=gwOREuZre98uG0FM'
];

/*const getLinks = () => [
  { name: "blog8", url: "www.youtube.com/embed/gG2aYsNgx88?si=gwOREuZre98uG0FM" },
  { name: "blog7", url: "www.youtube.com/embed/H8eIcx-YAtE?si=Wk0M95i93yUk_9fD" },
  { name: "blog6", url: "www.youtube.com/embed/L2SW84Q7L2I?si=lWbUwU7UbyHAP9M2" },
  { name: "blog5", url: "www.youtube.com/embed/s7Ih4r3CFsE?si=JKDVSNr9f_0lhxpd" },
  { name: "blog4", url: "www.youtube.com/embed/ryfU13Vkmls?si=yu7zO8p8D2oI3CGS" },
  { name: "blog3", url: "www.youtube.com/embed/_WRFMGZHrGs?si=qleUhM8ltZ3EesUA" },
  { name: "blog2", url: "www.youtube.com/embed/bSdCY3ay8Qk?si=GdEtpMNVbdo2JXCy" },
  { name: "blog1", url: "www.youtube.com/embed/r-h2IPPMpBo?si=QYezHrv30jGCPQ29" },
];*/
const getLinks = [
  { name: "blog8", url: "www.youtube.com/embed/gG2aYsNgx88?si=gwOREuZre98uG0FM" },
  { name: "blog7", url: "www.youtube.com/embed/H8eIcx-YAtE?si=Wk0M95i93yUk_9fD" },
  { name: "blog6", url: "www.youtube.com/embed/L2SW84Q7L2I?si=lWbUwU7UbyHAP9M2" },
  { name: "blog5", url: "www.youtube.com/embed/s7Ih4r3CFsE?si=JKDVSNr9f_0lhxpd" },
  { name: "blog4", url: "www.youtube.com/embed/ryfU13Vkmls?si=yu7zO8p8D2oI3CGS" },
  { name: "blog3", url: "www.youtube.com/embed/_WRFMGZHrGs?si=qleUhM8ltZ3EesUA" },
  { name: "blog2", url: "www.youtube.com/embed/bSdCY3ay8Qk?si=GdEtpMNVbdo2JXCy" },
  { name: "blog1", url: "www.youtube.com/embed/r-h2IPPMpBo?si=QYezHrv30jGCPQ29" },
];
/*const generateLinksHTML = links =>
  links
    .map(
      link => `
        <a
          href="${link.url}"
          target="_blank"
          style="display: block;">
          ${link.name}
        </a>
      `
    )
    .join("");

const renderLinks = (containerId, linksHTML) => {
  document.getElementById(containerId).innerHTML = linksHTML;
};
const linksHTML = generateLinksHTML(getLinks());
renderLinks("link-container", linksHTML);*/

function blogs() {
    var blog1 = document.getElementById("blog1");
    blog1.addEventListener("click", function(){window.open('https://youtu.be/r-h2IPPMpBo?si=ve_G_GOLVm1CXINw');});
    var blog2 = document.getElementById("blog2");
    blog2.addEventListener("click", function(){window.open('https://youtu.be/bSdCY3ay8Qk?si=qaWul1NhYZoThcEC');});
    var blog3 = document.getElementById("blog3");
    blog3.addEventListener("click", function(){window.open('https://youtu.be/_WRFMGZHrGs?si=pbDky5_15M7e_-zZ');});
    var blog4 = document.getElementById("blog4");
    blog4.addEventListener("click", function(){window.open('https://youtu.be/ryfU13Vkmls?si=NZ-43wWE_-l__Buk');});
    var blog5 = document.getElementById("blog5");
    blog5.addEventListener("click", function(){window.open('https://youtu.be/s7Ih4r3CFsE?si=4pxEeuve15IUIEXJ');});
    var blog6 = document.getElementById("blog6");
    blog6.addEventListener("click", function(){window.open('https://youtu.be/L2SW84Q7L2I?si=4H3hfV1qTwPzlEmi');});
    var blog7 = document.getElementById("blog7");
    blog7.addEventListener("click", function(){window.open('https://youtu.be/H8eIcx-YAtE?si=BrL7t0uukwtAA6PR');});
    var blog8 = document.getElementById("blog8");
    blog8.addEventListener("click", function(){window.open('https://youtu.be/gG2aYsNgx88?si=PaKMnsNRQQ3qHG8f');});
};
export function Skills() {
	const [data, setData] = useState([]);
        useEffect(()=> {
                fetch("http://localhost:3307/data")
                .then(res => res.json())
                .then(data => setData(data))
                .catch(err => console.log(err));
        }, []);
        return (<div>
        <main>
    	<section className="mainC">
      		<section className="mainC1">
        		<h1 className="mainCTitles">Skill set</h1>
			<ul>
				<li>
					{data.length > 0 ? 
                                        	(data[0].lee_cash_skills.length >= 48 ? 
                                                data[0].lee_cash_skills.slice(0, 3) : 
                                                data[0].lee_cash_skills
                                                ) : 
                                                "date not found"
                                                }
				</li>
				<li>
					{data.length > 0 ? 
                                        	(data[0].lee_cash_skills.length >= 48 ? 
                                                data[0].lee_cash_skills.slice(4, 8) : 
                                                data[0].lee_cash_skills
                                                ) : 
                                                "date not found"
                                                }
				</li>
				<li>
					{data.length > 0 ? 
                                        	(data[0].lee_cash_skills.length >= 48 ? 
                                                data[0].lee_cash_skills.slice(9, 19) : 
                                                data[0].lee_cash_skills
                                                ) : 
                                                "date not found"
                                                }
				</li>
				<li>
					{data.length > 0 ? 
                                        	(data[0].lee_cash_skills.length >= 48 ? 
                                                data[0].lee_cash_skills.slice(20, 25) : 
                                                data[0].lee_cash_skills
                                                ) : 
                                                "date not found"
                                                }
				</li>
				<li>
					{data.length > 0 ? 
                                        	(data[0].lee_cash_skills.length >= 48 ? 
                                                data[0].lee_cash_skills.slice(26, 42) : 
                                                data[0].lee_cash_skills
                                                ) : 
                                                "date not found"
                                                }
				</li>
				<li>
					{data.length > 0 ? 
                                        	(data[0].lee_cash_skills.length >= 48 ? 
                                                data[0].lee_cash_skills.slice(43, 48) : 
                                                data[0].lee_cash_skills
                                                ) : 
                                                "date not found"
                                                }
				</li>
			</ul>
        		<h1>Links</h1>
        		<ul>
          			<li><a href="https://docs.google.com/document/d/11U-PeRWKpVxDgFKCo7N4ncxbx-QHA7CDqgkC0bXaRfo/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> Click this to see Resume</a></li>
          			<li><a href="https://github.com/LeeFCash" target="_blank" rel="noopener noreferrer"> Click this to see my github</a></li>
          			<li><a href="https://youtube.com/playlist?list=PL7vr_kFNXDB7JnTKGR6ZX_kqQGjUqeBQ7&si=XAfIlmkHPb5N08BR" target="_blank" rel="noopener noreferrer"> Click this to see my updated blog</a></li>
        		</ul>
      	</section>
      	<section className="mainC2">
        	<h1 className="mainCTitles">blogs</h1>
        	<div id="blog2" className="cV"><img className="vIMG" src={clickHere} alt="404"></img><p id="containerId" className="vText">Blog#2</p></div>
      	</section>
      	<section className="mainC3">
        	<h1 className="mainCTitles">proof</h1>
        	<p className="mainC3P">So far the only experience I have is teaching at hixson high school shown by the Denise Burt-Turner Special Needs P.E award also some mentoring at chattanooga state community college for TN promise.</p>
        	<img className="mainC3IMG" src={awardTeaching} alt="404"></img>
      	</section>
    	</section>
        </main>
</div>)
}
export default Skills;
