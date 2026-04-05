const segments = document.querySelectorAll(".segment");
const panels = {
  privacy: document.getElementById("panel-privacy"),
  copyright: document.getElementById("panel-copyright"),
};
const currentDocLabel = document.getElementById("currentDocLabel");

const labels = {
  privacy: "隱私權政策",
  copyright: "版權聲明",
};

function setActivePanel(key) {
  Object.entries(panels).forEach(([panelKey, panel]) => {
    const isActive = panelKey === key;
    panel.classList.toggle("is-visible", isActive);
    panel.hidden = !isActive;
  });

  segments.forEach((button) => {
    const isActive = button.dataset.panel === key;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (currentDocLabel) {
    currentDocLabel.textContent = labels[key];
  }
}

segments.forEach((button) => {
  button.addEventListener("click", () => {
    setActivePanel(button.dataset.panel);
  });
});

setActivePanel("privacy");
