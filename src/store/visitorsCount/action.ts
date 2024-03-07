import {VisitorsActionConst} from '../../utils/constants';

export const incrementBlogVisitorCount = () => {
    return {
        type: VisitorsActionConst.INCREMENT_BLOG_VISITOR_COUNT,
    };
};
