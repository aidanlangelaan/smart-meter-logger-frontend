import ChartElectricityUsageByDay from "@/components/charts/electricity/usage-by-day/usage-by-day";
import ChartUsageByMonth from "@/components/charts/electricity/usage-by-month/usage-by-month";
import ChartGasUsageByDay from "@/components/charts/gas/usage-by-day/usage-by-day";
import { MeterContext } from "@/services/meter/meter.context";
import { MeterType } from "@/services/shared/model/models";
import { useContext } from "react";

export default function HomePage(): JSX.Element {
  const { meters } = useContext(MeterContext);

  return (
    <div>
      <h1>Smart Meter Logger Dashboard</h1>

      <div id="charts-container">
        {meters != undefined &&
          meters
            .filter((meter) => meter.deviceType == MeterType.Electricity)
            .map((meter) => (
              <>
                <ChartElectricityUsageByDay date={new Date("2023-10-25")} serialNumber={meter.serialNumber} />
              </>
            ))}

        {meters != undefined &&
          meters
            .filter((meter) => meter.deviceType == MeterType.Gas)
            .map((meter) => (
              <>
                <ChartGasUsageByDay date={new Date("2023-10-28")} serialNumber={meter.serialNumber} />
              </>
            ))}
      </div>
    </div>
  );
}
