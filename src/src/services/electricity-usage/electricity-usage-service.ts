import format from "date-fns/format";
import { GetElectricityUsageByDayViewModel, GetElectricityUsageRequestViewModel, GetElectricityUsageViewModel } from "./models";

export class ElectricityUsageService {
  async getElectricityUsages(serialNumber: string, paging: GetElectricityUsageRequestViewModel | null): Promise<GetElectricityUsageViewModel[]> {
    try {
      let url = `${import.meta.env.VITE_API_URL}/electricityusage/${serialNumber}`;

      if (paging) {
        let query = "";
        if (paging.from) {
          query += `from=${format(paging.from, "yyyy-MM-dd")}&`;
        }
        if (paging.to) {
          query += `to=${format(paging.to, "yyyy-MM-dd")}&`;
        }
        if (paging.pageSize && paging.page) {
          query += `pageSize=${paging.pageSize}&page=${paging.page}`;
        }

        url += `?${query}`;
      }

      const response = await fetch(`${url}`);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      return response.json().then((data) => data as GetElectricityUsageViewModel[]);
    } catch (error) {
      throw error;
    }
  }

  async getElectricityUsagesByDay(serialNumber: string, date: Date): Promise<GetElectricityUsageByDayViewModel[]> {
    try {
      let url = `${import.meta.env.VITE_API_URL}/electricityusage/${serialNumber}/getbyday?date=${format(date, "yyyy-MM-dd")}`;

      const response = await fetch(`${url}`);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      return response.json().then((data) => data as GetElectricityUsageByDayViewModel[]);
    } catch (error) {
      throw error;
    }
  }
}
