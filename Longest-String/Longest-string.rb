def length_of_longest_substring(s)
   array = s.split("")
   checker =[];
   longest_length = 0
  (0..array.length - 1).each do i
     if !include(s[i]) 
      checker.push(s[i])
     end
  end
end

length_of_longest_substring("Donat")