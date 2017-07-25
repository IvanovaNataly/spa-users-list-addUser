import loggedInUserReducer from './loggedInUserReducer';
// import {LOG_IN, LOG_OUT} from "../actions";
//
// describe('LoggedInUserReducer Test Suite', ()=> {
//     describe('Positive Suite', ()=> {
//         it('should state be state', ()=> {
//             let state = 'Nataly';
//             let actionType = 'string';
//             let newState = loggedInUserReducer(state,actionType);
//             expect(newState).toBe(state);
//         });
//
//         it('should state be equal to new user on LOG_IN', ()=> {
//             let state = 'Nataly';
//             let action = {type: LOG_IN, user: "Another"};
//             let newState = loggedInUserReducer(state, action);
//             expect(newState).toBe("Another");
//         });
//
//         it('should state be null on LOG_OUT', ()=> {
//             let state = 'Nataly';
//             let action = {type: LOG_OUT};
//             let newState = loggedInUserReducer(state, action);
//             expect(newState).toBe(null);
//         });
//     });
//
//     describe('Negative Suite', ()=> {
//         it('should state be state if user is underfined', ()=> {
//             let state = 'Nataly';
//             let action = {type: LOG_IN};
//             let newState = loggedInUserReducer(state, action);
//             expect(newState).toBe("Nataly");
//         });
//
//     })
//
// })


import {logIn, logOut} from "../actions/creators.js";

describe('LoggedInUserReducer Test Suite', ()=> {
    describe('Positive Suite', ()=> {
        it('should state be state', ()=> {
            let state = 'Nataly';
            let action = {type: 'string'};
            let newState = loggedInUserReducer(state,action);
            expect(newState).toBe(state);
        });

        it('should state be equal to new user on LOG_IN', ()=> {
            let state = 'Nataly';
            let action = logIn("Another");
            let newState = loggedInUserReducer(state, action);
            expect(newState).toBe("Another");
        });

        it('should state be null on LOG_OUT', ()=> {
            let state = 'Nataly';
            let action = logOut();
            let newState = loggedInUserReducer(state, action);
            expect(newState).toBe(null);
        });
    });

    describe('Negative Suite', ()=> {
        it('should state be state if user is underfined', ()=> {
            let state = 'Nataly';
            let action = logIn();
            let newState = loggedInUserReducer(state, action);
            expect(newState).toBe("Nataly");
        });

    })

})
