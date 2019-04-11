import {observable} from 'mobx';

export class UserModel {
    static nextId = 1;
    readonly id: number;
    @observable name: string;
    @observable imageUrl: string;
    @observable phoneNumber: string;
    @observable actionItems: string[];
    @observable date: number;

    constructor(name: string,
                imageUrl: string,
                phoneNumber: string,
                actionItems: string[],
                date: number
    ) {
        this.id = UserModel.generateId();
        this.name = name;
        this.imageUrl = imageUrl;
        this.phoneNumber = phoneNumber;
        this.actionItems = actionItems;
        this.date = date;
    }

    static generateId() {
        return this.nextId++;
    }
}

export default UserModel;
