import React, { Component } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import snow from '../styles/Snow.module.scss';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			view: [],
			bgcolor: { backgroundColor: 'rgb(38, 8, 13)' },
			welcome: { color: 'white' }
		}
	}

	listenScrollEvent = event => {
		let scrollPosition = window.pageYOffset;
		let break1 = - window.innerHeight / 3 + (window.innerHeight * 35 / 100) + (window.innerWidth * .26837) - 47 + 800;
		let break2 = break1 + 1200;
		let break3 = break2 + 1200;
		if (window.scrollY > 2) {
			this.setState({ welcome: { color: 'black' } })
		}
		if (window.scrollY < 2) {
			this.setState({ welcome: { color: 'white' } })
		}
		if (window.scrollY > break1 && window.scrollY < break2) {
			this.setState({ bgcolor: { backgroundColor: 'black' } })
		} else if (window.scrollY > break2 && window.scrollY < break3) {
			this.setState({ bgcolor: { backgroundColor: 'rgb(242, 218, 196)' } })
		} else if (window.scrollY > break3) {
			this.setState({ bgcolor: { backgroundColor: 'black' } })
		} else {
			this.setState({ bgcolor: { backgroundColor: 'rgb(38, 8, 13)' } })
		}

		const j = document.getElementById("J");
		// const o = document.getElementById("O");
		// const u = document.getElementById("U");
		// const r = document.getElementById("R");
		// const n = document.getElementById("N");
		// const e = document.getElementById("E");
		// const y = document.getElementById("Y");
		j.style.transform = `translate(0%, ${scrollPosition * 0.7}px)`;
		// o.style.transform = `translate(0%, ${scrollPosition * 0.7}px)`;
		// u.style.transform = `translate(0%, ${scrollPosition * 0.7}px)`;
		// r.style.transform = `translate(0%, ${scrollPosition * 0.7}px)`;
		// n.style.transform = `translate(0%, ${scrollPosition * 0.7}px)`;
		// e.style.transform = `translate(0%, ${scrollPosition * 0.7}px)`;
		// y.style.transform = `translate(0%, ${scrollPosition * 0.7}px)`;

		const far = document.getElementById("far");
		const mid = document.getElementById("mid");
		far.style.transform = `translate(0%, ${scrollPosition * .4}px)`;
		mid.style.transform = `translate(0%, ${scrollPosition * .2}px)`;

		const teneez = document.getElementById("teneezimg");
		const musrover = document.getElementById("musroverimg");
		if (window.scrollY > break1) {
			teneez.style.objectPosition = `0 ${(window.scrollY - (break1 + 100)) * .08}%`;
		}
		if (window.scrollY > (break1 + 200)) {
			musrover.style.objectPosition = `${(window.scrollY - (break1 + 300)) * .08}% 0`;
		}
		const oculo = document.getElementById("oculoimg");
		const johndeere = document.getElementById("johndeereimg");
		if (window.scrollY > break2) {
			oculo.style.objectPosition = `0 ${(window.scrollY - (break2 + 100)) * .09}%`;
		}
		if (window.scrollY > (break2 + 500)) {
			johndeere.style.objectPosition = `0 ${(window.scrollY - (break2 + 600)) * .09}%`;
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.listenScrollEvent)
	}

	render() {
		return (
			<div className={styles.container} >
				<Head>
					<title>Benoit Ortalo-Magne</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<main className={styles.main}>
					<div className={styles.landingpage}>
						<div className={snow.snowwrap}>
							<div className={`${snow.snow} ${snow.snow_near}`} />
							<div className={`${snow.snow} ${snow.snow_near} ${snow.snow_alt}`} />
							<div className={`${snow.snow} ${snow.snow_mid}`} />
							<div className={`${snow.snow} ${snow.snow_mid} ${snow.snow_alt}`} />
							<div className={`${snow.snow} ${snow.snow_far}`} />
							<div className={`${snow.snow} ${snow.snow_far} ${snow.snow_alt}`} />
						</div>
						<p style={this.state.welcome}>Welcome to my</p>
						<h1>
							<span style={{ position: "absolute" }} id="J">JOURNEY</span>
							{/* <span style={{ position: "absolute", left: '-41.5vw' }} id="J">J</span>
							<span style={{ position: "absolute", left: '-35.5vw' }} id="O">O</span>
							<span style={{ position: "absolute", left: '-21vw' }} id="U">U</span>
							<span style={{ position: "absolute", left: '-8.8vw' }} id="R">R</span>
							<span style={{ position: "absolute", left: '3vw' }} id="N">N</span>
							<span style={{ position: "absolute", left: '15.7vw' }} id="E">E</span>
							<span style={{ position: "absolute", left: '28vw' }} id="Y">Y</span> */}
						</h1>
					</div>
					{/* <img src="/Mountain.png" alt="Mountains" /> */}
					{/* <img src="/Mountain_back.png" alt="Mountains" />
					<img src="/Mountain_front.png" alt="Mountains" /> */}
					<img src="/Mountain_3.png" id="far" alt="Mountains" />
					<img src="/Mountain_2.png" id="mid" alt="Mountains" />
					<img src="/Mountain_1.png" id="close" alt="Mountains" />
					<div className={styles.about} style={this.state.bgcolor}>
						<div>
							<div id={styles.abouttxtwrap}>
								<h1>WHO AM I</h1>
								<p id={styles.abouttxt}>Benoit Ortalo-Magne</p>
								<p id={styles.abouttxt}>Senior in Computer Engineering</p>
							</div>
							<div id={styles.aboutimgwrap}>
								<img src="/Profile.png" alt="Mountains" id={styles.aboutimg} />
							</div>
						</div>
						<div>
							<p>I began coding my senior year of high school, starting with HTML / CSS and later moving to Java.
							As a freshman at UIUC I learned to write C / C++ and assembly, but always found myself missing
							web development. I started looking for opportunities to practice and found a research position
							writing Angular 4, which reminded me how much fun this could really be. Since then, React has
								been my chosen language, and I enjoy creating websites in the spare time I have.</p>
						</div>
					</div>
					<div className={styles.projects} style={this.state.bgcolor}>
						<h1>PROJECTS</h1>
						<div className={styles.projleft}>
							<img src="/Teneez.png" alt='Teneez' id="teneezimg" />
							<p><b>TENEEZ</b></p>
							<p><b>Cofounder, Website Team Lead, Frontend Dev</b></p>
							<p><b>Nov 2019 - Present</b></p>
							<p>A startup I cofounded with a friend of mine. We rent the latest and hypest sneakers to give people access to the best sneakers without the price tag.</p>
						</div>
						<div className={styles.projright}>
							<img src="/MusRover.png" alt='MusRover' id="musroverimg" className={styles.musroverimg} />
							<p><b>MUS-ROVER</b></p>
							<p><b>Undergraduate Researcher, Fronted Dev, Design</b></p>
							<p><b>Dec 2018 - June 2020</b></p>
							<p>Researching music intelligence, MUS-ROVER paired with this wep app is the first automatic music theorist that analyzes music from scratch.</p>
						</div>
					</div>
					<div className={styles.work} style={this.state.bgcolor}>
						<h1>WORK</h1>
						<div className={styles.projleft}>
							<img src="/Oculo.png" alt='Oculo' id="oculoimg" />
							<p><b>OCULO</b></p>
							<p><b>Software Engineer</b></p>
							<p><b>Spring Semester 2020</b></p>
							<p>Refining and finishing a Python application to improve the software's user experience and speed up data processing times.</p>
						</div>
						<div className={styles.projright}>
							<img src="/JohnDeere.png" alt='JohnDeere' id="johndeereimg" />
							<p><b>JOHN DEERE</b></p>
							<p><b>IT Intern, Web Development</b></p>
							<p><b>Summer 2019</b></p>
							<p>Adding automated testing to the sales center website using Cypress, ESLint, and unit tests to ensure quality. DevOps work with GitHub Enterprise.</p>
						</div>
					</div>
					<div className={styles.contact} style={this.state.bgcolor}>
						<h1>CONTACT</h1>
						<div>
							<p><b>LinkedIn:</b> <a href="https://linkedin.com/in/benoit-ortalo-magne">linkedin.com/benoit_ortalo-magne</a></p>
							<p><b>Resume: </b> <a href="/Resume.pdf">Resume_2020_pdf</a></p>
							<p><b>Github: </b> <a href="https://github.com/benoiteom">github.com/benoiteom</a></p>
							<p><b>Email:</b> <a href="mailto: bortalomagne@gmail.com">bortalomagne@gmail.com</a></p>
						</div>
					</div>
				</main>
			</div >
		)
	}
}
