function loadmyapps()
{
    window.open("/myapps/index.html","_self");
}

function loadmymods()
{
    window.open("https://mcreator.net/user/715616/ablazemuffin35","_blank");
}

function loadfunmode()
{
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("body").style.backgroundColor = "#" + randomColor;
    
    setTimeout(loadfunmode,500);
}