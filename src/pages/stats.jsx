import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function Stats({ timeline }) {
  const chartData = React.useMemo(() => {
    const counts = timeline.reduce(
      (acc, entry) => {
        if (entry.type === "call") acc.call += 1;
        if (entry.type === "text") acc.text += 1;
        if (entry.type === "video") acc.video += 1;
        return acc;
      },
      { call: 0, text: 0, video: 0 }
    );

    return [
      { name: "Call", value: counts.call },
      { name: "Text", value: counts.text },
      { name: "Video", value: counts.video },
    ];
  }, [timeline]);

  const total = chartData.reduce((sum, item) => sum + item.value, 0);
  const colors = ["#184f43", "#6d9a8d", "#c9ddd7"];

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Friendship Analytics</h1>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="h-[340px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={75}
                  outerRadius={115}
                  paddingAngle={4}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={entry.name} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-500">Tracked interactions</p>
              <p className="mt-2 text-4xl font-bold text-slate-900">{total}</p>
            </div>
            {chartData.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center gap-3">
                  <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: colors[index] }} />
                  <span className="font-medium text-slate-700">{item.name}</span>
                </div>
                <span className="text-lg font-bold text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
