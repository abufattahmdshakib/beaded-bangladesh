import React from "react";

const ProfileInfo = ({ user }) => {
  return (
    <div>
      <h3 className="font-semibold mb-2">Profile Info</h3>
      <p>Email: {user?.email || "user@example.com"}</p>
      <p>Mobile: {user?.mobile || "No mobile number added"}</p>
      <p>Member since: Jan 2025</p>
    </div>
  );
};

export default ProfileInfo;
