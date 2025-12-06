import { PropsWithChildren } from 'react'
import { I18nProviderClient } from '../../locales/client'
 
// If you are using Next.js < 15, you don't need to await `params`:
// export default function SubLayout({ params: { locale }, children }: { params: { locale: string }, children: ReactElement }) {
export default function SubLayout(props : PropsWithChildren<{locale: string}>) {
 
 
  return (
    <I18nProviderClient locale={props.locale}>
      {props.children}
    </I18nProviderClient>
  )
}