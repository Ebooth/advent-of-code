import { PASSWORDS_1 } from './main'
import { PASSWORDS_2 } from './main2'

for (let password of PASSWORDS_2) {
    if (!PASSWORDS_1.includes(password)) {
        console.log(password)
    }
}