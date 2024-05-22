export interface IWithClass {
  className?: string
}

export interface IFormValues {
  title: string
  firstName: string, 
  lastName: string, 
  patronym: string
  phone: string
  comment?: string
  code: string
}

export interface IApplication  {
  userData: IFormValues
  date: DateType 
  status: StatusType
  id: string
}

export type StatusType = 'new' | 'inProgress' | 'completed'
 
export type DateType = {
  day: number
  month: number
  year: number
}