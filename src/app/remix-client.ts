import { InjectionToken } from '@angular/core'
import {
  createIframeClient,
  IRemixApi,
  PluginApi,
  PluginClient,
  connectIframe
} from '@remixproject/plugin'

interface IRemixIDE extends IRemixApi {}

export type RemixIDE = Readonly<IRemixIDE>

export type RemixClient = PluginClient<any, RemixIDE> & PluginApi<RemixIDE>

export const REMIX = new InjectionToken<RemixClient>('Remix client', {
  providedIn: 'root',
  factory: () => {
    return createIframeClient()
  }
})
