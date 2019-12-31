import React from 'react'
import './admin-member-upsert.styles.scss';

const AdminMemberUpsert = (member) => {
  const { id, name, email, phone, startDate, role, imageUrl, DOB, position } = member;

  return (
  <div className='admin-member-upsert'>
    <h3>Create Member</h3>
      <div className='image' style={{
                backgroundImage: `url(${imageUrl})`
            }}></div>
      <div className='name'><span>Full Name</span> {name}</div>
      <div className='email'><span>E-mail</span> {email}</div>
      <div className='phone'><span>Phone</span> {phone}</div>
      <div className='startDate'><span>Joined</span> {startDate}</div>
      <div className='role'><span>Role</span> {role}</div>
      <div className='DOB'><span>Date of Birth</span> {DOB}</div>
      <div className='position'><span>Preferred Position</span> {position}</div>
  </div>
  );
}

export default AdminMemberUpsert;