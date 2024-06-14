'use client';
import { useState } from 'react';

interface Artwork {
  id: number;
  title: string;
  image_id: string;
  description: string;
}

interface Props {
  artwork: Artwork;
}

export default function ArtworkDetail({ artwork }: Props) {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  return (
    <div className="flex flex-col  p-4 px-16 lg:w-[700px]">
      <h1 className="mb-10 text-2xl  font-bold lg:text-3xl">
        Individual Artwork Page
      </h1>

      <div className="shawdow-xl border-10 rounded-xl border-blue-500 bg-gray-200 pt-10">
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.title}
          className=" h-[500px] w-[700px] px-10 lg:h-[500px] lg:w-[500px]"
        />
        <h2 className="px-10 pb-4 text-center text-3xl font-bold lg:w-[500px]">
          {artwork.title}
        </h2>
      </div>
      <div className=" pt-5">
        <button
          onClick={() => setShowDescription(!showDescription)}
          className="text-1xl rounded-lg bg-blue-500 px-10 py-5 text-white"
        >
          {showDescription ? 'Hide Description' : 'Show Description'}
        </button>
      </div>
      {showDescription && (
        <p className="mt-4 text-2xl text-red-500">
          {artwork.description
            ? artwork.description
            : 'No description available.'}
        </p>
      )}
    </div>
  );
}
