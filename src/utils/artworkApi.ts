const API_URL = 'https://api.artic.edu/api/v1/artworks';

export interface Artwork {
  id: number;
  title: string;
  image_id: string;
  description: string;
}

export interface ArtworkResponse {
  data: Artwork[];
  config: {
    iiif_url: string;
  };
}

export const fetchArtworks = async (page = 1): Promise<ArtworkResponse> => {
  const response = await fetch(`${API_URL}?page=${page}`);
  if (!response.ok) {
    throw new Error('Failed to fetch artworks');
  }
  const data: ArtworkResponse = await response.json();
  return data;
};

export const fetchArtworkById = async (
  id: number,
): Promise<{ data: Artwork }> => {
  const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
  if (!res.ok) {
    throw new Error('Artwork not found');
  }
  const data = await res.json();
  console.log(data); 
  return data;
};
