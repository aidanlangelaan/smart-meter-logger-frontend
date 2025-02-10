import format from "date-fns/format";
import { GetGasUsageByDayViewModel, GetGasUsageRequestViewModel } from "./models";

export class GasUsageService {
  async getGasUsages(serialNumber: string, paging: GetGasUsageRequestViewModel | null): Promise<any> {
    try {
      let url = `${import.meta.env.VITE_API_URL}/gasusage/${serialNumber}`;
      if (paging) {
        url += `?from=${paging.from}&to=${paging.to}&pageSize=${paging.pageSize}&page=${paging.page}`;
      }

      const response = await fetch(`${url}`);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      return response.json().then((data) => data as any);
    } catch (error) {
      throw error;
    }
  }

  async getGasUsagesByDay(serialNumber: string, date: Date): Promise<GetGasUsageByDayViewModel[]> {
    try {
      let url = `${import.meta.env.VITE_API_URL}/gasusage/${serialNumber}/getbyday?date=${format(date, "yyyy-MM-dd")}`;

      const response = await fetch(`${url}`);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      return response.json().then((data) => data as GetGasUsageByDayViewModel[]);
    } catch (error) {
      throw error;
    }
  }
}
