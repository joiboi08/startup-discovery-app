import React from 'react'

const RootLayout = ( {children}: {children: React.ReactNode} ) => {
  return (
    <div>
        <h1 className="text-5xl font-bold text-center mt-10">
            ROOT ELEMENT/ROOT NAVBAR
        </h1>
        {children}
    </div>
  )
}

export default RootLayout;

// now this root layout points to home page. 
