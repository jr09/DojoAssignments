import { Bike } from './bike';

export class User {
    _id: string;
    fname: string;
    lname: string;
    email: string;
    password: string;
    bikes: Bike[];
}
