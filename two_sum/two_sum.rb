def two_sum(nums, target)
    (0..nums.length-1).each do |i|
        (i+1..nums.length-1).each do |j|
            return [i,j] if nums[i] + nums[j] == target
        end
    end
end

puts two_sum([2,7,11,15], 26)
