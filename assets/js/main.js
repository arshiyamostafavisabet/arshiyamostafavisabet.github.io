// Site scripts: mobile nav toggle + project filtering.
document.addEventListener("DOMContentLoaded", () => {
  // ---------- Mobile navigation ----------
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // ---------- Project filters ----------
  // Builds one button per unique `areas` value found on the project cards,
  // so new categories appear automatically when you add a project.
  const filterBar = document.querySelector(".project-filters");
  const grid = document.getElementById("project-grid");
  if (!filterBar || !grid) return;

  const cards = Array.from(grid.querySelectorAll(".project-card"));
  const areaOf = (card) => (card.dataset.areas || "").split("|").filter(Boolean);
  const areas = [...new Set(cards.flatMap(areaOf))].sort();
  if (areas.length < 2) return; // nothing worth filtering

  const makeButton = (label, value) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "button";
    btn.textContent = label;
    btn.dataset.filter = value;
    btn.setAttribute("aria-pressed", value === "all" ? "true" : "false");
    filterBar.appendChild(btn);
    return btn;
  };

  const buttons = [makeButton("All", "all"), ...areas.map((a) => makeButton(a, a))];
  filterBar.hidden = false;

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-filter]");
    if (!btn) return;
    const value = btn.dataset.filter;
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    cards.forEach((card) => {
      card.hidden = value !== "all" && !areaOf(card).includes(value);
    });
  });
});
