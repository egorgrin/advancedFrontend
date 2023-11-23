type Mods = Record<string, boolean | string>

const obj: Mods = {}

export function classNames(main: string, mods: Mods, additional: string[]): string {
  return [
    main,
    ...additional,
    ...Object.entries(mods)
        .filter(([key, value]) => Boolean(value))
        .map(([key, value]) => key)
  ].join(' ')
}