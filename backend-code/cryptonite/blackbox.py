import random

def function1(seq):
    s1 = 0
    if(len(seq) > 1):
        for i in seq:
            s1 += i
        ans = s1%(len(seq)-1)
        return str(int(ans))
    else:
        return str(int(seq[0]))

def function2(seq):
    sq = []
    if len(seq) > 1:
        for i in seq:
            sq.append(int(i)**2)
        sq.remove(max(sq))
        return str(int(max(sq) - min(sq)))
    if len(seq) == 1:
        return '0'

def function3(seq):
    num = 0
    denom = 0
    for i in seq:
        if i>0:
            denom += abs(i)
        else:
            num += abs(i)
    if(denom ==0):
        return str(num)
    else:
        if int(num/denom) == num/denom:
            return str(int(num/denom))
        return str(round(num/denom, 4))

def function4(seq):
    length = len(seq)
    sum = 0
    for i in range(length):
        sum += (i+1) * seq[i]
    return str(sum)

def function5(seq):
    seq = list(map(float, seq))
    n = len(seq)
    dp = [1 for _ in range(n)]
    m = 1
    for i in range(1, n):
        for j in range(i):
            if seq[i] > seq[j]:
                dp[i] = max(dp[i], 1 + dp[j])
        m = max(m, dp[i])
    return str(int(m))

def function6(seq):
    cseq = []
    for i in seq:
        if i < 0:
            cseq.append(-i)
        elif i > 0:
            cseq.append(i) 
    seq = cseq
    if len(seq) == 1:
        return str(seq[0])
    num1 = seq[0]
    num2 = seq[1]
    if(num1>num2):
        num = num1
        den = num2
    else:
        num = num2
        den = num1
    rem = num % den
    while(rem != 0):
        num = den
        den = rem
        rem = num % den
    gcd = den
    lcm = int(int(num1 * num2)/int(gcd))
    for i in range(2, len(seq)):
        num1 = seq[i]
        num2 = lcm
        if(num1>num2):
            num = num1
            den = num2
        else:
            num = num2
            den = num1
        rem = num % den
        while(rem != 0):
            num = den
            den = rem
            rem = num % den
        gcd = den
        lcm = int(int(num1 * num2)/int(gcd))
    return str(lcm%100)

def function7(seq):
    sum  = 0
    for i in seq:
        if i < 0:
            return 'Invalid input sequence. Negative numbers not allowed.'
        s = bin(i)
        s = str(s)[2:]
        for j in s:
            sum += int(j)
    if(sum%2 == 0):
        return 0
    else: return 1

# To base 5 convertor
def to_base_5(n):
    s = ""
    while n:
        s = str(n % 5) + s
        n = n // 5
    return s

def function8(seq):
    s = sum(seq)
    if s == 0:
        return '0'
    if s > 0:
        return to_base_5(s)
    return '-' + to_base_5(-s)

def function9(seq):
    for i in seq:
        if i < 0:
            return 'Invalid input sequence. Negative numbers not allowed.'
    length = len(seq)
    xorset = []
    for i in range(int(length/2)):
        xorset.append(seq[i]^seq[length-i-1])
    if(len(seq)%2!=0):
        xorset.append(seq[int(len(seq)/2)])
    return str(sum(xorset))

def function10(seq):
    sum = 0
    for i in range(0,len(seq),2):
        sum += seq[i]
    random.seed(a=sum, version=2)
    return str(random.randint(0, 10000))