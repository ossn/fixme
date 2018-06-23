// Magic color values to shade a RGB color based on a given percentage
const shadeRGBColor = (color: string, percent: number) => {
  const f = color.split(",");
  const t = percent < 0 ? 0 : 255;
  const p = percent < 0 ? percent * -1 : percent;
  const R = parseInt(f[0].slice(4), 10);
  const G = parseInt(f[1], 10);
  const B = parseInt(f[2], 10);
  return (
    "rgb(" +
    (Math.round((t - R) * p) + R) +
    "," +
    (Math.round((t - G) * p) + G) +
    "," +
    (Math.round((t - B) * p) + B) +
    ")"
  );
};

// Magic color values to shade a hex color based on a given percentage
const shadeHex = (color: string, percent: number) => {
  const f = parseInt(color.slice(1), 16);
  const t = percent < 0 ? 0 : 255;
  const p = percent < 0 ? percent * -1 : percent;
  // tslint:disable-next-line:no-bitwise
  const R = f >> 16;
  // tslint:disable-next-line:no-bitwise
  const G = (f >> 8) & 0x00ff;
  // tslint:disable-next-line:no-bitwise
  const B = f & 0x0000ff;
  return (
    "#" +
    (
      0x1000000 +
      (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)
    )
      .toString(16)
      .slice(1)
  );
};

// Shade a hex or RGB color
export const shade = (color: string, percent: number) => {
  if (!color) {
    return "#000";
  }
  if (color.length > 7) {
    return shadeRGBColor(color, percent);
  }
  return shadeHex(color, percent);
};
