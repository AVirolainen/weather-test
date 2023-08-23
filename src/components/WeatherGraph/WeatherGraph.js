import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ReferenceLine, Tooltip } from 'recharts';

import './WeatherGraph.css';

// I am using mocked data because openweather api are not allowing to get forecast
// for last 8 or more days in free subscriptions
const temperatureData = [
  { day: '15.08', temperature: 30.1, humidity: 74 },
  { day: '16.08', temperature: 32.1, humidity: 54 },
  { day: '17.08', temperature: 29.8, humidity: 65 },
  { day: '18.08', temperature: 28, humidity: 31 },
  { day: '19.08', temperature: 32, humidity: 12 },
  { day: '21.08', temperature: 30.4, humidity: 32 },
  { day: '22.08', temperature: 28.1, humidity: 20 },
  { day: '23.08', temperature: 28.9, humidity: 40 },
  { day: '24.08', temperature: 28.4, humidity: 56 },
  { day: '25.08', temperature: 24.1, humidity: 12 },
];

export default function App() {
  return (
    <LineChart width={900} height={400} data={temperatureData}>
      <Tooltip />
      <Line type="monotone" dataKey="temperature" stroke="#180045" strokeWidth={3} name={'Температура'} />
      <Line type="monotone" dataKey="humidity" stroke="#94d2ff" strokeWidth={3} name={'Вологість'} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="day" stroke="#ffffff" />
      <YAxis stroke="#ffffff" />
    </LineChart>
  );
}
