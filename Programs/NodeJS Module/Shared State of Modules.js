// To run this file, you require Movies, Emily, Bucky file

require('./Emily');
require('./Bucky');

/* Output:
Emily's fav Movie is The Notebook
Bucky's fav Movie is The Notebook */

// Holy, I have not set the value of favMovie for Bucky, but still i see the The Notebook as the favMovie. Here they share the module instead of have a copy of the module. 


// Summary:
// In the context of modules in programming, especially in JavaScript, the "shared state" refers to a situation where modules or components within a system share access to the same data or state variables. This shared state can lead to both benefits and challenges depending on how it's managed and used.
