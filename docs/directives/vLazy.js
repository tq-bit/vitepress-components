export default {
  mounted: (el, binding) => {
    const loadImage = () => {
      if (el) {
        el.addEventListener('load', () => {
          setTimeout(() => el.classList.add(binding.value), 100);
        });
        el.addEventListener('error', () => console.log('error'));
        el.src = el.dataset.url;
      }
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    };

    const createObserver = () => {
      const options = {
        root: null,
        threshold: 0,
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }
    if (window['IntersectionObserver']) {
      createObserver();
    } else {
      loadImage();
    }
  },
};
