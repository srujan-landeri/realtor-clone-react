import React from 'react';

export default function Profile() {
  const [formData, setFormData] = React.useState({
    name: 'xyz',
    email: 'xyz@gmail.com',
  });
  return (
    <div className="signin-container">
      <h2 className="prof-heading">My Profile</h2>

      <form action="" className="signin m-auto form flex">
        <input
          disabled
          className="form-input prof-input"
          type="text"
          name="name"
          value={formData.name}
        />
        <input
          disabled
          className="form-input prof-input"
          type="email"
          name="email"
          value={formData.email}
        />
      </form>
    </div>
  );
}
