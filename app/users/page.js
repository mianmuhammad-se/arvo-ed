import ProfileCard from "../components/ProfileCard";

export default function Page() {
  const adminUser = {
    name: "Admin User",
    email: "admin@example.com",
    phone: "123-456-7890",
  };

  const memberUser = {
    name: "Member User",
    email: "member@example.com",
    phone: "123-456-7890",
  };

  const guestUser = {
    name: "Guest User",
  };

  return (
    <>
      <ProfileCard user={adminUser} role="admin" />
      <ProfileCard user={memberUser} role="member" />
      <ProfileCard user={guestUser} role="guest" />
    </>
  );
}
