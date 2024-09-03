/*
const joi = document.createElement('h1');
joi.innerText = "hello World";
document.body.appendChild(joi)
*/

/*
var joi = document.createElement('h1');
joi.innerHTML=String.fromCharCode(803,432,234)
document.body.appendChild(joi)
*/

/*
(function() {
    var ᅠ = String.fromCharCode,
        ﾠ = document.createElement,
        ᅟ = 'appendChild',
        ㅤ = 'body',
        joi = ﾠ(ᅠ(104,49));
    
    joi.innerHTML = ᅠ(803,432,234);
    document[ㅤ][ᅟ](joi);
})();
*/

/*
(function(){{{for(var I = 0; I < 1; I++){{{
    function A1(){ for(var I = 0; I < 1; I++){{{ return document; }}} }
    function A2(){ for(var I = 0; I < 1; I++){{{ return 'body'; }}} }
    function A3(){ for(var I = 0; I < 1; I++){{{ return 'appendChild'; }}} }
    function a(){ for(var I = 0; I < 1; I++){{{ return String; }}} }
    function b(){ for(var I = 0; I < 1; I++){{{ return 'fromCharCode'; }}} }
    function c(){ for(var I = 0; I < 1; I++){{{ return 'createElement'; }}} }
    function e(){ for(var I = 0; I < 1; I++){{{ return 104; }}} }
    function f(){ for(var I = 0; I < 1; I++){{{ return 49; }}} }
    function g(){ for(var I = 0; I < 1; I++){{{ return 803; }}} }
    function h(){ for(var I = 0; I < 1; I++){{{ return 432; }}} }
    function i(){ for(var I = 0; I < 1; I++){{{ return 234; }}} }

    var z = A1()[c()]('h1');
    
    for(var I = 0; I < 1; I++){{{
        if(true){{{
            if(true){{{
                z.innerHTML = a()[b()](g(), h(), i());
            }}} else {{{}}}
        }}} else {{{}}}
    }}}

    for(var I = 0; I < 1; I++){{{
        if(true){{{
            if(true){{{
                if (A1()[A2()][A3](z)){} else {{{}}}
            }}} else {{{}}}
        }}} else {{{}}}
    }}}
}}}}}}})();
*/
/*
(function(){{{for(var I = 0; I < 1; I++){{{
    function A1(){ for(var I = 0; I < 1; I++){{{ return document; }}} }
    function A2(){ for(var I = 0; I < 1; I++){{{ return 'body'; }}} }
    function A3(){ for(var I = 0; I < 1; I++){{{ return 'appendChild'; }}} }
    function a(){ for(var I = 0; I < 1; I++){{{ return String; }}} }
    function b(){ for(var I = 0; I < 1; I++){{{ return 'fromCharCode'; }}} }
    function c(){ for(var I = 0; I < 1; I++){{{ return 'createElement'; }}} }
    function e(){ for(var I = 0; I < 1; I++){{{ return 104; }}} }
    function f(){ for(var I = 0; I < 1; I++){{{ return 49; }}} }
    function g(){ for(var I = 0; I < 1; I++){{{ return 803; }}} }
    function h(){ for(var I = 0; I < 1; I++){{{ return 432; }}} }
    function i(){ for(var I = 0; I < 1; I++){{{ return 234; }}} }

    var z = A1()[c()]('h1');
    
    for(var I = 0; I < 1; I++){{{
        if(true){{{
            if(true){{{
                z.innerHTML = a()[b()](g(), h(), i());
            }}} else {{{}}}
        }}} else {{{}}}
    }}}

    for(var I = 0; I < 1; I++){{{
        if(true){{{
            if(true){{{
                // A1()[A2()] は document.body を返し、A3() は 'appendChild' を返すので、
                // 正しい方法で呼び出すには [A3()]() とします。
                A1()[A2()]()[A3()](z);
            }}} else {{{}}}
        }}} else {{{}}}
    }}}
}}}}}})();
*/

(function(){{{for(var I = 0; I < 1; I++){{{
    function A1() { for (var I = 0; I < 1; I++){{{ return document; }}} }
    function A2() { for (var I = 0; I < 1; I++){{{ return 'body'; }}} }
    function A3() { for (var I = 0; I < 1; I++){{{ return 'appendChild'; }}} }
    function a() { for (var I = 0; I < 1; I++){{{ return String; }}} }
    function b() { for (var I = 0; I < 1; I++){{{ return 'fromCharCode'; }}} }
    function c() { for (var I = 0; I < 1; I++){{{ return 'createElement'; }}} }
    function e() { for (var I = 0; I < 1; I++){{{ return 104; }}} }
    function f() { for (var I = 0; I < 1; I++){{{ return 49; }}} }
    function g() { for (var I = 0; I < 1; I++){{{ return 803; }}} }
    function h() { for (var I = 0; I < 1; I++){{{ return 432; }}} }
    function i() { for (var I = 0; I < 1; I++){{{ return 234; }}} }

    var z = A1()[c()]('h1');
    
    for(var I = 0; I < 1; I++){{{
        if(true){{{
            if(true){{{
                z.innerHTML = a()[b()](g(), h(), i());
            }}} else {{{}}}
        }}} else {{{}}}
    }}}

    for(var I = 0; I < 1; I++){{{
        if(true){{{
            if(true){{{
                // ここで document.body を正しく参照するために、A1().body を使用
                eval(A1()[A2()][A3()](z));
            }}} else {{{}}}
        }}} else {{{}}}
    }}}
}}}}}})();
