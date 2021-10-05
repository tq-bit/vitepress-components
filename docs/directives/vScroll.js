const vScroll = {
  mounted: (el, binding) => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      let coord = 0;
      coord = binding.value
        ? el.getBoundingClientRect().top + window.scrollY - binding.value
        : el.getBoundingClientRect().top + window.scrollY;
        window.scroll({ top: coord, behavior: 'smooth' });  // (2)
    });
  },
};

export default vScroll;
