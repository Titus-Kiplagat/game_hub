import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

const GameCardContainer = ({ children }: {children: ReactNode}) => {
	return (
		<Box
			_hover={{
				transform: "scale(1.05)",
				transition: "transform 0.15s ease-in-out",
			}}
			height={370}
			borderRadius={10}
			overflow="hidden">
			{children}
		</Box>
	)
}

export default GameCardContainer