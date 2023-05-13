/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
    let len = nums.length;
        let i = 0;
    
      if (len === 0) return 0;
      
      for (let j = 1; j < len; j++) {
          if (nums[j] !== nums[i]) {
              i++;
              nums[i] = nums[j];
          }
      }
      
      return i + 1;
  };
  
  const nums =  [0,0,1,1,1,2,2,3,3,4];
  console.log(removeDuplicates(nums));