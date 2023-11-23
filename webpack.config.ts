import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import path from "path";
import {BuildEvn, BuildPaths} from "./config/build/types/config";


export default (env: BuildEvn) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    dist: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }
  const mode = env.mode || 'development'
  const isDev = mode === 'development';

  const PORT = env.port || 3002;

  return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
      }
  );
};