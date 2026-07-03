"use client";

import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type StatsData = { date: string; signIns: number; messages: number }[];

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    let raf: number;
    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 shadow-2xl">
      <p className="text-xs text-gray-500 mb-2">{label}</p>
      {payload.map((entry: any) => (
        <div key={entry.dataKey} className="flex items-center gap-2 text-sm">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-gray-300">{entry.name}:</span>
          <span className="text-white font-semibold">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function StatsChart({ data }: { data: StatsData }) {
  const totalSignIns = data.reduce((sum, d) => sum + d.signIns, 0);
  const totalMessages = data.reduce((sum, d) => sum + d.messages, 0);

  const animatedSignIns = useCountUp(totalSignIns);
  const animatedMessages = useCountUp(totalMessages);

  return (
    <div className="border border-gray-800 bg-[#0a0a0aBB] rounded-2xl p-6">
      {/* Stat totals */}
      <div className="flex gap-10 mb-6">
        <div>
          <p className="text-xs font-semibold tracking-wider text-[#8b7cf6] mb-1">
            SIGN-INS
          </p>
          <p className="text-3xl font-bold text-white tabular-nums">
            {animatedSignIns}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wider text-[#5eead4] mb-1">
            MESSAGES
          </p>
          <p className="text-3xl font-bold text-white tabular-nums">
            {animatedMessages}
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="gradPurple" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b7cf6" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#8b7cf6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradTeal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5eead4" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#5eead4" stopOpacity={0} />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
            <XAxis
              dataKey="date"
              fontSize={11}
              stroke="#666"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              fontSize={11}
              stroke="#666"
              tickLine={false}
              axisLine={false}
              allowDecimals={false}
            />
            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="signIns"
              name="Sign-ins"
              stroke="#8b7cf6"
              strokeWidth={2.5}
              fill="url(#gradPurple)"
              filter="url(#glow)"
              animationDuration={1400}
              animationEasing="ease-out"
              dot={{ r: 3, fill: "#8b7cf6", strokeWidth: 0 }}
              activeDot={{ r: 5, fill: "#8b7cf6" }}
            />
            <Area
              type="monotone"
              dataKey="messages"
              name="Messages"
              stroke="#5eead4"
              strokeWidth={2.5}
              fill="url(#gradTeal)"
              filter="url(#glow)"
              animationDuration={1400}
              animationBegin={200}
              animationEasing="ease-out"
              dot={{ r: 3, fill: "#5eead4", strokeWidth: 0 }}
              activeDot={{ r: 5, fill: "#5eead4" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}