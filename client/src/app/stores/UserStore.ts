import {observable} from 'mobx';
import {UserModel} from 'app/models';
import * as _ from 'lodash';
import * as firebase from 'firebase';

export class UserStore {
    @observable public users: Array<UserModel> = [];

    constructor(private firebase: firebase.app.App) {
        this.init();
    }


    private init() {
        // TODO: destroy?
        this.firebase.database()
            .ref(`/users`)
            .on('value', (snapshot): void => {
                let usersObjects = (snapshot.val());
                // todo: add diff?
                this.users = _.map(usersObjects, (obj: any) => {
                    return new UserModel(
                        obj.name,
                        obj.imageUrl,
                        obj.phoneNumber,
                        [],
                        obj.date,
                    );
                });
            });
    }
}

export default UserStore;
