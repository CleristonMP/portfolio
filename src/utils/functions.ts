const generateCaptionFromFileName = (fileName: string) => {
  // Extrai o nome do arquivo sem a extensão
  let baseName = fileName.split("/").pop()?.split(".").shift() || "";

  // Remove o número "1-" se estiver no início do nome
  if (baseName.startsWith("1-")) {
    baseName = baseName.substring(2);
  }

  // Substitui hífens por espaços e capitaliza cada palavra
  return baseName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export { generateCaptionFromFileName };
