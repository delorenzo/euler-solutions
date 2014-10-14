def multiples()
	num = 3
	sum = 0
	while num < 1000 do
		if num % 3 == 0 || num % 5 == 0
			sum += num
		end
		num += 1
	end
	puts "The sum is #{sum}"
end

def fibonacci()
	sum = 0
	two_back = 1
	one_back = 2
	current = 3
	while current < 4000000 do
		sum += current
		two_back = one_back
		one_back = current
		current = two_back + one_back
	end
	puts "The sum of the terms is #{sum}"
end

def largest_prime(num)
	original_num = num

	while num % 2 == 0
		num /= 2
	end

	factor = 3
	while num > factor
		while num % factor == 0
			num /= factor
		end
		factor += 2
	end

	puts "The largest prime factor of #{original_num} is #{factor}."
end

multiples()
fibonacci()
largest_prime(20)
largest_prime(600851475143)