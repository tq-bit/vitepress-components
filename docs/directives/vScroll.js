const vScroll = {
  mounted: (el, binding) => {
    el.style.cursor = 'pointer'
    el.addEventListener('click', () => {
      let coord = 0;
      if (binding.value) {
        coord = el.getBoundingClientRect().top + window.scrollY - binding.value;
      } else {
        coord = el.getBoundingClientRect().top + window.scrollY;
      }
      window.scroll({ top: coord });
    });
  },
};

export default vScroll