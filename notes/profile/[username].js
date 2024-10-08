import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { username } = router.query;
  //to destructure whatever we put in our URL we use router.query
  return <div> Hello {username}!</div>;
};

export default Profile;

// creating a page that goes to localhost:3000/profile/username
