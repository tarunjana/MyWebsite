---
title: "Why I Love HUGO?"
date: 2021-01-25T20:37:54+05:30
tags: ["Hugo", "Others"]
slug: "why-i-love-hugo"
authors: ["Tarun Jana"]
katex: true
featuredImage: 
draft: false
---

I needed a [blog](/) for myself. My requirements were pretty straight-forward: A static site generator with flexibility and speed.

I had a little bit of experience with [Jekyll](https://jekyllrb.com/). Since I was not familiar with the [Ruby programming language](https://www.ruby-lang.org/en/), it was quite overwhelming for me. I could go with [Gatsby](https://www.gatsbyjs.com/), [Next](https://nextjs.org/), [Gridsome](https://gridsome.org/), [11ty](https://www.11ty.dev/), and all these SSG written in JavaScript. But again, I was not a JavaScript developer to deal with these.

[Hugo](https://gohugo.io/) gave me a sigh of relief in that situation. Although I had no experience with [Golang](https://golang.org/), installing Hugo on my system was very easy. I just had to add the path of the `hugo.exe` in the path variable of my system. And I was ready to create my first Hugo site.

Hugo comes with almost all the necessary features that I need to write technical content.

Here are some features that I use most:

## Code Block

A simple C++ code printing `Hello World!` in the terminal.

{{< highlight cpp "linenos=table,hl_lines=2-3 5,linenostart=1" >}}
#include<iostream>

int main(){
    std::cout<<"Hello World!";
    return 0;
}
{{< / highlight >}}

## Mathematics

I am using [Katex](https://katex.org/) to render Mathematics in this blog.

Some **inline** Mathematics: $\sum_{n=1}^{\infty} 2^{-n} = 1$

Some Mathematics in **block** mode:

$$
1+2+\cdots +n = \dfrac{n(n+1)}{2}
$$

## Table

| Heading | Another heading |
| :----:  | :-------------: |
|  text   |      text       |
|  text   |      text       |
|  text   |      text       |

## Image

An image by [ar130405](https://pixabay.com/users/ar130405-423602/) from [Pixabay](https://pixabay.com/):

{{< figure src="/images/Fingerprint.jpg" caption="Fingerprint" alt="Fingerprint" width="640px" height="360px" >}}