import React from 'react';

interface NumberCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export const NumberCounter: React.FC<NumberCounterProps> = ({ value, label, suffix = '' }) => {
  return (
    <div>
      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
        {value}{suffix}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  );
};
