//new Set([1,1,2,2,3,4])
// [1,2,3,4]


[...new Set("referee")].join("")
// refere


let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

/* 
    0: {Array(3) => true}
    1: {Array(3) => false}

    */


function hasDuplicate(arr){
    return new Set(arr).size !== arr.length
}


function vowelCount(string){
    const vowelsMap = newMap()
    const vowels = 'aieou'

    for (let char of string){
        if (vowels.includes(char)){
            if (!vowelsMap.has(char)){
                vowelsMap.set(char, 1)
            } else {
                vowelsMap.set(char, vowelsMap.get(char) + 1)
            }
        }
    }
    return vowelMap 
}