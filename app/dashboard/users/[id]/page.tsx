  // CLIENT COMPONENT that gets rendered on the server 

import React from 'react'

const UserDetails = async ( { params }: { params: { id : string } } ) => {

  const { id } = await params;  // ie, const id = params.id;

  return (
    <>
      <h1 className='text-3xl'>USER DETAILS for user: {id}</h1>

    </>
  )
}

export default UserDetails;