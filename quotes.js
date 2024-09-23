var quotes = [
    "Qualifications only give you entry. It is competence that ultimately works.",
    "If you want success, the foremost thing is to ensure that you are not the obstacle to it.",
    "When you earn people’s love and respect by how you love and respect them, it not only enriches your business, it enriches your life.",
    "Integrity, insight, and inclusiveness are the three essential qualities of leadership.",
    "Unless a leader displays an infectious level of inspiration, sloth and inertia will prevail."
    ];

 var number = prompt("Pick a number: ");
    alert("You picked " + number + ". Select 'OK' to see your quote" );
    var i = (number % 5);
    document.write(quotes[i]);
