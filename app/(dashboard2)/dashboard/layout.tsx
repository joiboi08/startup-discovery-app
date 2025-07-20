import React from 'react'

const DashboardLayout = ( {children}: { children: React.ReactNode } ) => {
  return (
    <div>
        <h1 className="text-5xl font-bold text-center mt-10">
          DASHBOARD TEXT/NAVBAR
        </h1>
        {children}
    </div>
  )
}

export default DashboardLayout;


/* This is where the content of the dashboard pages will be rendered */
/* The children prop will be replaced with the actual page content */

//* This layout will show for all nested pages of dashboard - users, user1, user2 etc. 
//? good for clean UI that does not change between specific pages
//? We can also add a footer or other components that do not change across pages here.