import {BuildOptions} from "./types/config";
import type { Configuration as DebServerConfiguration } from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions):DebServerConfiguration {
  return {
    port: options.port,
    open: true,
  }
}