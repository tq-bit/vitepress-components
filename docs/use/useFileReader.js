import { ref } from 'vue';
const invalidFormatText = `Invalid format provided.
Format must be one of "arraybuffer", "dataurl", "text", "binarystring"`;

export default function useFileReader(blob, format) {
  let loaded = ref(0);
  let total = ref(0);

  const reader = new FileReader();
  const read = () => {
    return new Promise((resolve, reject) => {
      switch (format) {
        case 'arraybuffer':
          reader.readAsArrayBuffer(blob);
          break;
        case 'dataurl':
          reader.readAsDataURL(blob);
          break;
        case 'text':
          reader.readAsText(blob, 'utf-8');
          break;
        case 'binarystring':
          reader.readAsBinaryString(blob);

        default:
          reject(invalidFormatText);
          break;
      }

      reader.onprogress = (event) => {
        loaded.value = event.loaded;
        total.value = event.total;
      };

      reader.onerror = (error) => reject(error);

      reader.onloadend = (event) => {
        const file = event.target.result;
        resolve(file);
      };
    });
  };

  return { read, loaded, total };
}
