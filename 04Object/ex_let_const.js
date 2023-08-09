let x = "outer x";
{
    let x = "inner x";
    let y = "inner y";

    console.log(x);
    console.log(y);
}

console.log(x);
//console.log(y);

const origin = {x:1, y:2};
origin.x=3;

console.log(origin);
