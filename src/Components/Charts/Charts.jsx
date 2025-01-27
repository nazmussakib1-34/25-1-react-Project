
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", sales: 4000, profit: 2400 },
  { name: "February", sales: 3000, profit: 2210 },
  { name: "March", sales: 2000, profit: 2290 },
  { name: "April", sales: 2780, profit: 2000 },
  { name: "May", sales: 1890, profit: 2181 },
  { name: "June", sales: 2390, profit: 2500 },
  { name: "July", sales: 3490, profit: 2100 },
];

const Charts = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
        <Bar dataKey="profit" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Charts;
