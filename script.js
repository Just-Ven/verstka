/* let arr = [1, 9, 8, 3]; // 9, 8, 3, 1     19:38
arr.sort((a, b) => b - a);
if (arr.includes(2)) {
    let remove = arr.indexOf(2);
    arr.splice(remove, 1);
    if (arr[0] <= 4) {
        return `2${arr[0]}:`
    }
    else {
        return `2[]:${arr[1]}${arr[0]}`;
    }
}


console.log(`${arr[0]}`); */