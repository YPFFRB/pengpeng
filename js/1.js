let str = '948484'

function isPalindrome(str) {
    var arr = str.split('').reverse()
    var newStr = arr.join('')
    if (str == newStr)
        return true
    else
        return false
}


function isPalindrome1(str) {
    var newStr = ''
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    if (newStr == str)
        return true
    else
        return false
}


function isPalindrome2(str) {
    const len = str.length
    for (var i = 0; i < len / 2; i++) {
        if (str[i] != str[len - 1 - i])
            return false
    }
    return true
}

function isPalindrome3(str) {
    const len = str.length
    for (var i = 0, j = len - 1; i < len / 2 && j > len / 2; i++, j--) {
        if (str[i] != str[j])
            return false
    }
    return true
}

function isPalindrome4(str) {
    let i = 0
    let j = str.length - 1
    while (i < j) {
        if (str[i] == str[j]) {
            i++
            j--
        } else
            return false
    }
    return true
}


console.log(isPalindrome(str));
console.log(isPalindrome1(str));
console.log(isPalindrome2(str));
console.log(isPalindrome3(str));
console.log(isPalindrome4(str));