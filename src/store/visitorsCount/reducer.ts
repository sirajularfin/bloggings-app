import {VisitorsActionConst} from '../../utils/constants';

export type IVisitorState = {
    visitorCount: number;
};

export const initialState: IVisitorState = {
    visitorCount: 0,
};

export const visitorsCountReducer = (state: IVisitorState = initialState, action: any): IVisitorState => {
    switch (action.type) {
        case VisitorsActionConst.INCREMENT_BLOG_VISITOR_COUNT:
            return {
                ...state,
                visitorCount: state.visitorCount + 1,
            };
        case VisitorsActionConst.DECREMENT_BLOG_VISITOR_COUNT:
            return {
                ...state,
                visitorCount: state.visitorCount - 1,
            };
        case VisitorsActionConst.RESET_BLOG_VISITOR_COUNT:
            return {
                ...state,
                visitorCount: 0,
            };
        default:
            return state;
    }
};
