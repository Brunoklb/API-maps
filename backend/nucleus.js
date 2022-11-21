import { db } from "./db.js";
import { DataTypes } from "sequelize";

export const Nucleus = db.define(
  "Nucleus",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);
