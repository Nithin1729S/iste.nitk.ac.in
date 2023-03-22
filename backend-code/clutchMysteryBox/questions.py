import math
# Question 1 :non negative inputs only, <= 10000
def question1 ( a, b) :
    if (a < 0 or b < 0):
        return ("positive numbers only")
    if (a > 10000 or b > 10000):
        return ("values below 10000 only")
    A = str(bin(a))
    B = str(bin(b))
    count_A = 0
    count_B = 0
    for i in A:
        if i == "1":
            count_A +=1
    for j in B:
        if j == "1":
            count_B +=1
    if count_A == count_B :
        return 1
    return 0

#  Question 2
def sum_of_digits(num_):
  sum = 0
  num = num_
  while num != 0:
    sum += num % 10
    num //= 10
  return sum
  

def prod_of_digits(num_):
  prod = 1
  num = num_
  while num != 0:
    prod *= num % 10
    num //= 10
  return prod

def question2(num):
  return prod_of_digits(num) % sum_of_digits(num)

# Question 3:
def question3(n) :
    if (n <= 0) :
        return 0
    fibo =[0] * (n+1)
    fibo[1] = 1
    # Initialize result
    sm = fibo[0] + fibo[1]
    # Add remaining terms
    for i in range(2,n+1) :
        fibo[i] = fibo[i-1] + fibo[i-2]
        sm = sm * fibo[i]   
    return sm

#Question 4:
def question4(a, b):
    c1 = 100//a
    c2 = 100//b
    c3 = 100//(a*b)
    return c1+c2-c3

# Question 5:
def question5(num):
    s = 0
    while True:
        while num:
            s += num % 10
            num //= 10   
        num = s
        if s > 9:
            s = 0   
        else:
            break
    return str(chr(num+64))

# Question 6:
def question6 ( a) :
    if a:
        return 1
    return 0

#Question 7:
def question7(num):
  x=(num*num*num)+(num*(num+1))
  return x

def question8(a,b):
  x=a*a+b*b
  return x

def question9(a,b):
  x=math.sqrt(a*b)
  return x

def question10(a,b):
  x=math.log10(a*b)
  return x