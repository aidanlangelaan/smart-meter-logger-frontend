import { ElectricityUsageService } from "@/services/electricity-usage/electricity-usage-service";
import format from "date-fns/format";
import { useEffect, useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

export default function ChartElectricityUsageByDay(props: { date: Date; serialNumber: string }): JSX.Element {
  const { date, serialNumber } = props;
  const [usages, setUsages] = useState<any[]>([]);

  let electricityUsageService: ElectricityUsageService;
  let loading: boolean = true;

  const getUsageForDay = (date: Date) => {
    electricityUsageService
      .getElectricityUsagesByDay(serialNumber, date)
      .then((data) => {
        setUsages(data);
        loading = false;
      })
      .catch((_) => {
        loading = false;
      });
  };

  useEffect(() => {
    loading = true;
    getUsageForDay(date);
  }, [date, serialNumber]);

  useMemo(() => {
    electricityUsageService = new ElectricityUsageService();
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
              <span className="unit">kWh</span>
            </p>
            <p style={{ color: payload?.[1].color }}>
              <span className="label">{payload?.[1].name}:</span>
              <span className="value">{payload?.[1].value}</span>
              <span className="unit">kWh</span>
            </p>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div id={"electricity-usage-by-day-" + serialNumber} className="chart electricity-usage-by-day" style={{ height: "450px", width: "700px" }}>
      <header>
        <h3>Electricity usage by day</h3>
        <span>{format(date, "dd-MM-yyyy")}</span>
      </header>
      {loading && <div>Loading...</div>}

      {!loading && (
        <ResponsiveContainer width="100%" height="80%">
          <BarChart width={500} height={400} data={usages} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis label={{ value: "Kwh", angle: -90, position: "insideLeft" }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar name="normaaltarief" dataKey="deltaTotalDeliveryHigh" stackId="a" fill="#ec833e" />
            <Bar name="daltarief" dataKey="deltaTotalDeliveryLow" stackId="a" fill="#5f99d1" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
