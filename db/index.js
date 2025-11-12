import mysql from "mysql";
import config from "../config";

const poolConfig = {
  ...config.mysql,
  authSwitchHandler: (data, cb) => {
    if (data.pluginName === 'mysql_native_password') {
      const password = config.mysql.password || '';
      const token = password;
      cb(null, Buffer.from(token + '\0'));
    }
  }
};

const connection = mysql.createPool(poolConfig);

export default connection;

