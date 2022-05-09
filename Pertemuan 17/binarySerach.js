function binarySearch(arr, num) {
    arr.sort()
    let highIndex = arr.length - 1
    let lowIndex = 0
    
    while(lowIndex <= highIndex) {
        let midIndex = Math.floor(highIndex/2)
    
        if(arr[midIndex] === num) {
            return midIndex
        } else if(num > arr[midIndex]) {
            lowIndex = midIndex + 1
        } else {
            highIndex = midIndex - 1
        }
    }
    return null
}

let arr = [1,3,5,0,2,7,6]

console.log(binarySearch(arr, 7), `<===================  ==================`);
