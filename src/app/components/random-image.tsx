'use client'
import getRandomImageData from "@/services/get-random-image-data"; 
import { faker } from '@faker-js/faker';
import React from 'react';

type Props = {
    initialImageData: string;
}

export default function RandomImage({initialImageData}: Props) { 
    const [word, setWord] = React.useState('');
    const [imageData, setImageData] = React.useState(initialImageData);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (word) {
            setLoading(true);
            getRandomImageData({ word }).then((data) => {
                setLoading(false);
                setImageData(data);
            });
        }
    }, [word]);

    function handleClickGeneratorNewImage() {
        setWord(faker.animal.cat());
    }
    
    return (
        <div className='flex flex-col gap-2'>
            <div className='w-96 h-96 bg-no-repeat bg-cover bg-center rounded-lg'
                style={{backgroundImage: `url(${imageData})` }} />
            
            <button 
                className='p-5 rounded-lg bg-blue-500 text-white text-xl'  
                onClick={handleClickGeneratorNewImage}
            >
                {!loading ? 'Generate New Image' : 'Generating...'}
            </button>
        </div>
    );
}
