export type User = {
  id: number;
  name: string;
  isAdmin?: boolean;
};

const UserAccount = ({ user }: { user: User }) => {
  return (
    <>
      <h1 className="">User Profile</h1>
      {user.isAdmin && <button>Edit</button>}
      <div className="">
        <strong className="">Name:</strong> {user.name}
      </div>{" "}
    </>
  );
};

export default UserAccount;
