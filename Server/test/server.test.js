


const expect = require('expect');
const request = require('supertest');
var {ObjectID} = require('mongodb');

const {app} = require('./.././server');
const {Todo} = require('./../models/todo');

const todos = [{
    _id:  new ObjectID(),
    text: "First todo"
},{
    _id: new ObjectID(),
    text: 'Second todo'
}];


beforeEach((done) => {
    Todo.remove({}).then(()=>{
        return Todo.insertMany(todos);
    }).then(()=>done());
});

describe('POST /todos', ()=>{

    it('should create a new todo',(done)=>{
        var text = 'Test todo text';

        request(app).post('/todos')
        .send({text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text);
        })
        .end((err, res)=>{
            if(err){
                return done(err);
            }


            Todo.find({text}).then((todos)=>{
               expect(todos.length).toBe(1);
                expect(todos[0].text).toBe('Test todo text');
                done();

            }).catch((e)=>{
                done(e);
            });
        });
    });

    it('it should not create todo with invalid body data', (done)=>{

        var text = 'Test todo text';
        
                request(app).post('/todos')
                .send({text})
                .expect(200)
                .expect((res)=>{
                    expect(res.body.text).toBe(text);
                })
                .end((err, res)=>{
                    if(err){
                        return done(err);
                    }
        
        
                    Todo.find().then((todos)=>{
                       expect(todos.length).toBe(3);
                        expect(todos[0].text).toBe('First todo');
                        done();
        
                    }).catch((e)=>{
                        done(e);
                    });
                });

    });

});

describe('GET /todos', ()=>{
    it('Should get all todos', (done)=>
    {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res)=>{
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
    });
});


describe('GET / todos/:id', ()=>{
    it('Should return todo', (done)=>{
        request(app)
            .get(`/todos/${todos[0]._id}`)
            .expect(200)
            .expect((res)=>{
                expect(res.body.todos.text).toBe(todos[0].text);
            })
            .end(done);
    });

  
  
});