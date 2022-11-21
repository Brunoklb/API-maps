import { db } from "./db.js";
import { DataTypes } from "sequelize";

export const BloodCenter = db.define(
  "BloodCenter",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);
