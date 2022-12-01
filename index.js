const handleUncaughtExceptionMonitor = (error, origin) => {
  console.log("uncaught exception monitor called");
};

const main = async () => {
  process.on("uncaughtExceptionMonitor", handleUncaughtExceptionMonitor);
  throw new Error("oops");
};

main();
