import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowMedia from './ShowMedia';

const Media = () => {
    const [medias,setMedias] = useState([])
    useEffect(() =>{
        fetch('https://socio-buzz-server.vercel.app/post')
        .then(res => res.json())
        .then(data => setMedias(data))
    },[])
    console.log(medias);
    return (
        <div>
            {
                medias.map(media => <ShowMedia
                key={media._id}
                media={media}
                ></ShowMedia>)
            }
        </div>
    );
};

export default Media;