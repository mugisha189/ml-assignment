
import { Box } from '@mui/material';

const MetricCircle = ({ color = '#4caf50', children }: { color: string, children: any }) => {
  // Calculate the stroke-dasharray and stroke-dashoffset for the circular progress
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = 75; // This can be made dynamic if needed
  const offset = circumference - (progress / 100) * circumference;

  return (
    <Box position="relative" width={112} height={112}>
      <svg 
        width="112" 
        height="112" 
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx="56"
          cy="56"
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="8"
          fill="none"
        />
        {/* Foreground circle */}
        <circle
          cx="56"
          cy="56"
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        style={{
          transform: 'translate(-50%, -50%)',
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'white'
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MetricCircle;