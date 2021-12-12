import { number, object, string, TypeOf } from 'zod'
export const createUserSchema = object({
    body: object({
        gender: string({
            required_error: 'Gender is required'
        }),
        age: number({
            required_error: 'Age is required'
        }),
        occupation: string({
            required_error: 'Occupation is required'
        }),
    })
})

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, "">