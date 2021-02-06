---
title: "Primality Test in C Language"
date: 2021-02-04T11:45:22+05:30
tags: ["C", "Programming"]
slug: "primality-test-in-c-language"
authors: ["Tarun Jana"]
katex: true
featuredImage: 
draft: false
---

Prime numbers are of special interest. These are the natural numbers that are divisible by $1$ and itself. For example $2, 3, 5, 7, 11,$ and so on. Let us create a C program that checks the primality of a given natural number.

## Mathematical Approach

There are many algorithms available to check primality of a natural number. But we'll go with the most intuitive one. Of course, this is not the best and is not optimized for production usage [^drawback]. But it will be sufficient for our purposes.

It's quite obvious that a prime number is not divisible by any natural number greater than $1$ and less than itself. So our program will check if any of the numbers less than the given number $n$, divides $n$ or not.

On observing more precisely, we may find that it is enough to check only till $\sqrt{n}$. This is because the product of any two numbers greater than $\sqrt{n}$ can never be equal to $n$.

## Code

Let's directly jump into the code.

### Step 1

We'll include two header files into our program: one is `stdio.h` and another is `math.h`. We need to calculate the square root of the given (positive) integer. The function `sqrt()` to do this task is in the header file `math.h`.

In the `main()` function, we'll take the input from the user. At this time, our code looks something like this:

{{< highlight c "linenos=table, linenostart=1" >}}
// Primality Test in C
#include <stdio.h>
#include <math.h>

int main() {
    int n;
    printf("Enter a natural number:\n");
    scanf("%d",&n);
    return 0;
}
{{< / highlight >}}

### Step 2

Now we'll create a new function named `isPrime()` just before the `main()` function. `isPrime()` will take the entered number as the argument and check its primality.

We know that $1$ is neither prime nor composite. If the user enters $1$ as an input, we need to print a message. We'll create an `if-else` block and write the highlighted code. (*Newly written code in every step will be highlighted!*)

{{< highlight c "linenos=table, hl_lines=4-9, linenostart=1" >}}
// Primality Test in C
#include <stdio.h>
#include <math.h>
void isPrime(int n) {
    if(n == 1) printf("1 is neither prime nor composite.");
    else{
    // Code for natural numbers other than 1
    }
}
int main() {
    int n;
    printf("Enter a natural number:\n");
    scanf("%d",&n);
    return 0;
}
{{< / highlight >}}


### Step 3

Here comes the hardest part. In the `else` block, we'll create a new variable `detect` of type `int` and assign the value `1` to it. This variable will help us to differentiate between prime numbers and composite numbers.

Then we'll create a `for` loop. The code below is quite self-explanatory. If `n` is divisible by any number $\leq \sqrt{n}$, we assign the value `0` to the variable `detect` and comes out of the `for` loop.

Next we'll create another `if-else` block inside the parent `else` block. If `detect` is non-zero (i.e. $1$ in this case), we'll confirm the primality of the given number. Otherwise we'll print that the entered number is composite.

{{< highlight c "linenos=table, hl_lines=8-16, linenostart=1" >}}
// Primality Test in C
#include <stdio.h>
#include <math.h>
void isPrime(int n) {
    if(n == 1) printf("1 is neither prime nor composite.");
    else{
    // Code for natural numbers other than 1
    int detect = 1;
    for(int i = 2; i <= sqrt(n); i++){
        if(n%i == 0){
            detect = 0;
            break;
        }
    }
    if(detect) printf("%d is a prime.", n);
    else printf("%d is NOT a prime.", n);
    }
}
int main() {
    int n;
    printf("Enter a natural number:\n");
    scanf("%d",&n);
    return 0;
}
{{< / highlight >}}

### Step 4

At last we have to call the `isPrime()` function from the `main()` function.

{{< highlight c "linenos=table, hl_lines=23, linenostart=1" >}}
// Primality Test in C
#include <stdio.h>
#include <math.h>
void isPrime(int n) {
    if(n == 1) printf("1 is neither prime nor composite.");
    else{
    // Code for natural numbers other than 1
    int detect = 1;
    for(int i = 2; i <= sqrt(n); i++){
        if(n%i == 0){
            detect = 0;
            break;
        }
    }
    if(detect) printf("%d is a prime.", n);
    else printf("%d is NOT a prime.", n);
    }
}
int main() {
    int n;
    printf("Enter a natural number:\n");
    scanf("%d",&n);
    isPrime(n);
    return 0;
}
{{< / highlight >}}

## Output

- When the input is $1$:

{{< highlight bash >}}
Enter a natural number:
1
1 is neither prime nor composite.
{{< / highlight >}}

- When the input is a prime number:

{{< highlight bash >}}
Enter a natural number:
3
3 is a prime.
{{< / highlight >}}

- When the input is a composite number:

{{< highlight bash >}}
Enter a natural number:
20
20 is NOT a prime.
{{< / highlight >}}

[^drawback]: The `isPrime()` function executes with a complexity of $O(\sqrt{n})$. Therefore our program can at most be used for natural numbers of range $10^{15}$ to $10^{16}$ in a reasonable amount of time.