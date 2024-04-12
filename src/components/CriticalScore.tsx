import { Badge } from "@chakra-ui/react";

interface Props {
	score: number;
}

const CriticalScore = ({ score }: Props) => {
	const color = score >= 75 ? "green" : score >= 50 ? "yellow" : "red";
	return (
		<Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>{score}</Badge>
	)
}

export default CriticalScore