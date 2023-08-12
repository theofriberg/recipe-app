import { z } from 'zod'

export const registerSchema = z.object({
    email: z
		.string({ required_error: 'Email is required' })
		.min(1, { message: 'Email is required' })
		.max(64, { message: 'Email must be less than 64 characters' })
		.email({ message: 'Email must be a valid email address' }),
    emailConfirm: z
        .string({ required_error: 'Email is required' })
        .min(1, { message: 'Email is required' })
        .max(64, { message: 'Email must be less than 64 characters' })
        .email({ message: 'Email must be a valid email address' }),
	password: z
		.string({ required_error: 'Password is required' })
		.min(6, { message: 'Password must be at least 6 characters' })
		.max(32, { message: 'Password must be less than 32 characters' })
		.trim(),
	passwordConfirm: z
		.string({ required_error: 'Password is required' })
		.min(6, { message: 'Password must be at least 6 characters' })
		.max(32, { message: 'Password must be less than 32 characters' })
		.trim()
}).superRefine(({ passwordConfirm, password, email, emailConfirm }, ctx) => {
    if (passwordConfirm !== password) {
        ctx.addIssue({
            code: 'custom',
            message: 'Password and Confirm Password must match',
            path: ['password']
        });
        ctx.addIssue({
            code: 'custom',
            message: 'Password and Confirm Password must match',
            path: ['passwordConfirm']
        });
    }

    if (email !== emailConfirm) {
        ctx.addIssue({
            code: 'custom',
            message: 'Email and Confirm Email must match',
            path: ['email']
        });
        ctx.addIssue({
            code: 'custom',
            message: 'Email and Confirm Email must match',
            path: ['emailConfirm']
        });
    }
})

export const loginSchema = z.object({
    email: z
        .string({ required_error: 'Email is required' })
        .email({ message: 'Email must be a valid email address'}),
    password: z
        .string({ required_error: 'Password is required' })
        .trim()
})