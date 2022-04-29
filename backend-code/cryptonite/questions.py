import math
import string


def question1(n):
    if(n < 0):
        return -1

    if(n == 0):
        return 7

    Tn = 7
    if(n > 0):
        for i in range(1, n+1):
            Tn = Tn + i + i*i

    return Tn


def isPrime(n):
    # Corner cases
    if(n <= 1):
        return False
    if(n <= 3):
        return True
        # This is checked so that we can skip
        # middle five numbers in below loop
    if(n % 2 == 0 or n % 3 == 0):
        return False

    for i in range(5, int(math.sqrt(n) + 1), 6):
        if(n % i == 0 or n % (i + 2) == 0):
            return False

    return True


def question2(N):
    # Base case
    if (N <= 1):
        return 2

    prime = N
    found = False

    while(not found):
        prime = prime + 1

        if(isPrime(prime) == True):
            found = True

    return prime*prime


def printDivisors(n):
    divisors = []
    i = 1
    while i <= n:
        if (n % i == 0):
            divisors.append(i)

        i = i + 1
    return divisors


def compute_hcf(x, y):
    # choose the smaller number
    if x > y:
        smaller = y
    else:
        smaller = x
    for i in range(1, smaller+1):
        if((x % i == 0) and (y % i == 0)):
            hcf = i
    return hcf


def question3(n):
    coprimes = []
    div = printDivisors(n)
    for i in range(2, 10000):
        HCF = 1
        for divisor in div:
            HCF = max(compute_hcf(divisor, i), HCF)
        if(HCF == 1 and (i not in coprimes)):
            coprimes.append(i)
            if(len(coprimes) == 4):
                return coprimes

    return coprimes


def question4(char):
    MAPPING = 'DEFGHABCIJKLMNOPQRSTUVWXYZ'
    i = MAPPING.index(char)
    if(char == 'I' or char == 'M' or char == 'P'):  # This is the answer, so it is HIDDEN
        return '?'
    # returns the character equally distance from the end of the string
    return MAPPING[25 - i]


def question5(n):
    digits = []
    while(n):
        digits.append(n % 10)
        n //= 10
    ans = 0
    for digit in digits:
        ans += digit * digit * digit
    return ans


def question6(n):
    if(n <= 0):
        return -1  # INVALID INPUT
    return 2**(n-1) + 2*(n+2)


def question7(string):
    ans = 0
    for char in string:
        ans = (ans + ord(char)) % 256
    return ans


def question8(char):
    prime_values = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
                    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
    if(char == 'D' or char == 'O' or char == 'G'):  # This is the answer, so it is HIDDEN
        return '?'
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return prime_values[alphabet.index(char)]


def question9(x):
    return (x*x) % 10