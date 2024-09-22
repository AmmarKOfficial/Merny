import UsersList from "../Components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ammar Khan",
      image:
        "https://images.pexels.com/photos/27913669/pexels-photo-27913669/free-photo-of-portrait-of-a-man-with-a-mustache.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      places: 10,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
