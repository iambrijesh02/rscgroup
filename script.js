
  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");

    const animateCounter = (el, target) => {
      let count = 0;
      const step = Math.ceil(target / 100);
      const update = () => {
        count += step;
        if (count < target) {
          el.innerText = count;
          requestAnimationFrame(update);
        } else {
          el.innerText = target;
        }
      };
      update();
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add("visible");
            const target = +el.getAttribute("data-target");
            animateCounter(el, target);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => {
      observer.observe(counter);
    });
  });



  if (!sessionStorage.getItem('modalShown')) {
    setTimeout(() => {
      $('#investmentFormModal').modal('show');
      sessionStorage.setItem('modalShown', 'true');
    }, 3000);
  }


