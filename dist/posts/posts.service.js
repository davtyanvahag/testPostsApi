"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
let PostsService = class PostsService {
    constructor() {
        this.posts = [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                "userId": 1,
                "id": 3,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut"
            },
            {
                "userId": 1,
                "id": 4,
                "title": "eum et est occaecati",
                "body": "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit"
            },
            {
                "userId": 1,
                "id": 5,
                "title": "nesciunt quas odio",
                "body": "repudiandae veniam quaerat sunt sedalias aut fugiat sit autem sed estvoluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque"
            },
            {
                "userId": 1,
                "id": 6,
                "title": "dolorem eum magni eos aperiam quia",
                "body": "ut aspernatur corporis harum nihil quis provident sequimollitia nobis aliquid molestiaeperspiciatis et ea nemo ab reprehenderit accusantium quasvoluptate dolores velit et doloremque molestiae"
            },
            {
                "userId": 1,
                "id": 7,
                "title": "magnam facilis autem",
                "body": "dolore placeat quibusdam ea quo vitaemagni quis enim qui quis quo nemo aut saepequidem repellat excepturi ut quiasunt ut sequi eos ea sed quas"
            },
            {
                "userId": 1,
                "id": 8,
                "title": "dolorem dolore est ipsam",
                "body": "dignissimos aperiam dolorem qui eumfacilis quibusdam animi sint suscipit qui sint possimus cumquaerat magni maiores excepturiipsam ut commodi dolor voluptatum modi aut vitae"
            },
            {
                "userId": 1,
                "id": 9,
                "title": "nesciunt iure omnis dolorem tempora et accusantium",
                "body": "consectetur animi nesciunt iure doloreenim quia adveniam autem ut quam aut nobiset est aut quod aut provident voluptas autem voluptas"
            },
            {
                "userId": 1,
                "id": 10,
                "title": "optio molestias id quia eum",
                "body": "quo et expedita modi cum officia vel magnidoloribus qui repudiandaevero nisi sitquos veniam quod sed accusamus veritatis error"
            },
        ];
    }
    getPosts() {
        return new Promise((res, rej) => {
            if (this.posts) {
                res(this.posts);
            }
            else {
                rej([]);
            }
        });
    }
    getPost(id) {
        return new Promise((res, rej) => {
            const data = this.posts.filter((el) => el.id === id)[0];
            if (data) {
                res(data);
            }
            else {
                rej([]);
            }
        });
    }
};
PostsService = __decorate([
    common_1.Injectable()
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map