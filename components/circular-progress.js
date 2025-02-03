import Image from "next/image";

const CircularProgressBar = ({ value }) => {
    const percentage = Math.min(value * 2.5, 100); // تبدیل عدد به درصد
    const radius = 56;
    const stroke = 3;
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex items-center justify-center p-4">
            <svg height={radius * 2} width={radius * 2} style={{ transform: 'rotate(-90deg)' }}>
                <circle
                    stroke="#e5e7eb"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke="#FF5722"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />



            </svg>
        </div>
    );
};

export default CircularProgressBar;
