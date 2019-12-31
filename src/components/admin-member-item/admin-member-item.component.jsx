import React from 'react'
import './admin-member-item.styles.scss';

const AdminMemberItem = (member) => {
  const { id, name, email, phone, startDate, role, imageUrl, DOB, position } = member;
  
  return (
  <tr className='admin-member-item'>
      <td className='id'>{id}</td>
      <td className='firstName'>{name}</td>
      <td className='email'>{email}</td>
      <td className='phone'>{phone}</td>
      <td className='startDate'>{startDate}</td>
      <td className='role'>{role}</td>
      <td className='role'>{imageUrl}</td>
      <td className='role'>{DOB}</td>
      <td className='role'>{position}</td>
  </tr>
  );
}

export default AdminMemberItem;