process.env.NODE_ENV = "test";

const request = require('supertest');

const app = require('../app');
const cats = require('./fakeDb');

let pickles = {name:"Pickles"};

beforeEach(()=>{
    cats.push(pickles);
})

afterEach(()=>{
    cats.length=0;
})

describe("GET /cats", ()=>{
    test("Getting all cats", async ()=>{
        const res= await request(app).get('/cats');
    
        expect(res.statusCode).toBe(200);
        
        expect(res.body).toEqual({cats:[pickles]});
    })
    test("Getting a single cat", ()=>{

    })

})
