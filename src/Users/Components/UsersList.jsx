import React from "react";
import "./UserItem.css";
import UserItem from "./UserItem";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No User Found</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
