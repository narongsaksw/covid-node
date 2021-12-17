import { date, number, object, string, TypeOf } from 'zod'
export const createUserSchema = object({
    body: object({
        citizenId: string({
            required_error: 'Citizen ID is required'
        }),
        gender: string({
            required_error: 'Gender is required'
        }),
        age: number({
            required_error: 'Age is required'
        }),
        occupation: string({
            required_error: 'Occupation is required'
        }),
        from: string({
            required_error: 'Start Date is required'
        }),
        to: string({
            required_error: 'To Date is required'
        }),
        detail: string({
            required_error: 'Detail is required'
        }),
        locationType: string({
            required_error: 'locationType is required'
        }),
    })
})

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, "">