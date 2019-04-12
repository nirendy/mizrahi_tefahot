import * as React from 'react';
import UserModel from "app/models/UserModel";
import {Header, Image, Table} from 'semantic-ui-react';
import * as classNames from 'classnames';
import * as style from './../../containers/TodoApp/style.css';

export interface UserRowProps {
    user: UserModel;
}

export class UserRow extends React.Component<UserRowProps, never> {
    constructor(props?: UserRowProps, context?: any) {
        super(props, context);
    }

    render() {
        const {user} = this.props;
        return (
            <Table.Row>
                <Table.Cell
                    className={'hover-yellowish'}
                    style={{
                        backgroundColor: '#f8f8f5'
                    }}
                >
                    <h4 style={{textAlign: 'center'}}>
                        {user.actionItem}
                    </h4>
                </Table.Cell>
                <Table.Cell
                    className={classNames(style.hoverYellowish)}
                    style={{backgroundColor: '#f8f8f5'}}
                    >
                    <Header
                        style={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            alignItems: 'center'
                        }}
                    >
                        <div
                            style={{
                                flex: '15%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                src={user.imageUrl}
                                style={{
                                    width: '40px',
                                    borderRadius: '50%',
                                }}
                            />
                        </div>
                        <Header.Content as='h2' style={{textAlign: 'right'}}>
                            {user.name}
                            <Header.Subheader style={{fontWeight: 200}}>
                                {user.phoneNumber}
                            </Header.Subheader>
                        </Header.Content>
                        <div
                            style={{
                                flex: '15%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: 200
                            }}
                        >
                            {user.time}
                        </div>
                    </Header>
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default UserRow;
