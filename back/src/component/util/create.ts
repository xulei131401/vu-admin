export function createNamespace(name: string) {
  const prefixedName = `va-${name}`;
  return [
    prefixedName,
  ] as const
}