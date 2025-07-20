import Link from 'next/link';
import React from 'react'

const UserPage = () => {
  return (
   <>
    <div>Showing all users: </div>

    <ul className='mt-10'>
        <Link href='/dashboard/users/1'><li className='mb-2'>User 1</li></Link>
        <Link href='/dashboard/users/2'><li className='mb-2'>User 2</li></Link>
        <Link href='/dashboard/users/3'><li className='mb-2'>User 3</li></Link>
        <Link href='/dashboard/users/4'><li className='mb-2'>User 4</li></Link>
    </ul>
   </>
  )
}

export default UserPage;


//! Dynamic Routing in NextJs
//* There could be n number of users and we cannot manually create a page for each user as we don't know how many users there will be. 
// So we can use dynamic routing to create a page for each user dynamically.
// we want files to be like "app/dashboard/users/1", "app/dashboard/users/2", "app/dashboard/users/3" etc.
//* So we create a new FOLDER inside users called [id]
//* BRACKETS because we wrap the dynamic part (the user id) in square brackets like this: [id]
// And create a file called page.tsx inside the users folder.
// now it is a dynamic route!! 