const vClip = {
  mounted: (el) => {
    el.addEventListener('click', () => {
      const cb = navigator.clipboard;
      const input = el.tagName === 'input' ? el : el.querySelector('input');
      cb.writeText(input.value).then(() => alert('Text copied'));
    });
  },
};

export default vClip;