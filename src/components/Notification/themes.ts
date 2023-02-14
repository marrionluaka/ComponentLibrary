export type IconTheme = {
  displayIconName: string
  displayIconStyle: string
  actionIconName: string
  actionIconStyle: string
}

export const defaultTheme: IconTheme = {
  displayIconName: 'BellIcon',
  displayIconStyle: 'outline',
  actionIconName: 'Cog8ToothIcon',
  actionIconStyle: 'outline'
}

export const chatTheme: IconTheme = {
  displayIconName: 'ChatBubbleLeftIcon',
  displayIconStyle: 'outline',
  actionIconName: 'EllipsisVerticalIcon',
  actionIconStyle: 'outline'
}
