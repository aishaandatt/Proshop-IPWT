import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Aishaan Datt',
        email: 'aishaan@example.com',
        password: bcrypt.hashSync('123456', 10),

    },
    {
        name: 'Prayag Sharma',
        email: 'Prayag@example.com',
        password: bcrypt.hashSync('123456', 10),

    },
]

export default users