---
title: "Expense Tracker"
date: "2021-02-25"
---

I have been keeping track of my money via a third party service for close to
four years now. When I started, I was but a fledgling who did not care much
about security and what information should be tracked along with transactions.
So, I went all in and tracked everything with as much detail as possible. Over
time, I started analyzing the problems I was facing with the service.

### Problems

- The service was a web application and a mobile app. I got tired of clicking
buttons and typing too much.
- The service was very bare bones and offered limited flexibility in linking 
different expenses. I often want to link spread out transactions as if they 
were all part of something big.
- The metadata that I could associate with every transaction was very basic - 
_date, location, text, hastags_. To be specific, different kinds of 
transactions demand additional and different metadata but because this 
construction was in my mind, the service couldn't do anything for me. I tried 
to solve this problem by coming up with a keyword based language that I would 
have to keep consistent across same type of transactions. It was not a good 
experience, but it worked.
- Related to the above problem was the problem of aggregating transactions not
just by their basic metadata, but by their additional metadata that differed
significantly. For example, there were many occasions when someone else paid
for my share of a meal or shopping. I tracked additional information about
these transactions using the keyword based language. The service allowed
filtering on metadata text, so I used simple text matching to find how much I
owed somebody. This was painful because I am not a linguist and my made up
language was not good. I would have preferred to fill in these additional
metadata fields rather than typing them completely.

### Solution

After years of following this laborious process and dealing with a lack of
features I longed for, I have now decided to build a solution of my own. It
would allow me to focus on features I care about and others to extend it 
however they see fit. It will be open sourced. Unlike majority of these third 
party services, it won't start as a platform where users can just sign up and 
start managing their expenses. This is because I believe that any data that 
**you** are not managing is effectively open to selling and stealing. Also, it 
is not good to have your data as personal as this live on someone else's 
computer.

The solution would thus be something that the users can self host on their
servers. As you might have guessed, it would first cater to developers. It 
would start as an extensive CLI first because CLI is the most bare bones 
interface that can be designed and integrated with anything. To be specific, 
the CLI will just be a wrapper on the core business logic, allowing users to 
input data and query aggregations. The CLI would also allow the users to spin 
up a server which will expose an API that they can consume in their own 
services to analyze or build something on top of.

Because I am familiar with frontend development, I also aim to build a frontend
which not so computer savvy people can use to do whatever CLI could have done
for them. The frontend would be customizable so that the users don't feel
obligated to use what is provided to them. The CLI and the frontend would, in
time, allow users to parse information from their content to auto detect
transaction type and fill in the related metadata in a structured way.

### Tech

As for the tech stack, I am planning to use either **Python** or **Go** for the
CLI. **Go** has better concurrency support, so I am inclining towards it. For
the frontend, I will use **React** because I have a lot of experience in it.

### Conclusion

I came up with this idea today over breakfast and nothing is set in stone. 
I did a little bit of research over the afternoon to check out any
existing solutions. I found some CLI only solutions, but they did not have the
features that I longed for. So, right now, this project has my full attention 
and I will start working on it after I am done with my midterms. Keep an eye 
out for my subsequent posts. I plan on discussing about the challenges I face 
as well as the changes I am making to this website.
