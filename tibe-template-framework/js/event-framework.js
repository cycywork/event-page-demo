(() => {
  const topButton = document.querySelector("#btnTop");
  const navToggle = document.querySelector(".event-navbar__toggle");
  const navMenu = document.querySelector("#eventNavMenu");

  const toggleTopButton = () => {
    if (!topButton) return;
    topButton.style.display = window.scrollY > 120 ? "block" : "none";
  };

  window.addEventListener("scroll", toggleTopButton, { passive: true });
  toggleTopButton();

  topButton?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  navToggle?.addEventListener("click", () => {
    const isOpen = navMenu?.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });

  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  const rankNavButtons = document.querySelectorAll("[data-rank-target]");
  const rankCategories = document.querySelectorAll(".rank-category");

  rankNavButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-rank-target");

      rankNavButtons.forEach((navButton) => {
        const isActive = navButton === button;
        navButton.classList.toggle("is-active", isActive);
        navButton.setAttribute("aria-pressed", String(isActive));
      });

      rankCategories.forEach((category) => {
        const isTarget = category.id === targetId;
        category.hidden = !isTarget;
        category.classList.toggle("is-active", isTarget);
      });
    });
  });

  const openModal = (modal) => {
    if (!modal) return;

    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop fade show";
    backdrop.dataset.modalBackdrop = modal.id;
    document.body.appendChild(backdrop);

    modal.style.display = "block";
    modal.removeAttribute("aria-hidden");
    modal.classList.add("show");
    document.body.classList.add("modal-open");

    backdrop.addEventListener("click", () => closeModal(modal));
  };

  const closeModal = (modal) => {
    if (!modal) return;

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");

    document
      .querySelectorAll(`[data-modal-backdrop="${modal.id}"]`)
      .forEach((backdrop) => backdrop.remove());
  };

  document.querySelectorAll('[data-toggle="modal"][data-target]').forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modal = document.querySelector(trigger.dataset.target);
      openModal(modal);
    });
  });

  document.querySelectorAll('[data-dismiss="modal"]').forEach((trigger) => {
    trigger.addEventListener("click", () => {
      closeModal(trigger.closest(".modal"));
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeModal(document.querySelector(".modal.show"));
  });
})();
