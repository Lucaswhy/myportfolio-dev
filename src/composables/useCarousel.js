import { ref } from "vue";

export function useCarousel(images = []) {
  const defaultImages = [
    "",
    "https://i.imgur.com/JNelO3l.jpg",
    "https://i.imgur.com/a3WobcC.jpg",
    "https://i.imgur.com/8t0is7f.jpg",
    "https://i.imgur.com/UwSjWkz.jpg",
  ];

  const image = ref(images.length ? images : defaultImages);
  const position = ref(1);
  const animation = ref(true);
  const slide = ref("slide");

  const nextImage = (index) => {
    if (index === 0) {
      if (position.value - 1 === 0) {
        position.value = image.value.length - 1;
      } else {
        position.value = position.value - 1;
      }
    }
    if (index === 1) {
      if (position.value + 1 === image.value.length) {
        position.value = 1;
      } else {
        position.value = position.value + 1;
      }
    }
  };

  const afterLeave = () => {
    animation.value = true;
  };

  return {
    image,
    position,
    animation,
    slide,
    nextImage,
    afterLeave,
  };
}
