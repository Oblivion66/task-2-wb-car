// ts/main.ts
import { Car } from "./interfaces";
import {
    displayCarInfo,
    updateMileage,
    toggleEngine,
    toggleHeadlights,
    setClimateControl,
    turnOffClimateControl,
} from "./controls";
// Создаем экземпляр автомобиля
const myCar: Car = {
  model: "Toyota Camry",
  year: 2020,
  mileage: 247056,
  engine: { status: "остановлен", temperature: 85, rpm: 0 },
  battery: { level: 90, voltage: 12.6 },
  lights: { headlights: "выкл", interiorLights: "выкл" },
  climateControl: { temperature: 22, isOn: false },
};

// Отображаем основную информацию об автомобиле
displayCarInfo(myCar);

// Обновляем пробег
updateMileage(myCar, 150);

// Включаем двигатель и фары
toggleEngine(myCar);
toggleHeadlights(myCar);

// Настраиваем климат-контроль
setClimateControl(myCar, 24);

// Выключаем климат-контроль
turnOffClimateControl(myCar);

// Проверяем текущие изменения
displayCarInfo(myCar);
