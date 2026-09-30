(async () => {
  const { default: chalk } = await import("chalk");

  console.log(chalk.green("Halo dari Chalk!"));
  console.log(chalk.blue("Saya sedang belajar npm."));
  console.log(chalk.yellow("Package berhasil digunakan!"));
})();
