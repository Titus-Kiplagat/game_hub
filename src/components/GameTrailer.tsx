import useTrailer from "../hooks/useTrailers";

interface Props {
	gameId: number
}

const GameTrailer = ({ gameId }: Props) => {
	const { data: Trailers, isPending, error } = useTrailer(gameId);

	if (isPending) return null;

  if (error) throw error;

  const trailer = Trailers?.results[0];
  return trailer ? (
    <video
      src={trailer.data[480]}
      poster={trailer.preview}
      controls
    />
  ) : null;
}

export default GameTrailer