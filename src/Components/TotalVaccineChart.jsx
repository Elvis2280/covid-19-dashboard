import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import FormatNumber from '../utility/FormatNumber';
const TotalVaccineChart = ({ data, title, dataKey }) => {
  return (
    <div className="relative bg-blue-verydark rounded">
      <p className="font-semibold text-blue-verylight text-center pb-2">
        {title}
      </p>
      <ResponsiveContainer
        width="95%"
        height="95%"
        className="bg-red-dark rounded mx-auto"
      >
        <LineChart
          width={275}
          height={300}
          data={data}
          margin={{
            top: 5,
            left: 5,
            right: 5,
            bottom: 5,
          }}
        >
          <XAxis tick={{ fill: '#7579e7' }} dataKey="date" />
          <YAxis
            tick={{ fill: '#7579e7' }}
            type="number"
            tickFormatter={FormatNumber}
          />
          <Tooltip itemStyle={{ color: '#7579e7' }} />
          <Legend />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#ded9ff"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalVaccineChart;
