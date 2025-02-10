export interface GetGasUsageRequestViewModel {
  from: string | null;
  to: string | null;
  pageSize: number | null;
  page: number | null;
}

export interface GetGasUsageViewModel {
  id: number;
  timestamp: string;
  meterId: number;
  totalDelivery: number;
  deltaTotalDelivery: number;
}

export interface GetGasUsageByDayViewModel {
  timestamp: string;
  meterId: number;
  totalDelivery: number;
  deltaTotalBackdeliveryLow: number;
  deltaTotalDelivery: number;
}
