import { useEffect, useState } from 'react'

/* What the page actually has for a set of tokens, read from the live
   stylesheet — /cosmos/tokens.css — so the docs always show the values the
   apps use, never a copy typed in here that can drift. */
export function useTokens(names: string[]): Record<string, string> {
  const [values, setValues] = useState<Record<string, string>>({})
  const key = names.join('|')
  useEffect(() => {
    const cs = getComputedStyle(document.documentElement)
    setValues(Object.fromEntries(names.map(n => [n, cs.getPropertyValue(n).trim()])))
  }, [key]) // eslint-disable-line react-hooks/exhaustive-deps
  return values
}
