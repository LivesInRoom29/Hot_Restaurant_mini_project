const Tables = require("./tables");

const table1 = new Tables("name1 name1", "555-666-7777", "name12@gmail.com", 12);

const table2 = new Tables("name2 name2", "555-666-7778", "name34@gmail.com", 13);

const table3 = new Tables("name3 name3", "555-666-7779", "name56@gmail.com", 14);

const table4 = new Tables("name4 name4", "555-666-7780", "name78@gmail.com", 15);

module.exports = { table1, table2, table3, table4 };