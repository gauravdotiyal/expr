const input=[1,2,3,4,5];

//we neeed output array with every element multiplied by 2
// input 1 2 3 4 5
// output 2 4 6 8 10

// normal way we can make new array and put values

//second way by map

function transform(i){
    return i*2;
}

const ans=input.map(transform);
console.log(ans);


//filtering 
//We have given array output back the array which contains even values 
// input 1 2 3 4 5 6 7
// output 2 4 6

const arr=[1,2,3,4,5,6,7]
//It is similr to map
function filterlogic(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}

const res=arr.filter(filterlogic);
console.log(res);

//using array inside the map function
arr.map(function(element,index,array){
    console.log(element)
    console.log(index)
    console.log(array);
    return element;
})