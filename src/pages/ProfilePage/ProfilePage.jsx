import Profile from '../../components/Profile'
import ProfileProgress from '../../components/ProfileProgress'

function ProfilePage() {
  return (
    <div className='container flex p-10 bg-gray-100 rounded-lg justify-between'>
        <Profile/>
        <ProfileProgress/>
    </div>
  );
}

export default ProfilePage;
