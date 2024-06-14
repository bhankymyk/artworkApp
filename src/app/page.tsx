'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Artwork {
  id: number;
  title: string;
  image_id: string;
}

const fetchArtworks = async (
  page: number,
): Promise<{ data: Artwork[]; pagination: { total: number } }> => {
  const res = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`);
  if (!res.ok) {
    throw new Error('Failed to fetch artworks');
  }
  return res.json();
};

export default function Home() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadArtworks = async () => {
      setLoading(true);
      try {
        const data = await fetchArtworks(currentPage);
        setArtworks(data.data);
        const totalItems = data.pagination.total;
        const itemsPerPage = 12;
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadArtworks();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/imageNotfound.png';
  };

  return (
    <>
      <div className="flex flex-col p-4 px-16">
        <h1 className="pb-5 text-3xl font-bold sm:text-center lg:text-5xl">
          Welcome to Artify
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div className="grid cursor-pointer grid-cols-1 gap-10 p-10 shadow-xl lg:grid-cols-3">
              {artworks.map((art) => (
                <Link
                  href={`/artworks/${art.id}`}
                  key={art.id}
                  className="shadow-1xl rounded-xl border-4 border-gray-500 bg-gray-200 p-4"
                >
                  <img
                    src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
                    alt={art.title}
                    className="h-[200px] w-[300px] lg:h-[500px] lg:w-[500px]"
                    onError={handleImageError}
                  />
                  <h2 className="text-center font-bold  lg:text-3xl ">
                    {art.title}
                  </h2>
                </Link>
              ))}
            </div>
            <div className="mt-5 flex justify-between">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="rounded-lg bg-blue-500 px-2 py-3 font-bold text-white disabled:bg-gray-400 lg:px-10 lg:py-5 lg:text-2xl"
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="rounded-lg bg-blue-500 px-4 py-3 font-bold text-white disabled:bg-gray-400 lg:px-10 lg:py-5 lg:text-2xl"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
