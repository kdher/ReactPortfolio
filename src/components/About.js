import photo from "../assets/images/photo.jpg";
function About() {
	return (
		<section id="about-me">
		<div className ="article-heading">
			<h3>About Me</h3>
		</div>
		<section className="hero">
		<img src={photo}
			alt="photos" />
		   </section>
  
		  <div className ="article-content">
		  
			  <p>
			   My name is Eder, I am from Mexico city. 
			   I am graduate from University UPIICSA of IPN. 
			   I am recently taking the Coding bootcamp at the University
			   Tecnologico de Monterrey. During the course, we learned how to 
			   create usable professional websites using accessibility best 
			   practices and the lates web standard guidelines, resulting in 
			   semantic, HTML 5 and CSS3.
			</p>
		   
		  </div>
		</section>
	);
		}
	export default About;
