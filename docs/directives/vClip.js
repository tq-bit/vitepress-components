const vClip = {
  mounted: (el) => {
    const cb = navigator.clipboard;
    el.addEventListener('click', () => {
      const input = el.tagName === 'input' ? el : el.querySelector('input');
      cb.writeText(input.value).then(() => alert('Text copied'));
    });
  },
};

export default vClip;