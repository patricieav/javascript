var sites = [
    "https://www.amazon.com",
    "https://www.sololearn.com",
    "https://www.coinbase.com"            
    ];


// This was a little complicated to get the links to actually work.
// The below code was comes from reading a little bit ahead and other sources.
// I understand that its creating a UL element and an anchor tag for the href to link the sites
// and iterate through each array element but I dont know what Im doing wrong for the links 
// to now work, but I will finish it.

    
var site = prompt("What is your favorite website?");

    sites.push(site);
    sites.shift();

    var ul = document.createElement("ul");
        
    sites.forEach(i => {
    var li = document.createElement("li");
    var link = document.createElement("a");
    link.textContent = i;
    link.href = document.getElementById(ul) ;
        
    li.appendChild(link);
    ul.appendChild(li);
        });
      
    document.body.appendChild(ul);