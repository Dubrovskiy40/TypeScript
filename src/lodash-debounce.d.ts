declare module 'lodash.debounce' {
  export interface DebounceSettings {
    leading?: boolean | undefined;
    maxWait?: number | undefined;
    trailing?: boolean | undefined;
  }
  export function debounce(func: Function, wait?: number, options?: DebounceSettings): void
}
