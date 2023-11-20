export const isTeacher = (userId?: String | null) => {
    return userId === process.env.NEXT_PUBLIC_TEACHER_ID;
}