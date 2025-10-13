
import profile1 from './profile1.jfif';
import './Profile.css';
function Profile() {
    return (
        <div class="profile-card">
        <h4 class="profile-headings">Profile Card</h4>
        <img src={profile1} alt="Profile Picture" class="profile-img"/>
        <h2 class="name">Bhuvaneswari</h2>
        <p class="bio">Web Developer </p>
        <div class="social-links">
            <a href="#" class="social-btn"> LinkedIn</a>
            <a href="#" class="social-btn"> Twitter</a>
        </div>
    </div>
    );
  }
  
  export default Profile;
