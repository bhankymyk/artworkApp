import { Metadata } from 'next';
import ArtworkDetail from '@/artworkDescription';

interface Artwork {
  id: number;
  title: string;
  image_id: string;
  description: string;
}

const fetchArtworkById = async (id: number): Promise<{ data: Artwork }> => {
  const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
  if (!res.ok) {
    throw new Error('Artwork not found');
  }
  return res.json();
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { data: artwork } = await fetchArtworkById(Number(params.id));
  return {
    title: artwork.title,
    description: artwork.description,
  };
}

interface Props {
  params: { id: string };
}

export default async function ArtworkPage({ params }: Props) {
  const { data: artwork } = await fetchArtworkById(Number(params.id));

  return <ArtworkDetail artwork={artwork} />;
}
