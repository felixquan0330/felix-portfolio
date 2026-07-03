"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

type StatsData = { date: string; signIns: number; messages: number }[];

export default function StatsChart({ data }: { data: StatsData }) {
  return (
    <div className="border border-gray-800 bg-[#111] rounded-lg p-4 h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="date" fontSize={12} stroke="#999" />
          <YAxis allowDecimals={false} fontSize={12} stroke="#999" />
          <Tooltip contentStyle={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: 8 }} />
          <Legend />
          <Line type="monotone" dataKey="signIns" stroke="#8b7cf6" name="Sign-ins" />
          <Line type="monotone" dataKey="messages" stroke="#5eead4" name="Messages" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}