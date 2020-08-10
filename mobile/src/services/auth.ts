export default function SignIn() {
    return new Promise(resolve => {
        resolve({
            token: 'Developer',
            user: {
                name: 'Victro',
                email: 'victrohenrique121413@gmail.com',
            },
        });
    });
}