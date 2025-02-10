import { DSMRVersion, MeterType } from "../shared/model/models";

export interface GetMeterViewModel {
  id: number;
  serialNumber: string;
  deviceType: MeterType;
  dsmrVersion: DSMRVersion | null;
}
