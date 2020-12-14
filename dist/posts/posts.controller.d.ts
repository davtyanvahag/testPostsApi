import { PostsService } from './posts.service';
import { Post } from './interfaces/post.interface';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    posts(res: any): Promise<Post[]>;
    post(id: any, res: any): Promise<Post>;
}
