import './App.css';
import Button from './components/button/button.jsx';
import Icon from './components/icon/icon.jsx';
import img_Profile from './assets/profile.png';
import iconLinkedin from './assets/linkedin.svg';
import iconInsta from './assets/instagram.svg';
import iconGitHub from './assets/github.svg';
const imgProfile = 'https://avatars.githubusercontent.com/u/78483701?v=4'; 

function App() {
  return (
    <div className="App">
      <div className="cont-profile">
        <img id='img-profile' src={imgProfile} alt="" />
      </div>
      <p id="title_social" >@edu_jr_004</p>
      <div className="cont-buttons">
        <Button title={'LINKEDIN'} link={'https://www.linkedin.com/in/eduardo-alves-de-oliveira-junior-46b668208/'} redirect={true}/>
        <Button title={'INSTAGRAM'} link={'https://www.instagram.com/edu_jr_004/'} redirect={true}/>
        <Button title={'GITHUB'} link={'https://github.com/Junior042'} redirect={true}/>
      
      </div>
      <div className="cont-icons">
        <Icon alt={'Linkedin'} link={'https://www.linkedin.com/in/eduardo-alves-de-oliveira-junior-46b668208/'} image={iconLinkedin} redirect={true}/>
        <Icon alt={'Instagram'} link={'https://www.instagram.com/edu_jr_004/'} image={iconInsta} redirect={true}/>
        <Icon alt={'GitHub'} link={'https://github.com/Junior042'} image={iconGitHub} redirect={true}/>

      </div>
    </div>
  );
}

export default App;