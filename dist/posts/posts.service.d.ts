import { Post } from './interfaces/post.interface';
export declare class PostsService {
    posts: {
        userId: number;
        id: number;
        title: string;
        body: string;
    }[];
    getPosts(): Promise<Post[]>;
    getPost(id: any): Promise<Post>;
}
