// document.querySelectorAll(".nav-item").forEach((item) => {
//   item.addEventListener("click", () => {
//     document
//       .querySelectorAll(".nav-item")
//       .forEach((i) => i.classList.remove("active"));
//     item.classList.add("active");
//     // Можно добавить логику навигации или отображения контента
//     console.log("Выбран:", item.dataset.label);
//   });
// });

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(btn => btn.classList.remove('active'));
    item.classList.add('active');
  });
});

