import { InjectionKey, UnwrapNestedRefs } from 'vue'

export const TableStoreSymbol: InjectionKey<UnwrapNestedRefs<Record<string, any>>> = Symbol('table-store')
