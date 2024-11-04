export interface Engine {
  status: "запущен" | "остановлен";
  temperature: number;
  rpm: number;
}

export interface Battery {
  level: number;
  voltage: number;
}

export interface Lights {
  headlights: "вкл" | "выкл";
  interiorLights: "вкл" | "выкл";
}

export interface ClimateControl {
  temperature: number;
  isOn: boolean;
}

export interface Car {
  model: string;
  year: number;
  mileage: number;
  engine: Engine;
  battery: Battery;
  lights: Lights;
  climateControl: ClimateControl;
}
