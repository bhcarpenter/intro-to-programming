#Introduction to Programming
---
#Hello, World

    !javascript
    var message = "hello, world";
    show(message);

---
#A Little About Computers
##Computers are incredibly dumb
- They can only perform very simple operations
- They have no ability to make inferences or assumptions
- They only do what they are told

##However
- Computers can do billions of operations a second

---
#Telling Computers What To Do

##Surprise! We do this using a program.

- A schedule of operations for the computer to perform.
- Similar to television "programming".

---
#Earliest Programs

##Programs actually predate electronic computers.

Some of the earliest programs were written for machinery such as looms (check out the Wikipedia article on the [Jacquard  Loom](http://en.wikipedia.org/wiki/Jacquard_loom)). The sequence of operations to run were often encoded onto punchcards which were fed into the machine.

---
#Machine Code

With the invention of electronic computers around the 1940s, modern programming began to take shape. Each computer processor that was manufactured understood a certain set of instructions, which were represented by numbers. Here's an example:

    0000000100000EF0: 55 48 89 E5 48 83 EC 10 48 8D 05 51 00 00 00 48
    0000000100000F00: 89 C7 E8 1D 00 00 00 C7 45 F8 01 00 00 00 8B 45
    0000000100000F10: F8 89 45 FC 8B 45 FC 48 83 C4 10 5D C3 90 FF 25
    0000000100000F20: 14 01 00 00 FF 25 16 01 00 00 00 00 4C 8D 1D FD
    0000000100000F30: 00 00 00 41 53 FF 25 ED 00 00 00 90 68 00 00 00
    0000000100000F40: 00 E9 E6 FF FF FF 68 0C 00 00 00 E9 DC FF FF FF
    0000000100000F50: 68 65 6C 6C 6F 2C 20 77 6F 72 6C 64 00 01 00 00

This sucked.

---
#Assembly Language

Somewhere during the 40s and 50s people realized that writing the machine code directly was boring and error prone, so they developed "Assembly Languages", a way of writing computer operation sequences (programs) that were easier to read and understand by humans.

These programs were then "compiled" into machine code so that they could be run by the processors.

    0000000100000EF0: push   rbp
    0000000100000EF1: mov    rbp,rsp
    0000000100000EF4: sub    rsp,0x10
    0000000100000EF8: lea    rax,[rip+0x51]        			;"hello, world"
    0000000100000EFF: mov    rdi,rax
    0000000100000F02: call   0x100000f24 <dyld_stub_puts>
    0000000100000F07: mov    DWORD PTR [rbp-0x8],0x1
    0000000100000F0E: mov    eax,DWORD PTR [rbp-0x8]
    0000000100000F11: mov    DWORD PTR [rbp-0x4],eax
    0000000100000F14: mov    eax,DWORD PTR [rbp-0x4]
    0000000100000F17: add    rsp,0x10
    0000000100000F1B: pop    rbp
    0000000100000F1C: ret    

This still sucked.

---
#Programming Languages

The ideas behind modern programming languages were developed during the 1960s and early 1970s, giving us languages similar to human speech for writing computer programs.

    !javascript
    var number_of_cookies = 20;
    var number_of_people = 30;
    
    if ( number_of_cookies < number_of_people ) {
      show( 'Not enough cookies!' );
    } else {
      show( 'Nom nom nom.' );
    }

Hooray!

---
#Types of Programming Languages

Over time, programming languages have evolved into two distinct groups: compiled and interpreted.

##Compiled Languages

Compiled programming languages are converted directly into machine code before they are run. Some examples: Assembly, C, C++.

##Interpreted Languages

Interpreted programming languages are converted into machine instructions "on-the-fly" by another program (called an "interpreter"). Common examples: Ruby, PHP, and our favorite for this class, JavaScript.

##Scripting Languages

In addition, some "interpreted languages" are specially tailored not just for being interpreted into machine code, but for automating parts of another program (i.e. giving them a "script" to follow). Javascript originally fell into this category.

---
#Why JavaScript
- It is the most ubiquitous programming language in the world.
- It is the standard for interactive development on the web.
- It is very approachable and relatively easy to learn.
- It's going to help you get a job.

---
#Usage

JavaScript is increasingly being used to perform different types of tasks including program automation, browser extension authoring, building desktop applications, and server-side programming.

However, by far the most common use of JavaScript is to add interactivity to web pages, so that is what we will focus on for this class.

