Array.prototype.last = function () {
    if (this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
};
console.log([1,2].last()); // Output: 2

const k = function(nums,target){
    const map= new Map();
    for (let i=0;i<nums.length;i++) {
        const c = target - nums[i];
        if (map.has(c)) {
            return [map.get(c), i];
        }
        map.set(nums[i], i);
    }
    return [];
};
console.log(k([2,7,11,15],9)); // Output: [0, 1

const arr = [ 1,2,3,4,5];
arr.splice(3,0,6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]