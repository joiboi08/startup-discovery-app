"use client";

function Hello() {
    console.log("Client component, I am!");

    return (
        <h1>Hello from Client component!</h1>
    )
}

export default Hello;


//! even tho directive is 'client', this component is still printing on the below console! 
//* this is because even though it is a client component, it is 
//? PRE RENDERED
// on the server side. It creates a static shell of the component and it is then sent to the client (browser) to be
//?  H Y D R A T E D. 
//? meaning, everything in the client component that DOES NOT NEED INTERACTIVITY WITH BROWSER OR IS DEPENDENT ON BROWSER is still rendered on the server side.
// The code or component parts 
//* that DO NEED INTERACTIVITY or DEPEND ON BROWSER 
// are replaced by placeholders when being pre-rendered on server side. Once that static shell is sent to the client, the browser 
//? DYNAMICALLY REPLACES THE PLACEHOLDERS WITH THE ACTUAL CONTENTS aka HYDRATION.

//* rule of thumb: 
// make all components use 'use server' directive unless you need to use browser specific APIs or need interactivity with the browser.
// if u get it wrong, you'll get a 'use client' error which when u switch to 'use client'. 
//* nextjs docs has a table for when to use client vs server directive