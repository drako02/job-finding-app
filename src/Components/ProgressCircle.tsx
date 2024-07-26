import React from 'react';

interface ProgressCircleProps {
    progress: number; // Progress value from 0 to 100
    size?: number; // Diameter of the circle
    strokeWidth?: number; // Width of the stroke
    bgColor?: string; // Background circle color
    progressColor?: string; // Progress circle color
    textColor?: string; // Text color
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
                                                           progress,
                                                           size = 56,
                                                           strokeWidth = 6,
                                                           bgColor = '#6CB69B',
                                                           progressColor = 'white',
                                                           textColor = 'white',
                                                       }) => {
    const radius = 25; // Adjusted radius for the circle (half of the viewBox size - strokeWidth)
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg
                width={size}
                height={size}
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Background Circle */}
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28 6.22222C15.9725 6.22222 6.22222 15.9725 6.22222 28C6.22222 40.0275 15.9725 49.7778 28 49.7778C40.0275 49.7778 49.7778 40.0275 49.7778 28C49.7778 15.9725 40.0275 6.22222 28 6.22222ZM0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
                    fill={bgColor}
                />
                {/* Progress Circle */}
                <path
                    d="M28 3C31.283 3 34.5339 3.64664 37.5671 4.90301C40.6002 6.15938 43.3562 8.00087 45.6777 10.3223C47.9991 12.6438 49.8406 15.3998 51.097 18.4329C52.3534 21.4661 53 24.717 53 28C53 31.2831 52.3534 34.534 51.097 37.5671C49.8406 40.6002 47.9991 43.3562 45.6777 45.6777C43.3562 47.9991 40.6002 49.8406 37.5671 51.097C34.5339 52.3534 31.283 53 28 53"
                    stroke={progressColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>

            {/* Percentage Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className="text-center text-[12px] font-medium leading-[150%]" style={{ color: textColor }}>
          {progress}%
        </span>
            </div>
        </div>
    );
};

export default ProgressCircle;
