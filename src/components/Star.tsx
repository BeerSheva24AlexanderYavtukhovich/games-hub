import { Box } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

interface StarProps {
  fillPercentage: number; 
  size?: string | number;
  color?: string;
  backgroundColor?: string;
}

const Star: React.FC<StarProps> = ({
  fillPercentage,
  size = "20px",
  color = "#fcd34a",
  backgroundColor = "#e5e7ea",
}) => {
  return (
    <Box position="relative" width={size} height={size} display="inline-block">
      <Box color={backgroundColor} position="absolute" top={0} left={0}>
        <FaStar size={size} />
      </Box>
      <Box
        color={color}
        position="absolute"
        top={0}
        left={0}
        width={`${fillPercentage}%`}
        overflow="hidden"
        whiteSpace="nowrap"
      >
        <FaStar size={size} />
      </Box>
    </Box>
  );
};

export default Star;