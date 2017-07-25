import {detailsReducer} from './selectedUserReducer';
import * as ACTIONS from '../actions';

describe('SelectedUserReducer Test Suite', ()=> {
    describe('detailsReducer Suite', ()=> {
        it('should state be state', ()=> {
            let state = 'Nataly';
            let action = {type: 'string'};
            let newState = detailsReducer(state, action);
            expect(newState).toBe(state);
        });

        it('should state be user object on GET_USER_RESPONSE', ()=> {
            let state = 'Nataly';
            let user = "Another";
            let action = { type: ACTIONS.GET_USER_RESPONSE, user};
            let newState = detailsReducer(state, action);
            expect(newState).toBe("Another");
        });

        it('should state be null on REMOVE_USER', ()=> {
            let state = "Someone";
            let user = "Someone";
            let action = { type: ACTIONS.REMOVE_USER, user};
            let newState = detailsReducer(state, action);
            expect(newState).toBe(null);
        });

    })



})
