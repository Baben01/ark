import { mergeProps } from '@zag-js/react'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { ark } from '../factory'
import { Presence, splitPresenceProps, type PresenceProps } from '../presence'
import { useHoverCardContext } from './hover-card-context'

export type HoverCardContentProps = ComponentPropsWithoutRef<typeof ark.div> &
  Omit<PresenceProps, 'children'>

export const HoverCardContent = forwardRef<HTMLDivElement, HoverCardContentProps>((props, ref) => {
  const [presenceProps, localProps] = splitPresenceProps(props)
  const api = useHoverCardContext()

  return (
    <Presence present={api.isOpen} {...presenceProps}>
      <HoverCardInnerContent ref={ref} {...localProps} />
    </Presence>
  )
})

HoverCardContent.displayName = 'HoverCardContent'

const HoverCardInnerContent = forwardRef<HTMLDivElement, HoverCardContentProps>(
  function HoverCardInnerContent(props, ref) {
    const api = useHoverCardContext()
    const mergedProps = mergeProps(api.contentProps, props)

    return <ark.div {...mergedProps} ref={ref} />
  },
)
