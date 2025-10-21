    // Animation on scroll
      const boxes = document.querySelectorAll(".box");
      const boxObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      boxes.forEach((box) => boxObserver.observe(box));