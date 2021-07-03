import defaultConfig from "../../config.json";
import fs from "fs";
import { Config } from "../../types";

const config = process.env.CONFIG_OVERRIDE
  ? getEnvironmentConfig()
  : defaultConfig;

function getEnvironmentConfig(): Config {
  try {
    const fileConfig = fs.readFileSync(
      process.env.CONFIG_OVERRIDE as string,
      "utf8"
    );
    const compiledConfig = {
      ...defaultConfig,
      ...JSON.parse(fileConfig),
    };
    console.log("Successfully read config from process.env");
    return compiledConfig;
  } catch (err) {
    console.error("Error reading config file", err);
    throw new Error("Error reading config file");
  }
}

export default config;
