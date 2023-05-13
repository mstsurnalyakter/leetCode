/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
    let i = 0;
    let j = 0;
    let len = height.length-1;

    while (i < len) {
        j = Math
        .max(j, Math.min(height[i], height[len]) * (len - i));

        height[i] <= height[len] ? i++ : len--;
    }
    return j;
};

const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));
