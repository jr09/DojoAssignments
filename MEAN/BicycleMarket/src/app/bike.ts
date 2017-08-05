import { User } from './user';

export class Bike {
    _id: string;
    title: string;
    location: string;
    description: string;
    price: number;
    user: User;

    constructor(){
        this.title = "Title";
        this.location = "WA"
        this.description = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo";
        this.price = 250;
    }
}
