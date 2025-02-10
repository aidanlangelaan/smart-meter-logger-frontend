import { GetMeterViewModel } from "./models";

export class MeterService {
  async getMeters(): Promise<any> {
    try {
      let url = `${import.meta.env.VITE_API_URL}/meter`;

      const response = await fetch(`${url}`);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      return response.json().then((data) => data as GetMeterViewModel[]);
    } catch (error) {
      throw error;
    }
  }
}
