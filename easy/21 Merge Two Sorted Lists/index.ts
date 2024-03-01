function isValid(s: string): boolean {
    const hash = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    const stack: string[] = []

    if(s.length % 2 !== 0) return false

    for(let j = 0; j < s.length ;j++) {
        if (j === 0) {
            stack.push(s[j])
            continue
        }
        if (hash[s[j] as  keyof typeof  hash]) {
            console.log('adicionado à pilha')
            stack.push(s[j])
            continue

        }
        const lastEl = stack.pop()
        if(!(s[j] == hash[lastEl as keyof typeof hash]))return false
    }
    return stack.length <= 0;
}


// console.log(isValid('{[()]}'))
// console.log(isValid('{()[]}')) // true
// console.log(isValid('{([)]}')) // false
console.log(isValid('][')) // false

// {(}) {{} {}}
