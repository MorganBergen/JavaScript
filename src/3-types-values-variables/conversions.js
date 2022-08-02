/*
Type Conversions






value           to String               to Number      to Boolean
undefined       "undefined"             NaN            false
null            "null"                  0              false
string          string                  number         true if string is not empty
number          string                  number         true if number is not 0
true            "true"                  1              true
false           "false"                 0              true
""              "undefined"             NaN            false
"1.2"           "1.2"                   1.2            true
"one"           "one"                   1              true
0               "0"                     0              true
1               "1"                     1              true
Infinity        "Infinity"              Infinity       true
-Infinity       "-Infinity"             -Infinity      true
NaN              "NaN"                  NaN            false
{}              "[object Object]"       1              true
[]              "[object Array]"        0              true
function        "[object Function]"     1              true
[9]             "9"                     9              true
['a']           use join() method       NaN            true
function(){}    "[object Function]"     1              true



Strings that can be parsed as numbers convert to those numbers. Leading and trailing spaces are allowed, but any leading or trailing nonspace characters that are not part of a numeric literal cause the string-to-number conversion to produce NaN. 
Some numeric conversions may seem surprising: true converts to 1, and false and the empty string convert to 0.



*/

