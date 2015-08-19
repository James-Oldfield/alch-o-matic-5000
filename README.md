# Oldfield's Alch-O-Matic-5000.

A small Node-JS CLI that runs an auto clicker for High Alchemy on Runescape using [seedrandom](https://github.com/davidbau/seedrandom/) to make the pseudorandom `Math.random()` less detectable and [robotjs](https://github.com/octalmage/robotjs) for automating the clicks.

The program clicks with a frequency of anywhere between 1200ms and 1500ms.

## Options

You can run `alch` and then specify the number of alchs you wish to automate:

```bash
alch
# How many times do you want to alch? (Enter 0 to alch indefinitely):
5
```

You can also run `alch start` to explicitly begin running the autolclicker. Alch-O-Matic-5000 takes an optional parameter which allows you to define the number of alchs the program will automate:

```bash
alch start <number of alchs>
```
Some examples:

```bash
# Perform 5 alchs (10 clicks)
alch start 5
```

You can run the program indefinitely by omitting the optional parameter altogether:

```bash
alch start
```