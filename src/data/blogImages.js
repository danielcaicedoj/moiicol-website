const images = import.meta.glob("../assets/blogs/*.{jpg,jpeg,png,gif}", { eager: true });

export const blogImages = Object.fromEntries(
  Object.entries(images).map(([path, module]) => {
    const fileName = path.split("/").pop(); // Extrae el nombre del archivo
    return [fileName, module.default];
  })
);