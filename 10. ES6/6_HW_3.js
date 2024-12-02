/*Given an array: [5, 12, 7, 25, 18, 3]. Solve the following questions in a nodejs 
REPL and make your submission.

1. Write a function that prints the given array.

2. Write a function that returns a new array with 10 added to each number. Use for-loops. Print the result.

3. Write a function to convert all odd numbers in the array to the nearest even number by adding 1 to them.
 Print the result. Take the original array as input.

4. From the given array, create a new array with numbers divisible by 2. Print the new array. 
Take the original array as input.

5. Write a function to print the sum of all numbers in the array. Take the original array as input.

6. Write a function to print the sum of odd numbers and sum of all even numbers in the given array.
 Take the original array as input.
*/
function prob5(arr){
    let sum = 0
    for(let i =0;i<arr.length;i++)
{
    sum += arr[i]
}
return sum
}

function prob4(arr){
    let nw=[]
    for( let i = 0 ;i<arr.length;i++){
        if( arr[i] % 2 == 0){
            nw.push(arr[i])
        }
    }
    return nw
}
function prob3(arr){
    for(let i = 0; i < arr.length;i++){
        if(arr[i] % 2 !== 0){
            arr[i]= arr[i]+1
        }
    }
    return arr
}
function printArray(arr){
    for( let i = 0;i<arr.length;i++)
        {
            console.log(arr[i])
        }
}

function prob6(arr){
    let odd=0 ,even=0
    for(let i =0;i<arr.length;i++){
        if(arr[i] % 2 === 0){
            even+=arr[i]
        }else{
            odd+=arr[i]
        }
    }

    console.log(`sum of even is ${even} and odd is ${odd}`)
}
function newarr(arr){
        let newar=[]
        for( let i=0;i<arr.length;i++){
            newar.push(arr[i]+10)
        }
        return newar
}


let arr =[5,12,7,25,18,3]
// console.log(prob5(arr))
prob6(arr)