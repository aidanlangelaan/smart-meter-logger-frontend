export type LocalStorageProvider<T> = {
  get: () => T | undefined;
  set: (value: T | null) => void;
  remove: () => void;
};

export const localStorageProvider = <T>(key: string): LocalStorageProvider<T> => {
  return {
    get: () => {
      const rawValue = window.localStorage.getItem(key);
      if (!rawValue) {
        return undefined;
      }

      const value = JSON.parse(rawValue) as T;

      return value;
    },
    set: (value: T | null) => (value ? window.localStorage.setItem(key, JSON.stringify(value)) : window.localStorage.removeItem(key)),
    remove: () => window.localStorage.removeItem(key),
  };
};
