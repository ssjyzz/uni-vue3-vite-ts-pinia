/*
 * @Author: Betty.Gao
 * @Date: 2022-07-08 18:30:46
 * @LastEditors: Betty.Gao
 * @LastEditTime: 2022-08-09 14:44:54
 * @Description: vite配置文件
 */
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/'
      }
    ]
  }
});
