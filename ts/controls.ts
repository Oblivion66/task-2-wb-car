import { Car } from "./interfaces";

export function displayCarInfo(car: Car): void {
  console.log(`\n--- Сводка о машине ---`);
  console.log(`Модель: ${car.model}`);
  console.log(`Год выпуска: ${car.year}`);
  console.log(`Пробег: ${car.mileage} km`);
  console.log(`Двигатель: ${car.engine.status}`);
  console.log(`Заряд аккумулятора: ${car.battery.level}%`);
  console.log(`Фары: ${car.lights.headlights}`);
  console.log(
    `Климат-контроль: ${car.climateControl.isOn ? "Вкл" : "Выкл"} при ${
      car.climateControl.temperature
    }°C`
  );
}

// Функция для обновления пробега автомобиля
export function updateMileage(car: Car, distance: number): void {
  car.mileage += distance;
  console.log(`Пробег обновлен до ${car.mileage} km.`);
}

// Функция для запуска или остановки двигателя
export function toggleEngine(car: Car): void {
  car.engine.status =
    car.engine.status === "остановлен" ? "запущен" : "остановлен";
  console.log(`Двигатель ${car.engine.status}.`);
}

// Функция для включения/выключения фар
export function toggleHeadlights(car: Car): void {
  car.lights.headlights = car.lights.headlights === "выкл" ? "вкл" : "выкл";
  console.log(`Фары ${car.lights.headlights}ючены.`);
}

// Функция для включения/выключения климат-контроля и настройки температуры
export function setClimateControl(car: Car, temperature: number): void {
  car.climateControl.isOn = true;
  car.climateControl.temperature = temperature;
  console.log(`Климат-контроль установлен на ${temperature}°C.`);
}

// Функция для выключения климат-контроля
export function turnOffClimateControl(car: Car): void {
  car.climateControl.isOn = false;
  console.log(`Климат-контроль выключен.`);
}
