
# Caesar cipher CLI tool

## About

This tool lets you encode and decode a text by Caesar cipher.

## Install

Open command line in the folder where you want to clone this program. Clone repository using command below.
```bash
git clone https://github.com/Hellsingi/CLI-tool.git
git checkout Caesar_cipher_cli
```

Install dependencies
```bash
 npm i
```

## How it works

The CLI tool is accepted 4 options (short alias and full name):

1.  **-s, --shift**: a shift (Number. Must be an integer positive.) **required!!!**
2.  **-a, --action**: an action (String. Must be encode/decode depending on the intent.) **required!!!**
3.  **-i, --input**: an input file (String. May be as relative as absolute. If the option is not specified you'll have the opportunity to enter text in the command line. ) **optional**
4.  **-o, --output**: an output file (The same as the input above.) **optional**

## Usage example:

**1.**
```bash
node . -a encode -s 13 -i "./input.txt" -o "./output.txt"
```
**2.**
```bash
node . --action encode --shift 13 --input "./input.txt" --output "./output.txt"
```
```bash
node . --action encode --shift 13
```
**3.**
```bash
node . --action decode --shift 13 --input "./input.txt" --output "./output.txt"
```
```bash
node . -a decode -s 13
```


