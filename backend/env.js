import dotenv from "dotenv";

dotenv.config();

const { PORT: portString } = process.env;

export const PORT = parseInt(portString, 10) || 3000;
