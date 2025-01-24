import { Link } from "react-router-dom";
import MeIMG from '../IMG/MeIMG.jpg';
import diploma from '../IMG/diploma.jpg';
import awardDC from '../IMG/awardDC.png';
import clickHere from '../IMG/clickHere.gif';
import awardTeaching from '../IMG/rewardTeaching.jpg';
import meG from '../IMG/meG.jpg';
export function Home() {
	var homePath = true;
	var aboutPath = false;
	var skillsPath = false;
	var contactMePath = false;
	var IMGsPath = false;
	var BlogsVideosPath = false;
function terminal(e) {
    var terminalType = document.getElementById('terminalType');
    var terminalStuff = document.getElementById('terminalStuff');
    /*var inputQ = document.querySelector(#terminalType);
    console.log(inputQ)
    terminalType.onload = function(e) {*/
    if(e.key === "Enter"){
      switch(true) {
        case terminalType.value === "help":
          var helpCOutput1 = document.createElement('p');
          var helpCOutput2 = document.createElement('p');
          var helpCOutput3 = document.createElement('p');
          var helpCOutput4 = document.createElement('p');
          var helpCOutput5 = document.createElement('p');
          var helpCOutput6 = document.createElement('p');
          var helpCOutput7 = document.createElement('p');
          helpCOutput1.innerHTML = 'type \"clear\" to clear the terminal screen.';
          helpCOutput2.innerHTML = 'type \"whoareyou\" to get info about Lee Cash.';
          helpCOutput3.innerHTML = 'type \"ls\" to know what is in the directory you are located in.';
          helpCOutput4.innerHTML = 'type \"cd \'name of dir or ~ to return to home dir\'\" to go into a directory.';
          helpCOutput5.innerHTML = 'type \"cat \'name of file\'\" to get the content of the file.';
          helpCOutput6.innerHTML = 'type \"Xdg-open \'fileName\'\" to open a IMG or video in the terminal.';
          helpCOutput7.innerHTML = 'commands are cap sensitive and you can click some of the out puts to skip the typing of a command.<br>If command does nothing and does not get clear when you press enter that means that command is something you can do but not at this time.';
          terminalStuff.appendChild(helpCOutput1);
          terminalStuff.appendChild(helpCOutput2);
          terminalStuff.appendChild(helpCOutput3);
          terminalStuff.appendChild(helpCOutput4);
          terminalStuff.appendChild(helpCOutput5);
          terminalStuff.appendChild(helpCOutput6);
          terminalStuff.appendChild(helpCOutput7);
          terminalType.value = "";
          break;
          case terminalType.value === "clear":
            terminalStuff.innerHTML = "";
            terminalType.value = "";
            break;
          case terminalType.value === "ls":
            if(homePath === true){
              var lsOutPut1 = document.createElement('p');
              var lsOutPut2 = document.createElement('p');
              var lsOutPut3 = document.createElement('p');
              var lsOutPut4 = document.createElement('p');
              lsOutPut1.innerHTML = 'about';
              lsOutPut2.innerHTML = 'skills';
              lsOutPut3.innerHTML = 'contactMe';
              lsOutPut4.innerHTML = 'IMGs';
              terminalStuff.appendChild(lsOutPut1);
              terminalStuff.appendChild(lsOutPut2);
              terminalStuff.appendChild(lsOutPut3);
              terminalStuff.appendChild(lsOutPut4);
            }
            if(aboutPath === true){
              var lsOutPut1 = document.createElement('p');
              var lsOutPut2 = document.createElement('p');
              var lsOutPut3 = document.createElement('p');
              lsOutPut1.innerHTML = 'age.txt';
              lsOutPut2.innerHTML = 'name.txt';
              lsOutPut3.innerHTML = 'education.txt';
              terminalStuff.appendChild(lsOutPut1);
              terminalStuff.appendChild(lsOutPut2);
              terminalStuff.appendChild(lsOutPut3);
            }
            if(skillsPath === true){
              var lsOutPut1 = document.createElement('p');
              var lsOutPut2 = document.createElement('p');
              var lsOutPut3 = document.createElement('p');
              var lsOutPut4 = document.createElement('p');
              var lsOutPut5 = document.createElement('p');
              lsOutPut1.innerHTML = 'javaScript.txt';
              lsOutPut2.innerHTML = 'html.txt';
              lsOutPut3.innerHTML = 'css.txt';
              lsOutPut4.innerHTML = 'react.txt';
              lsOutPut5.innerHTML = 'blogsVideos';
              terminalStuff.appendChild(lsOutPut1);
              terminalStuff.appendChild(lsOutPut2);
              terminalStuff.appendChild(lsOutPut3);
              terminalStuff.appendChild(lsOutPut4);
              terminalStuff.appendChild(lsOutPut5);
            }
            if(BlogsVideosPath === true){
              var lsOutPut1 = document.createElement('p');
              var lsOutPut2 = document.createElement('p');
              var lsOutPut3 = document.createElement('p');
              var lsOutPut4 = document.createElement('p');
              var lsOutPut5 = document.createElement('p');
              var lsOutPut6 = document.createElement('p');
              var lsOutPut7 = document.createElement('p');
              var lsOutPut8 = document.createElement('p');
              lsOutPut1.innerHTML = 'blog8.MP4  (why)';
              lsOutPut2.innerHTML = 'blog7.MP4';
              lsOutPut3.innerHTML = 'blog6.MP4';
              lsOutPut4.innerHTML = 'blog5.MP4';
              lsOutPut5.innerHTML = 'blog4.MP4';
              lsOutPut6.innerHTML = 'blog3.MP4';
              lsOutPut7.innerHTML = 'blog2.MP4';
              lsOutPut8.innerHTML = 'blog1.MP4';
              terminalStuff.appendChild(lsOutPut1);
              terminalStuff.appendChild(lsOutPut2);
              terminalStuff.appendChild(lsOutPut3);
              terminalStuff.appendChild(lsOutPut4);
              terminalStuff.appendChild(lsOutPut5);
              terminalStuff.appendChild(lsOutPut6);
              terminalStuff.appendChild(lsOutPut7);
              terminalStuff.appendChild(lsOutPut8);
            }
            if(contactMePath === true){
              var lsOutPut1 = document.createElement('p');
              var lsOutPut2 = document.createElement('p');
              lsOutPut1.innerHTML = 'email.txt';
              lsOutPut2.innerHTML = 'phone#.txt';
              terminalStuff.appendChild(lsOutPut1);
              terminalStuff.appendChild(lsOutPut2);
            }
            if(IMGsPath === true){
              var lsOutPut1 = document.createElement('p');
              var lsOutPut2 = document.createElement('p');
              var lsOutPut3 = document.createElement('p');
              lsOutPut1.innerHTML = 'teachingAward.jpg';
              lsOutPut2.innerHTML = 'discipline.png';
              lsOutPut3.innerHTML = 'diploma.jpg';
              terminalStuff.appendChild(lsOutPut1);
              terminalStuff.appendChild(lsOutPut2);
              terminalStuff.appendChild(lsOutPut3);
            }
            terminalType.value = "";
            break;
            case terminalType.value === "cd about":
              if(homePath === true && terminalType.value === "cd about"){
                homePath = false;
                aboutPath = true;
                skillsPath = false;
                contactMePath = false;
                IMGsPath = false;
                BlogsVideosPath = false;
                terminalType.value = "";
              }
              break;
            case terminalType.value === "cd skills":
                if(homePath === true && terminalType.value === "cd skills"){
                  homePath = false;
                  aboutPath = false;
                  skillsPath = true;
                  contactMePath = false;
                  IMGsPath = false;
                  BlogsVideosPath = false;
                  terminalType.value = "";
                }
                break;
              case terminalType.value === "cd contactMe":
                if(homePath === true && terminalType.value === "cd contactMe"){
                  homePath = false;
                  aboutPath = false;
                  skillsPath = false;
                  contactMePath = true;
                  IMGsPath = false;
                  BlogsVideosPath = false;
                  terminalType.value = "";
                }
                  break;
                case terminalType.value === "cd IMGs":
                  if(homePath === true && terminalType.value === "cd IMGs"){
                    homePath = false;
                    aboutPath = false;
                    skillsPath = false;
                    contactMePath = false;
                    IMGsPath = true;
                    BlogsVideosPath = false;
                    terminalType.value = "";
                  }
                  break;
                case terminalType.value === "cd blogsVideos":
                  if(skillsPath === true && terminalType.value === "cd blogsVideos"){
                  homePath = false;
                  aboutPath = false;
                  skillsPath = false;
                  contactMePath = false;
                  IMGsPath = false;
                  BlogsVideosPath = true;
                  terminalType.value = "";
                  }
                  break;
                case terminalType.value === "cd ~":
                  homePath = true;
                  aboutPath = false;
                  skillsPath = false;
                  contactMePath = false;
                  IMGsPath = false;
                  BlogsVideosPath = false;
                  terminalType.value = "";
                  break;
              case terminalType.value === "Xdg-open teachingAward.jpg":
                if(IMGsPath === true){
                  var XdgOpenOutPut = document.createElement('img');
                  XdgOpenOutPut.src = require('../IMG/rewardTeaching.jpg');
                  terminalStuff.appendChild(XdgOpenOutPut);
                  terminalType.value = "";
                }
                break;
              case terminalType.value === "Xdg-open discipline.png":
                if(IMGsPath === true){
                  var XdgOpenOutPut = document.createElement('img');
                  XdgOpenOutPut.src = require('../IMG/awardDC.png');
                  terminalStuff.appendChild(XdgOpenOutPut);
                  terminalType.value = "";
                }
                break;
              case terminalType.value === "Xdg-open diploma.jpg":
                if(IMGsPath === true){
                  var XdgOpenOutPut = document.createElement('img');
                  XdgOpenOutPut.src = require('../IMG/diploma.jpg');
                  terminalStuff.appendChild(XdgOpenOutPut);
                  terminalType.value = "";
                }
                break;
              case terminalType.value === "Xdg-open blog1.MP4":
                  if(BlogsVideosPath === true){
                    var XdgOpenOutPut = document.createElement('iframe');
                    XdgOpenOutPut.src = blogLinks[0];
                    terminalStuff.appendChild(XdgOpenOutPut);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "Xdg-open blog2.MP4":
                  if(BlogsVideosPath === true){
                    var XdgOpenOutPut = document.createElement('iframe');
                    XdgOpenOutPut.src = blogLinks[1];
                    terminalStuff.appendChild(XdgOpenOutPut);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "Xdg-open blog3.MP4":
                  if(BlogsVideosPath === true){
                    var XdgOpenOutPut = document.createElement('iframe');
                    XdgOpenOutPut.src = blogLinks[2];
                    terminalStuff.appendChild(XdgOpenOutPut);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "Xdg-open blog4.MP4":
                  if(BlogsVideosPath === true){
                    var XdgOpenOutPut = document.createElement('iframe');
                    XdgOpenOutPut.src = blogLinks[3];
                    terminalStuff.appendChild(XdgOpenOutPut);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "Xdg-open blog5.MP4":
                  if(BlogsVideosPath === true){
                    var XdgOpenOutPut = document.createElement('iframe');
                    XdgOpenOutPut.src = blogLinks[4];
                    terminalStuff.appendChild(XdgOpenOutPut);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "Xdg-open blog6.MP4":
                  if(BlogsVideosPath === true){
                    var XdgOpenOutPut = document.createElement('iframe');
                    XdgOpenOutPut.src = blogLinks[5];
                    terminalStuff.appendChild(XdgOpenOutPut);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "Xdg-open blog7.MP4":
                  if(BlogsVideosPath === true){
                    var XdgOpenOutPut = document.createElement('iframe');
                    XdgOpenOutPut.src = blogLinks[6];
                    terminalStuff.appendChild(XdgOpenOutPut);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "Xdg-open blog8.MP4":
                  if(BlogsVideosPath === true){
                    var XdgOpenOutPut = document.createElement('iframe');
                    XdgOpenOutPut.src = blogLinks[7];
                    terminalStuff.appendChild(XdgOpenOutPut);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "cat javaScript.txt":
                  if(skillsPath === true && terminalType.value === "cat javaScript.txt"){
                    var textjavascript = document.createElement('p');
                    textjavascript.innerHTML = 'As you see this website is proof I know how to use javascript.';
                    terminalStuff.appendChild(textjavascript);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "cat html.txt":
                  if(skillsPath === true && terminalType.value === "cat html.txt"){
                    var texthtml = document.createElement('p');
                    texthtml.innerHTML = 'As you see this website is proof I know how to use html.';
                    terminalStuff.appendChild(texthtml);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "cat css.txt":
                  if(skillsPath === true && terminalType.value === "cat css.txt"){
                    var textcss = document.createElement('p');
                    textcss.innerHTML = 'As you see this website is proof I know how to use css.';
                    terminalStuff.appendChild(textcss);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "cat react.txt":
                  if(skillsPath === true && terminalType.value === "cat react.txt"){
                    var textreact = document.createElement('p');
                    textreact.innerHTML = 'As you see this website is proof I know how to use react.';
                    terminalStuff.appendChild(textreact);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "cat age.txt":
                  if(aboutPath === true && terminalType.value === "cat age.txt"){
                    var textage = document.createElement('p');
                    textage.innerHTML = 'My age is 20';
                    terminalStuff.appendChild(textage);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "cat name.txt":
                  if(aboutPath === true && terminalType.value === "cat name.txt"){
                    var textname = document.createElement('p');
                    textname.innerHTML = 'My name is Lee Cash.';
                    terminalStuff.appendChild(textname);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "cat education.txt":
                  if(aboutPath === true && terminalType.value === "cat education.txt"){
                    var texteducation = document.createElement('p');
                    texteducation.innerHTML = 'I have a High school Diploma and I graduated at Hixson High School.';
                    terminalStuff.appendChild(texteducation);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "cat phone#.txt":
                  if(contactMePath === true && terminalType.value === "cat phone#.txt"){
                    var textphone = document.createElement('p');
                    textphone.innerHTML = '+1 762 222-3156';
                    terminalStuff.appendChild(textphone);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "cat email.txt":
                  if(contactMePath === true && terminalType.value === "cat email.txt"){
                    var textemail = document.createElement('p');
                    textemail.innerHTML = 'leecash133@gmail.com';
                    terminalStuff.appendChild(textemail);
                    terminalType.value = "";
                  }
                break;
              case terminalType.value === "whoareyou":
                var whoareyou = document.createElement('p');
                whoareyou.innerHTML = 'I am LeeCash.<br>I use arch linux as my operating system and I like to learn.';
                terminalStuff.appendChild(whoareyou);
                terminalType.value = "";
                  if(contactMePath === true && terminalType.value === "cat email.txt"){
                    var textemail = document.createElement('p');
                    textemail.innerHTML = 'leecash133@gmail.com';
                    terminalStuff.appendChild(textemail);
                    terminalType.value = "";
                  }
                break;
          default:
            var defaultOutPut = document.createElement('p');
            defaultOutPut.innerHTML = 'Unkown command try \"help\" command';
            terminalStuff.appendChild(defaultOutPut);
            terminalType.value = "";
      }
    }
  }
	var blogLinks = ['https://www.youtube.com/embed/r-h2IPPMpBo?si=QYezHrv30jGCPQ29', 'https://www.youtube.com/embed/bSdCY3ay8Qk?si=GdEtpMNVbdo2JXCy', 'https://www.youtube.com/embed/_WRFMGZHrGs?si=qleUhM8ltZ3EesUA', 'https://www.youtube.com/embed/ryfU13Vkmls?si=yu7zO8p8D2oI3CGS', 'https://www.youtube.com/embed/s7Ih4r3CFsE?si=JKDVSNr9f_0lhxpd', 'https://www.youtube.com/embed/L2SW84Q7L2I?si=lWbUwU7UbyHAP9M2', 'https://www.youtube.com/embed/H8eIcx-YAtE?si=Wk0M95i93yUk_9fD', 'https://www.youtube.com/embed/gG2aYsNgx88?si=gwOREuZre98uG0FM'];
        return (<div>
	<main>
		<div className='main0'>
			<p className="beforeTabinfo">Hello, my name is Lee Cash, and you can get to know me better by clicking any of the 3 tabs at the top.</p>
			<section>
				<div className='tab0Split'>
					<div className='tab0SplitD'>
						<img className='tab0SplitDImg' src={meG} alt='404'></img>
					</div>
					<div className='tab0SplitD2'>
						<div id='terminalStuff'><p><pre>
						Type "help" to get a list of things to do or see in the box below.<br></br>
						_________________________________________________________________________ <br></br>
						|  |   | ____| | ____|      | ___|      / /\ \       |  ____|  | |    | |<br></br>
						|  |   | |___  | |___       | |        / /__\ \      | |____   | |____| |<br></br>
						|  |   |  ___| |  ___|      | |       / /____\ \     |_____ |  | _____  |<br></br>
						|  |__ | |___  | |___       | |__    / /      \ \     ____| |  | |    | |<br></br>
						|_____||_____| |_____|      |____|  /_/        \_\   |______|  |_|    |_|<br></br>
						</pre></p>
						</div>
					<input id='terminalType' className='helpText1' onKeyDown={terminal}></input>
					</div>
				</div>
			</section>
		</div>
	</main>
	</div>
)}
export default Home;
