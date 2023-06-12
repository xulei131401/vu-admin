import { COMPONENT_NAME_PREFIX } from '@/constant'

export function useCreateComponentName(name: string) {
    return `${COMPONENT_NAME_PREFIX}${name}`
}