export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  entry: string;
  dist: string;
  html: string;
}

export interface BuildEvn {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}