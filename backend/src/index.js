import start from "./server";
const PORT = process.env.PORT || 5000;
start(PORT, { force: true, alter: true });
