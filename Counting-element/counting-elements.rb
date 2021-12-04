
def counting_elements(arr)
    count = 0
    new_arr = arr.sort
    (0..new_arr.length - 1).each do |i|
        (i + 1..new_arr.legth -1).each do |j|
            if new_arr[j] == new_arr[i] + 1
                count = count +1
            end
        end
    end
    return count
end

puts counting_elements([2, 8, 5, 10, 9, 6])