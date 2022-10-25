import React from "react";


test("it shoud return the addition, soustraction , multiplication and division of a and b",()=>{

    expect(5+7).toBe(12);
    expect(10-3).toEqual(7);
    expect(5*5).toEqual(25);
    expect(10%2).toEqual(0);
});