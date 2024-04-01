import Profile from "../../components/Profile";
import ProfileProgress from "../../components/ProfileProgress";
import Dashboard from "../../components/Dashboard";

function ProfilePage() {
  return (
    <div className="flex">
      <Dashboard />
      <Profile />
      <ProfileProgress />
    </div>
  );
}

export default ProfilePage;
