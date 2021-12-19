def length_of_longest_substring(s)
   array = s.split("")
   checker =[];
   longest_length = 0
  (0..array.length - 1).each do |i|
    answer = checker.include(s[i])
     if answer 
        checker =[];
        longest_length = 0
      
     else 
        checker.push(s[i])
        longest_length ++
     end

  end
  return longest_length
end

length_of_longest_substring("Donat")