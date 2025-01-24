import { Link } from "react-router-dom";
export function NotFound() {
	return (
		<div>
			<p> 404 not found link path:</p>
			<ol>
				<li><p>/AboutMe</p></li>
				<li><p>/ContactMe</p></li>
				<li><p>/Home</p></li>
				<li><p>/Skills</p></li>
			</ol>
		</div>
	)
}
export default NotFound;
