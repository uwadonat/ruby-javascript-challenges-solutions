def length_of_longest_substring(s)
   array = s.split("");
   checker =[];
   counted = [];
   longest_length = 0;
  (0..array.length - 1).each do |i|
    answer = checker.include?(array[i]);
     if answer 
        checker =[];
        longest_length = 0;
      
     else 
        checker.push(array[i]);
        longest_length = longest_length + 1;
        counted.push(longest_length);
     end

  end
 puts max.counted; 
  
 
end

length_of_longest_substring("Donatty")
