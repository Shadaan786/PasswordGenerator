class Password {
    constructor() {
        console.log("Welcome to Password Generator")
        this.pass = ""
    }
    generatePassword(length) {
        let chars = "abcdefghijklmnopqrstuvwxyz"
        let numbers = "1234567890"
        let special = `?!@#$%&*`

        if (length < 3) {
            console.log("Password must be atleast 3 characters long")
        }
        else {
            let i = 0
            while (i < length) {
                this.pass += chars[Math.floor(Math.random() * chars.length)]
                this.pass += numbers[Math.floor(Math.random() * numbers.length)]
                this.pass += special[Math.floor(Math.random() * special.length)]
                i += 3
            }
            this.pass = this.pass.substring(0, length)
            return this.pass
        }
    }
}

let p = new Password()
console.log(p.generatePassword(7))