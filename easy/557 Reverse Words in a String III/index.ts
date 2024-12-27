// function reverseWords(s: string): string {
//
//     const vectors = s.split(' ')
//     let newSentence = ""
//
//     for (let i=0; i < vectors.length; i++) {
//         console.log("Palavra atual:")
//         console.log(vectors[i])
//
//         for (let j=vectors[i].length - 1; j >= 0; j--) {
//             console.log(vectors[i][j])
//             newSentence += vectors[i][j]
//         }
//
//         if(i !== vectors.length -1){
//             newSentence += " "
//         }
//     }
//
//     return newSentence
// }

// function reverseWords(s: string): string {
//     const str = s.split('')
//     console.log(str)
//
//     let lPointer = 0, rPointer = 0
//
//     while (rPointer < str.length) {
//         if(str[rPointer] !== ' '){
//             rPointer++
//         }else{
//             let endOfWord = rPointer
//
//             while(lPointer < rPointer){
//                 const temp = str[lPointer]
//                 str[lPointer] = str[rPointer - 1]
//                 str[rPointer - 1] = temp
//                 lPointer++
//                 rPointer--
//             }
//
//             rPointer = endOfWord + 1
//             lPointer = rPointer
//         }
//     }
//
//     rPointer = str.length - 1
//     while (rPointer >= lPointer) {
//         const temp = str[lPointer]
//         str[lPointer] = str[rPointer]
//         str[rPointer] = temp
//         lPointer++
//         rPointer--
//     }
//
//     return str.join('')
// }

function reverseWords(s: string): string {
    const str = s.split(' ')
    console.log('Palavras:')
    console.log(str)

    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].split('').reverse().join('')
    }

    return str.join(' ')
}

const sentence = reverseWords("Let's take LeetCode contest") // s'teL ekat edoCteeL tsetnoc




console.log("final sentence:")
console.log(sentence)