const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const monthTitle = document.getElementById("month");
const yearTitle = document.getElementById("year");
const calendarBody = document.getElementById("calendar-body");

// Початкова дата
let currentDate = new Date();

// Оновлення календаря з відображенням поточного місяця та року
function updateCalendar() {
  // Отримання поточного місяця та року
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Встановлення заголовку місяця та року
  monthTitle.innerText = months[currentMonth];
  yearTitle.innerText = currentYear.toString();

  // Очищення тіла календаря перед додаванням нових даних
  calendarBody.innerHTML = "";

  // Отримання числа днів у поточному місяці
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Встановлення першого дня поточного місяця
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Створення додаткових ячеєк календаря для заповнення першого тижня
  let dateCounter = 1;
  for (let i = 0; i < firstDayOfMonth; i++) {
    const cell = document.createElement("td");
    const cellText = document.createTextNode("");
    cell.appendChild(cellText);
    calendarBody.appendChild(cell);
  }

  // Додавання чисел днів поточного місяця до календаря
  for (let i = 1; i <= daysInMonth; i++) {
    const cell = document.createElement("td");
    const cellText = document.createTextNode(i);
    cell.appendChild(cellText);
    calendarBody.appendChild(cell);

    // Перехід до наступного рядка календаря, коли досягнуто останнього дня місяця
    if (dateCounter % 7 === 0) {
      const row = document.createElement("tr");
      calendarBody.appendChild(row);
    }
    dateCounter++;
  }

  // Створення додаткових ячеєк календаря для заповнення останнього тижня
  while (calendarBody.children.length % 7 !== 0) {
    const cell = document.createElement("td");
    const cellText = document.createTextNode("");
    cell.appendChild(cellText);
    calendarBody.appendChild(cell);
  }
}
// Оголошення масиву з назвами місяців
const months = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

// Оновлення календаря після натискання на кнопки "попередній" та "наступний"
prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendar();
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendar();
});

// Оновлення календаря при завантаженні сторінки
updateCalendar();
