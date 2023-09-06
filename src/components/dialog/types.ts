import type { ComponentOptionsMixin, ExtractComputedReturns } from 'vue/types/v3-component-options.js'
import type { CombinedVueInstance } from 'vue/types/vue.d.ts'
import Vue from 'vue'
import type { ShallowUnwrapRef } from 'vue'
import type { OptionTypesType } from 'vue/types/v3-component-public-instance.d.ts'

export interface FunctionDialogOptions {
  title?: string
}

export type FunctionDialogAppInstance = CombinedVueInstance<
  {
    isVisible: boolean
  } & ExtractComputedReturns<{}> &
    Record<never, any> &
    Vue<
      Record<string, any>,
      Record<string, any>,
      never,
      never,
      (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>
    > &
    ShallowUnwrapRef<{}> &
    Vue<
      Record<string, any>,
      Record<string, any>,
      never,
      never,
      (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>
    >,
  object,
  object,
  object,
  Record<never, any>,
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  OptionTypesType<{}, {}, {}, {}, {}, {}>
>
