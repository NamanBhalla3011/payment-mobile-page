// SCROLL
const scrollContainer = document.getElementById("scrollableTabs");
document.querySelector(".scroll-left").addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -150, behavior: "smooth" });
});
document.querySelector(".scroll-right").addEventListener("click", () => {
  scrollContainer.scrollBy({ left: 150, behavior: "smooth" });
});

// SELECT CATEGORY
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll("#selectTab .nav-link");
  const items = document.querySelectorAll(".voucher-item");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      items.forEach((item) => {
        if (filter === "all" || item.dataset.category === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
