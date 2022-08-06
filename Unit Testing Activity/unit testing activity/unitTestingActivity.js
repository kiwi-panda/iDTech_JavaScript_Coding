function greet(name) {
     if (name == null) {
        return "Hello there.";
   } else if (typeof name == "string" && name.toUpperCase() == name) {
        return `HOWDY! BUT WHY ARE YOU SHOUTING ${name}?!`;
   } else if (Array.isArray(name) && name.length == 2) {
        return `What's up ${name[0]} and ${name[1]}!`;
   } else if (Array.isArray(name) && name.length > 2) {
        var greeting = "Hey, ";
        name.forEach((x) => {
            if (name.indexOf(x) < name.length - 1) {
                greeting += x + ", ";
            } else {
                greeting += "and " + x + ".";
            }
        })
        return greeting;
    } else if (typeof name == "string") {
        return `Hi! How are you, ${name}?`;
    }
}