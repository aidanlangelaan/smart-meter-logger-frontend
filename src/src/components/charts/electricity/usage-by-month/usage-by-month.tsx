import { ElectricityUsageService } from "@/services/electricity-usage/electricity-usage-service";
import { useEffect, useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function ChartUsageByMonth(props: { date: Date; serialNumber: string }): JSX.Element {
  const { date, serialNumber } = props;
  const [usages, setUsages] = useState<any[]>([]);

  let electricityUsageService: ElectricityUsageService;

  const getUsageForMonth = (fromDate: Date, toDate: Date) => {
    electricityUsageService.getElectricityUsages(serialNumber, { from: fromDate, to: toDate, page: null, pageSize: null }).then((data) => {
      setUsages(data);
    });
  };

  useEffect(() => {
    const fromDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const toDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    getUsageForMonth(fromDate, toDate);
  }, [date, serialNumber]);

  useMemo(() => {
    electricityUsageService = new ElectricityUsageService();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="80%">
      <BarChart width={500} height={400} data={usages} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis label={{ value: "Kwh", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="deltaTotalDeliveryHigh" stackId="a" fill="#8884d8" />
        <Bar dataKey="deltaTotalDeliveryLow" stackId="a" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
