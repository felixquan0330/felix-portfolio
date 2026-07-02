"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

type StatsData = { date: string; signIns: number; messages: number }[];

export default function StatsChart({ data }: { data: StatsData }) {
  return (
    <div className="border rounded-lg p-4 h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" fontSize={12} />
          <YAxis allowDecimals={false} fontSize={12} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="signIns" stroke="#2563eb" name="Sign-ins" />
          <Line type="monotone" dataKey="messages" stroke="#16a34a" name="Messages" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}