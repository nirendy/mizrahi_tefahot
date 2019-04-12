import {observable} from 'mobx';

export class UserModel {
    @observable name: string;
    @observable imageUrl: string;
    @observable phoneNumber: string;
    @observable actionItem: string;
    @observable time: string;

    constructor(name: string,
                imageUrl: string,
                phoneNumber: string,
                actionItem: string,
                time: string,
    ) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.phoneNumber = phoneNumber;
        this.actionItem = actionItem;
        this.time = time;
    }

    get id(): string {
        return this.phoneNumber;
    }
}

export default UserModel;
