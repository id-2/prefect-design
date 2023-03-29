import { Icon } from '@/types/icon'

export type TimelineItem = {
  align?: TimelineAlignment,
  icon?: Icon,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any,
}

export type TimelineAlignment = 'left' | 'right' | 'center'
export type TimelineLayout = 'default' | 'alternate' | 'stacked'
export type TimelineItemLayout = 'default' | 'stacked'