import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="user-image"
      />

      <h2>
        {user.name.first} {user.name.last}
      </h2>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <p>
        <strong>Age:</strong> {user.dob.age}
      </p>

      <p>
        <strong>Gender:</strong> {user.gender}
      </p>

      <p>
        <strong>Location:</strong> {user.location.city},{" "}
        {user.location.country}
      </p>

      <p>
        <strong>Username:</strong> {user.login.username}
      </p>
    </div>
  );
};

export default UserCard;