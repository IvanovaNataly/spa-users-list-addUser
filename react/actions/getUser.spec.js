/**
 * Created by tresermichael on 7/26/17.
 */
import {getUser} from "./creators";

let mockDispatch = {
    dispatch: (action) => {
        //console.log(action)
    }
};

let mockPromise = {
    all: () => {
        return {then: cb => cb(["user","posts"]) }
    }
};

let mockUserService = {
    getUser: ()=>{
        return {then: cb => cb(true) }
    }
};

let mockPostUserService = {
    getPosts: ()=>{
        return {then: cb => cb(true) }
    }
};

describe("get user action creator", ()=>{

    beforeEach(()=>{
        spyOn(mockDispatch, "dispatch").and.callThrough();
        spyOn(mockPromise, "all").and.callThrough();
        spyOn(mockUserService, 'getUser').and.callThrough();
        spyOn(mockPostUserService, 'getPosts').and.callThrough();
    });

    it("should get user and his posts", ()=>{
        let thunked = getUser(3, mockUserService, mockPostUserService, mockPromise);
        thunked(mockDispatch.dispatch);

        expect(mockDispatch.dispatch).toHaveBeenCalledTimes(2);

        let [firstAction] = mockDispatch.dispatch.calls.argsFor(0);
        expect(firstAction.type).toBe("getUserRequest");
        expect(mockUserService.getUser).toHaveBeenCalled();

        let [secondAction] = mockDispatch.dispatch.calls.argsFor(1);
        expect(secondAction.type).toBe("getUserResponse");
        expect(secondAction.user).toBe("user");
        expect(secondAction.posts).toBe("posts");


    });

});