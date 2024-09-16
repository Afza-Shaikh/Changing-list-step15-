"use strict";
let guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\n we invited you on dinner tomorrow.\n\nThank You');
}
let not_present = 'farhan';
let new_guest = 'Babar Azam';
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\n We invited you on dinner tomorrow.\n Thank You ');
}
console.log(`Mr . ${not_present} will be not coming tomorrow dinner.`);
