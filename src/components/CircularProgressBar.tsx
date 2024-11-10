const CircularProgressBar = ({ progress = 75, size = 100, strokeWidth = 8 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;
  
    return (
      <svg
        width={size}
        height={size}
        className="rotate-[0deg]" // Rotate to start from the top
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="gray"
          strokeWidth={strokeWidth}
          className="opacity-20"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="blue" // Customize color here
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-stroke-dashoffset duration-500"
        />
        {/* Display the percentage in the center */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-xl font-bold fill-current text-blue-500"
        >
          {`${progress}%`}
        </text>
      </svg>
    );
  };
  
  export default CircularProgressBar;
  