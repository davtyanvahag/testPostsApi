import { Controller, Get, Param, ParseIntPipe, Res } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  posts(@Res() res): Promise<Post[]> {
    return this.postsService.getPosts().then((post: [Post]) => res.json(post));
  }

  @Get(':id')
  post(@Param('id', new ParseIntPipe()) id, @Res() res): Promise<Post> {
    return this.postsService.getPost(id).then((post: Post) => res.json(post));
  }
}
