import { GasUsageService } from "@/services/gas-usage/gas-usage-service";
import format from "date-fns/format";
import { useEffect, useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

export default function ChartGasUsageByDay(props: { date: Date; serialNumber: string }): JSX.Element {
  const { date, serialNumber } = props;
  const [usages, setUsages] = useState<any[]>([]);

  let gasUsageService: GasUsageService;

  const getUsageForDay = (date: Date) => {
    gasUsageService.getGasUsagesByDay(serialNumber, date).then((data) => {
      setUsages(data);
    });
  };

  useEffect(() => {
    getUsageForDay(date);
  }, [date, serialNumber]);

  useMemo(() => {
    gasUsageService = new GasUsageService();
  }, []);

  const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      return (
        <div id="chart-tooltip">
          <p className="header">{format(new Date(label), "dd-MM-yyyy HH:mm")}</p>

          <div className="values">
            <p style={{ color: payload?.[0].color }}>
              <span className="label">{payload?.[0].name}:</span>
              <span className="value">{payload?.[0].value}</span>
              <span className="unit">
                m<sup>3</sup>
              </span>
            </p>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div id={"gas-usage-by-day-" + serialNumber} className="chart gas-usage-by-day" style={{ height: "450px", width: "700px" }}>
      <header>
        <h3>Gas usage by day</h3>
        <span>{format(date, "dd-MM-yyyy")}</span>
      </header>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart width={500} height={400} data={usages} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis label={{ value: "m3", angle: -90, position: "insideLeft" }} />
          <Tooltip content={<CustomTooltip />} />
          {/* <Tooltip /> */}
          <Legend />
          <Bar name="totaal" dataKey="deltaTotalDelivery" stackId="a" fill="#ec833e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
