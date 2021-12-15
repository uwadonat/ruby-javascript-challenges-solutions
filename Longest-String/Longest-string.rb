def length_of_longest_substring(s)
   array = s.split("")
   checker =[];
   longest_length = 0
  (0..array.length - 1).each do i
     if (!checker.include(s[i])) 
      checker.push(s[i])
      longest_length ++
     else 
      checker =[];
      longest_length = 0
     end
return longest_length
  end
end

length_of_longest_substring("Donat")