import React from 'react'


const  Albums = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
        next : { revalidate: 5 } // revalidate every 5 seconds 
    });
    if (!response.ok) {
        throw new Error('Failed to fetch albums');
    }

    const albums = await response.json(); 



  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div>ALL Albums: </div>
       {albums.map( (album: {id: number, title: string} ) => {
        return (
            <div key={album.id} className='bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-105'>
                <br />
                <p className='text-gray-600'>{album.id}</p>
                <p className='text-lg font-bold mb-2 text-gray-600'>{album.title}</p>
                <br />
            </div>
        )

       })}
    </div>
  )
}

export default  Albums