export class Registry{
    userName: string;
    password: string;
    confirmPassword: string;
    email: string;

    constructor(obj?: any) {
        this.userName = obj ? obj.userName : '';
        this.password = obj ? obj.password : '';
        this.confirmPassword = obj ? obj.confirmPassword : '';
        this.email = obj ? obj.email : '';
    }

    public toJSON() {
        return {
            userName: this.userName,
            password: this.password,
            confirmPassword: this.confirmPassword,
            email: this.email,
        };
    }
}