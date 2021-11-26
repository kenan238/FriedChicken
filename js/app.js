function interpreter(FRIEDCHICKEN, Friedchicken) {
const chicken = (CHICKEN, Chicken) => {
	Chicken &&( chicken. chicken =[,
	CHICKEN, CHICKEN = Chicken = chicken.
	$Chicken =-( CHICKEN ==( chicken.
	Chicken = Chicken ))], chicken.
	chicken [Chicken++] = chicken. chicken, chicken.
	CHICKEN = ++Chicken, chicken (--Chicken), chicken.
	$Chicken = ++Chicken, chicken. CHICKEN++ );
	Chicken = chicken. Chicken [chicken.
	$Chicken++ ]; chicken. Chicken = CHICKEN? Chicken?
	'\012'== Chicken? chicken (++ CHICKEN, chicken.
	chicken [++ chicken. CHICKEN ]=
	CHICKEN - CHICKEN ): Chicken
	==' '|'\015'== Chicken ||
	(Chicken   )== "c" &  chicken. Chicken [chicken.
	$Chicken++ ]== "h" &  chicken. Chicken [chicken.
	$Chicken++ ]== "i" &  chicken. Chicken [chicken.
	$Chicken++ ]== "c" &  chicken. Chicken [chicken.
	$Chicken++ ]== "k" &  chicken. Chicken [chicken.
	$Chicken++ ]== "e" &  chicken. Chicken [chicken.
	$Chicken++ ]== "n"&&++chicken. chicken [chicken.
	CHICKEN]? chicken (CHICKEN)
	:[ "Error on line "+CHICKEN+": expected 'fried' or 'chicken'",
		chicken. CHICKEN = CHICKEN ++- CHICKEN ]:
	chicken. chicken :( CHICKEN = chicken.
	Chicken[chicken.CHICKEN], Chicken? (Chicken =

	--Chicken? --Chicken? --Chicken? --Chicken? --Chicken?
	--Chicken? --Chicken? --Chicken? --Chicken?
	chicken. CHICKEN++ &&
	--Chicken :'&#'+CHICKEN+';': chicken.
	Chicken [chicken. Chicken [-- chicken. CHICKEN ]&&
	(chicken. $Chicken += CHICKEN), --chicken.
	CHICKEN ]: chicken. Chicken [chicken.
	Chicken [CHICKEN] = chicken. Chicken
	[-- chicken. CHICKEN ],-- chicken. CHICKEN ]:
	chicken. Chicken [chicken. Chicken [chicken.
	$Chicken++ ]] [CHICKEN]: CHICKEN == chicken.
	Chicken [-- chicken. CHICKEN ]:
	CHICKEN*chicken. Chicken [-- chicken.
	CHICKEN ]: chicken. Chicken [-- chicken.
	CHICKEN ]- CHICKEN: chicken. Chicken [-- chicken.
	CHICKEN ]+ CHICKEN: chicken.
	CHICKEN ++ && "chicken", chicken.
	Chicken [chicken. CHICKEN ]= Chicken, chicken
	()): CHICKEN );

	return chicken.
	Chicken
}
const occurences = (string, subString, allowOverlapping) => {

	string += "";
	subString += "";
	if (subString.length <= 0) return (string.length + 1);

	var n = 0,
		pos = 0,
		step = allowOverlapping ? 1 : subString.length;

	while (true) {
		pos = string.indexOf(subString, pos);
		if (pos >= 0) {
			++n;
			pos += step;
		} else break;
	}
	return n;
}
if(occurences(Friedchicken, "fried", false) < 3)
	return "Error: put more 'fried' in your code."
	Friedchicken=Friedchicken.replace(/fried/g, "chicken")
	return chicken(FRIEDCHICKEN, Friedchicken)
}
function friedChicken(inp, code) {
	try {
		var v=interpreter(inp, code);
		var convert = (s) => {
			let obj=document.createElement("P");
			obj.innerHTML=s;
			return obj.textContent;
		};
		v=convert(v);

	} catch(e) { v=e; }
	return v;
}
function descriptions(name) {
	var desc = document.getElementById("example_description");
	if(name == "helloworld") desc.textContent = "The famous Hello world program";
	if(name == "quine") desc.textContent = "Basically, it prints its source code";
	if(name == "cat") desc.textContent = "This will print whatever you give it as input.";
	if(name == "99chickens") desc.textContent = "{} Chickens in the farm, get one down, sell it now.";
	if(name == "deadfish") desc.textContent = "Gets its output from the input string.";
	if(name == "clear") desc.textContent = "Clears all the input/output.";
}
function pasteExample(name) {
	var codearea = document.getElementById("code");
	if(name == "helloworld") {
	codearea.value = `chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken fried chicken chicken
chicken chicken chicken fried chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
fried chicken fried chicken chicken chicken chicken
chicken fried chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken fried chicken chicken chicken chicken chicken
chicken fried fried chicken chicken chicken chicken chicken chicken chicken chicken fried chicken chicken chicken chicken
chicken chicken chicken chicken
chicken fried chicken
fried fried chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken fried fried chicken chicken chicken chicken chicken chicken
chicken chicken chicken
chicken chicken fried chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken fried chicken chicken chicken chicken chicken fried
fried chicken chicken fried fried chicken chicken fried chicken fried chicken chicken chicken
chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken fried chicken chicken chicken chicken

chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken
chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken fried fried chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
fried fried chicken chicken chicken fried chicken fried chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

chicken fried chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
fried chicken
chicken chicken
chicken fried chicken chicken chicken chicken chicken fried chicken
chicken chicken chicken fried chicken fried chicken chicken chicken fried chicken
chicken chicken chicken chicken fried chicken

chicken chicken
chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken
fried chicken fried chicken chicken fried chicken
chicken chicken chicken chicken chicken chicken fried chicken fried chicken chicken chicken
chicken fried chicken chicken fried chicken

fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken fried chicken
chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
fried chicken chicken fried fried chicken fried
chicken fried fried chicken fried chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken fried fried chicken

chicken chicken chicken fried chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken fried chicken chicken chicken fried chicken chicken fried chicken fried chicken fried chicken chicken fried chicken chicken fried chicken chicken chicken chicken chicken fried fried chicken chicken chicken fried chicken fried
chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken
chicken fried chicken fried chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken fried chicken chicken
`;
	}
	if(name == "quine") {
	codearea.value = `fried`;
	}
	if(name == "cat") {
		document.getElementById("input").value = "Chicken kfc.";
	codearea.value = `chicken fried chicken fried chicken fried chicken chicken fried chicken chicken
chicken fried chicken chicken fried chicken
`;
	}
	if(name == "99chickens") {
		document.getElementById("input").value = "9";
	codearea.value = `chicken fried chicken chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken fried chicken chicken chicken fried chicken chicken chicken
chicken chicken chicken fried
chicken chicken fried chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken fried chicken fried fried chicken chicken
chicken chicken chicken chicken chicken chicken chicken fried chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

chicken
chicken chicken
chicken chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken
chicken fried fried chicken chicken chicken chicken chicken chicken
chicken chicken
fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken fried chicken fried chicken chicken chicken
chicken chicken
chicken fried chicken fried chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken fried chicken chicken chicken chicken
fried chicken fried chicken fried chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken fried chicken chicken chicken chicken
chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken
chicken chicken fried chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken fried chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken fried chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

chicken chicken chicken chicken chicken chicken fried chicken chicken chicken chicken chicken
chicken fried chicken chicken chicken chicken

chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken fried chicken

chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken
chicken fried chicken chicken chicken chicken fried chicken chicken chicken chicken
chicken chicken fried chicken chicken fried chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken fried chicken chicken chicken chicken

chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken
chicken chicken fried chicken chicken chicken chicken chicken chicken chicken
chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken fried chicken fried chicken chicken fried chicken chicken chicken
fried chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken
chicken fried chicken fried chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken fried chicken fried chicken chicken fried chicken chicken chicken chicken
chicken fried fried chicken chicken chicken

chicken chicken
chicken
fried chicken
fried fried chicken chicken fried chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken
chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken
chicken chicken
fried chicken chicken chicken chicken chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken fried chicken fried fried chicken chicken fried fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken fried chicken chicken
chicken chicken chicken chicken chicken fried chicken chicken chicken chicken chicken
chicken chicken
chicken chicken chicken chicken chicken fried chicken chicken chicken
chicken fried
fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken fried chicken
chicken fried chicken fried chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken fried
chicken chicken fried fried chicken chicken chicken chicken chicken chicken chicken chicken
fried chicken chicken chicken chicken chicken

fried chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken fried fried chicken fried chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken


fried chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken
chicken chicken fried chicken chicken chicken

chicken chicken chicken chicken fried chicken chicken chicken chicken chicken chicken
chicken chicken fried chicken chicken chicken

chicken chicken
chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken fried fried chicken chicken fried chicken
chicken chicken fried chicken chicken chicken chicken fried chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken
chicken chicken fried chicken chicken chicken chicken chicken
`;
	}
	if(name == "deadfish") {
		document.getElementById("input").value = "issiso";
	codearea.value = `chicken fried chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken
chicken chicken
chicken fried chicken chicken chicken fried chicken chicken chicken chicken
fried chicken chicken fried fried chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken
chicken
chicken chicken
fried chicken
chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken fried chicken fried
chicken chicken chicken chicken chicken chicken chicken chicken fried chicken chicken fried fried chicken chicken chicken chicken chicken
chicken chicken fried chicken chicken chicken fried chicken chicken chicken fried chicken chicken chicken
chicken fried chicken chicken
chicken chicken chicken fried chicken chicken chicken chicken chicken
fried fried chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken fried fried chicken
fried chicken fried fried fried fried chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

chicken chicken chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
fried chicken chicken chicken chicken chicken chicken
chicken fried chicken chicken chicken fried chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
fried fried fried
chicken chicken chicken chicken chicken chicken chicken chicken chicken fried chicken chicken chicken
chicken chicken chicken chicken chicken fried chicken
chicken fried chicken fried fried chicken chicken chicken chicken chicken
fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken fried chicken fried chicken fried fried
chicken fried chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
fried chicken fried
chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken fried

chicken fried chicken chicken chicken
chicken chicken fried chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken fried chicken
fried fried chicken chicken fried chicken chicken chicken
chicken fried fried chicken fried chicken chicken fried fried chicken chicken chicken chicken chicken chicken chicken chicken chicken
fried fried chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken fried fried
chicken chicken chicken chicken chicken chicken chicken fried chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken
fried chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken fried chicken chicken chicken

chicken chicken chicken chicken chicken
chicken fried chicken chicken fried chicken chicken chicken chicken chicken
chicken chicken chicken fried chicken chicken chicken fried chicken fried chicken chicken fried chicken chicken chicken fried chicken chicken chicken chicken chicken chicken fried chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken fried
chicken fried chicken chicken chicken chicken chicken fried
chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

chicken chicken
chicken fried chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken
fried chicken fried fried chicken chicken chicken
chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken fried chicken chicken chicken chicken

chicken chicken chicken chicken chicken chicken chicken chicken fried chicken chicken
fried fried fried
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
fried fried chicken chicken chicken chicken

fried chicken chicken chicken chicken chicken
chicken
chicken chicken chicken chicken fried fried chicken fried chicken chicken chicken chicken
chicken fried fried chicken chicken chicken
chicken chicken chicken fried
fried fried chicken chicken chicken
chicken chicken fried chicken fried chicken chicken fried chicken chicken
chicken chicken chicken chicken chicken fried chicken chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken fried chicken chicken chicken chicken fried fried chicken chicken fried chicken chicken chicken chicken fried chicken fried chicken fried chicken chicken chicken fried fried chicken chicken chicken chicken chicken chicken chicken chicken fried chicken fried chicken chicken chicken chicken chicken chicken fried chicken
chicken chicken fried
fried chicken chicken chicken chicken chicken chicken chicken
chicken chicken fried chicken fried chicken chicken chicken chicken chicken chicken chicken
fried fried
chicken chicken chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

chicken fried chicken chicken chicken chicken
fried
chicken chicken chicken chicken chicken fried chicken fried fried chicken fried chicken fried chicken chicken
fried chicken chicken fried chicken chicken
chicken fried fried chicken
chicken chicken chicken fried chicken
chicken chicken fried chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken fried fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken fried chicken
chicken chicken chicken chicken chicken chicken chicken chicken
fried chicken fried chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken
chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken fried fried chicken chicken

chicken chicken fried fried
chicken chicken chicken chicken chicken chicken chicken fried fried fried chicken chicken fried chicken chicken fried chicken chicken chicken chicken chicken chicken
chicken chicken fried fried chicken chicken
chicken chicken chicken chicken
chicken fried chicken fried chicken fried chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken fried chicken

chicken chicken chicken chicken chicken chicken
fried
fried chicken chicken chicken chicken
chicken fried chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken fried chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken fried chicken chicken chicken fried chicken chicken fried chicken fried fried chicken chicken fried chicken fried chicken fried chicken chicken fried fried chicken chicken chicken chicken fried chicken fried chicken chicken chicken chicken fried chicken chicken chicken fried chicken chicken fried chickenfried chicken chicken fried chicken chicken chicken chicken chicken chicken chicken fried chicken chicken fried chicken chicken chicken chicken chicken chicken fried chicken chicken chicken fried chicken chicken chicken chicken
fried chicken chicken
chicken chicken chicken chicken chicken fried chicken chicken
chicken fried fried fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

fried chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken
chicken fried chicken fried chicken chicken

fried chicken chicken chicken chicken chicken
chicken
fried chicken fried chicken fried fried chicken fried chicken chicken chicken
chicken chicken chicken fried chicken chicken chicken chicken

fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken fried chicken chicken chicken

fried chicken
chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken

chicken chicken
chicken chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken fried chicken chicken chicken chicken chicken
chicken chicken chicken fried chicken fried chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken fried chicken chicken
chicken chicken chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken fried chicken chicken chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken fried chicken fried chicken chicken chicken fried chicken chicken fried chicken chicken chicken chicken fried chicken fried chicken fried chicken chicken chicken fried chicken chicken fried chicken chicken fried chicken chicken chicken fried chicken fried chicken chicken chicken chicken chicken chicken fried chicken chicken chicken chicken chicken chicken fried chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken`;
}
}
function run() {
	var chicken = friedChicken(document.getElementById("input").value, document.getElementById("code").value);
	if(chicken.startsWith("Error"))
		document.getElementById("errors").innerHTML = chicken;
	else
		document.getElementById("output").innerHTML = chicken;
}

function reset() {
	document.getElementById("input").value = "";
	document.getElementById("output").innerHTML = "";
	document.getElementById("errors").innerHTML = "";
	document.getElementById("code").value = "";
}
