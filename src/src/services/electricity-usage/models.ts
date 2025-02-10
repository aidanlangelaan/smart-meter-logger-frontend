import { TariffIndicator } from "../shared/model/models";

export interface GetElectricityUsageRequestViewModel {
  from: Date | null;
  to: Date | null;
  pageSize: number | null;
  page: number | null;
}

export interface GetElectricityUsageViewModel {
  id: number;
  timestamp: string;
  meterId: number;
  actPowerL1: number;
  deltaActPowerL1: number;
  actPowerL2: number | null;
  deltaActPowerL2: number;
  actPowerL3: number | null;
  deltaActPowerL3: number;
  actPowerBackdeliveryL1: number;
  deltaActPowerBackdeliveryL1: number;
  actPowerBackdeliveryL2: number | null;
  deltaActPowerBackdeliveryL2: number;
  actPowerBackdeliveryL3: number | null;
  deltaActPowerBackdeliveryL3: number;
  actualBackdelivery: number;
  deltaActualBackdelivery: number;
  actualDelivery: number;
  deltaActualDelivery: number;
  currentL1: number;
  deltaCurrentL1: number;
  currentL2: number | null;
  deltaCurrentL2: number;
  currentL3: number | null;
  deltaCurrentL3: number;
  tariffIndicator: TariffIndicator;
  textMessage: string;
  totalBackdeliveryLow: number;
  deltaTotalBackdeliveryLow: number;
  totalBackdeliveryHigh: number;
  deltaTotalBackdeliveryHigh: number;
  totalDeliveryHigh: number;
  deltaTotalDeliveryHigh: number;
  totalDeliveryLow: number;
  deltaTotalDeliveryLow: number;
  voltageL1: number;
  deltaVoltageL1: number;
  voltageL2: number | null;
  deltaVoltageL2: number;
  voltageL3: number | null;
  deltaVoltageL3: number;
}

export interface GetElectricityUsageByDayViewModel {
  timestamp: string;
  meterId: number;
  tariffIndicator: TariffIndicator;
  totalBackdeliveryLow: number;
  deltaTotalBackdeliveryLow: number;
  totalBackdeliveryHigh: number;
  deltaTotalBackdeliveryHigh: number;
  totalDeliveryHigh: number;
  deltaTotalDeliveryHigh: number;
  totalDeliveryLow: number;
  deltaTotalDeliveryLow: number;
}
