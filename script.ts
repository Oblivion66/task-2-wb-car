interface Engine {
  status: "запущен" | "остановлен";
  temperature: number;
  rpm: number;
}

interface Battery {
  level: number;
  voltage: number;
}

interface Lights {
  headlights: "вкл" | "выкл";
  interiorLights: "вкл" | "выкл";
}

interface ClimateControl {
  temperature: number;
  isOn: boolean;
}

interface Car {
  model: string;
  year: number;
  mileage: number;
  engine: Engine;
  battery: Battery;
  lights: Lights;
  climateControl: ClimateControl;
}

// Функция для отображения информации об автомобиле
function displayCarInfo(car: Car): void {
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
function updateMileage(car: Car, distance: number): void {
  car.mileage += distance;
  console.log(`Пробег обновлен до ${car.mileage} km.`);
}

// Функция для запуска или остановки двигателя
function toggleEngine(car: Car): void {
  car.engine.status = car.engine.status === "остановлен" ? "запущен" : "остановлен";
  console.log(`Двигатель ${car.engine.status}.`);
}

// Функция для включения/выключения фар
function toggleHeadlights(car: Car): void {
  car.lights.headlights = car.lights.headlights === "выкл" ? "вкл" : "выкл";
  console.log(`Фары ${car.lights.headlights}ючены.`);
}

// Функция для включения/выключения климат-контроля и настройки температуры
function setClimateControl(car: Car, temperature: number): void {
  car.climateControl.isOn = true;
  car.climateControl.temperature = temperature;
  console.log(`Климат-контроль установлен на ${temperature}°C.`);
}

// Функция для выключения климат-контроля
function turnOffClimateControl(car: Car): void {
  car.climateControl.isOn = false;
  console.log(`Климат-контроль выключен.`);
}

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