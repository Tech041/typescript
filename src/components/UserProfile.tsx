interface User {
  id: number;
  name: string;
  isAdult: boolean;
}

const UserProfile = (user: User) => {
  return (
    <div>
      <p className="">{user.id}</p>
      <p className="">{user.name}</p>
      {user.isAdult ? "Qualified" : "Disqualified"}
    </div>
  );
};

export default UserProfile;
