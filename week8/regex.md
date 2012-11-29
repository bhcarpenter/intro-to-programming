---
# Regular Expressions

Regular expessions are patterns used to match character combinations in strings. It's actually kind of a whole other language, and most programming languages support it.

In Javascript, Regular Expression objects can be created either using the new keyword or with the "Regular Expression literal" syntax.

    !javascript
    var pattern = new RegEx('abc');

    // Shortcut form.
    var pattern2 = /def/;

---
# Regular Expressions and Strings.

Strings have a few methods that are specifically designed to work with Regular Expressions:

  * match() - Accepts a regex as it's first parameter, and returns the match if the RegEx pattern is found.
  * replace() - Accepts a regex as it's first parameter, and a string as it's second. It replaces every match of the regex with the second parameter. 
  * search() - Accepts a regex as it's first parameter, and returns the index of the first match of the regex, or -1 if it isn't found.
  * split() - Accepts a regex as it's first parameter, and splits the string into an array of substrings where the boundaries are the regex matches

---
# Regular Expressions and Strings.
Examples:

    !javascript
    var pattern = /abc/;
    var str = "Do you know your abc's?";

    print( str.match( pattern ) );
    print( str.replace( pattern, 'def' ) );
    print( str.search( pattern ) );

    var segments = str.split(pattern)
    print( segments[0] );
    print( segments[1] );

---
# Parenthesized  Submatches

If you include parenthesis in your regular expression, Javascript will "remember" those matches as well, and you can insert them into your replacement string using some special markers.

    !javascript
    var pattern = /Your (mom) said/;
    var str = 'Your mom said, "Eat your veggies!"';

    str = str.replace( pattern, 'My $1 says' );

    print( str );

$1 corresponds to the first submatch. If you have multiple parenthesis groups, $2 will correspond to the second one, etc. You'll see why this is useful in a second.

---
# The Regular Expression Language

In regular expressions, certain characters have special meanings which allow us to match patterns in strings, even if we don't know exactly what they are going to say.

  * Normal letters and numbers - matches that letter or number
  * . -  matches any character
  * \\w - matches any letter or number (i.e. a "word" character)
  * \\W - matches all non-word characters
  * \\s - matches any space character
  * \\S - matches all non-space characters
  * \\d - matches any digit
  * \\\\ - matches \

---
# The Regular Expression Language

There are also characters that describe how many times a character should match

  * ? - the previous character can match 0 or 1 times
  * \* - the previous character can match 0 - infinite times
  * \+ - the previous character can match 1 - infinite times

And there are special characters that mark the beginning and end of the string.

  * ^ - matches the beginning of the string (only if used first)
  * $ - matches the end of the string (only if used last)


There's a whole lot more to it, but these are the basics.

---
# Regex Examples

Character matching examples

    !javascript
    print( 'hello world'.match(/hello/) );
    print( 'hello world'.match(/h.llo/) );
    print( 'hello world'.match(/hello\sworld/) );
    print( 'hello world'.match(/\wello/) );

---
# Regex Examples

Repeating examples

    !javascript
    print( 'hello world'.match( /hel+o/ ) );
    print( 'hiiiiiiiiiii'.match( /hi+/ ) );
    print( 'hello'.match( /hi*ello/ ) );

---
# Regex Examples


Starting and ending anchor examples.

    !javascript

    print( 'hello world'.match(/hello/) );
    print( 'hello world'.match(/^hello/) );
    print( 'hello world'.match(/^hello$/) );

