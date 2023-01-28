function getRandomRGB(min, max) {
  const color = `rgb(${Math.ceil(
    Math.random() * (max - min) + min
  )}, ${Math.ceil(Math.random() * (max - min) + min)}, ${Math.ceil(
    Math.random() * (max - min) + min
  )})`;
  return color;
}

export default getRandomRGB;
