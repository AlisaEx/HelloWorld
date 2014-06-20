// if x===0, return x;
// improve = average(g, x/g

function findSquareRoot(x, g){
	g = g===undefined ? 1 : g;
	if(x%g===0){
		return g;
	}
	else{
		console.log(g);
		findSquareRoot(improve(g, x/g), x);
	}
}

function improve(g, x){
	return (g+(g/x))/2;
}
