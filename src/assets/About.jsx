import "./About.css"
function About() {
  return (
   <>
   <div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 style={{textAalign:"center"}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="https://static.wixstatic.com/media/3a1cf0_d18d2b726519402a86c6ed029dbe3a9c~mv2.png/v1/fill/w_300,h_310,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/founder.png" alt="Jane"style={{width:"100%"}}  />
      <div className="container">
        <h2>Maaz Khan</h2>
        <p className="title">CEO</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>Maazkhan24640@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://static.wixstatic.com/media/3a1cf0_d18d2b726519402a86c6ed029dbe3a9c~mv2.png/v1/fill/w_300,h_310,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/founder.png" alt="Mike" style={{width:"100%"}} />
      <div className="container">
        <h2>Muhammad Fayaz</h2>
        <p className="title">Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>MuhammadFayaz123@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://static.wixstatic.com/media/3a1cf0_d18d2b726519402a86c6ed029dbe3a9c~mv2.png/v1/fill/w_300,h_310,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/founder.png" alt="John" style={{width:"100%"}}  />
      <div className="container">
        <h2>Asher Imtiaz</h2>
        <p className="title">Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>Asherimtaiz321@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default About
