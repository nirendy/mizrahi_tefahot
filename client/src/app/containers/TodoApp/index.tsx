import * as React from 'react';
import * as style from './style.css';
import {inject, observer} from 'mobx-react';
import {RouteComponentProps} from 'react-router';
import {Header} from 'app/components/Header';
import {TodoList} from 'app/components/TodoList';
import {Footer} from 'app/components/Footer';
import {TodoStore, RouterStore} from 'app/stores';
import {
    STORE_TODO,
    STORE_ROUTER,
    TODO_FILTER_LOCATION_HASH,
    TodoFilter, STORE_USER
} from 'app/constants';
import UserStore from "app/stores/UserStore";
import {Table} from 'semantic-ui-react';
import {computed} from "mobx";

export interface TodoAppProps extends RouteComponentProps<any> {
    /** MobX Stores will be injected via @inject() **/
    // [STORE_ROUTER]: RouterStore;
    // [STOURE_TODO]: TodoStore;
}

export interface TodoAppState {
    filter: TodoFilter;
}

@inject(STORE_TODO, STORE_ROUTER, STORE_USER)
@observer
export class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
    constructor(props: TodoAppProps, context: any) {
        super(props, context);
        this.state = {filter: TodoFilter.ALL};
    }

    componentWillMount() {
        this.checkLocationChange();
    }

    componentWillReceiveProps(nextProps: TodoAppProps, nextContext: any) {
        this.checkLocationChange();
    }

    checkLocationChange() {
        const router = this.props[STORE_ROUTER] as RouterStore;
        const filter = Object.keys(TODO_FILTER_LOCATION_HASH)
            .map((key) => Number(key) as TodoFilter)
            .find(
                (filter) => TODO_FILTER_LOCATION_HASH[filter] === router.location.hash
            );
        this.setState({filter});
    }

    private handleFilter = (filter: TodoFilter) => {
        const router = this.props[STORE_ROUTER] as RouterStore;
        const currentHash = router.location.hash;
        const nextHash = TODO_FILTER_LOCATION_HASH[filter];
        if (currentHash !== nextHash) {
            router.replace(nextHash);
        }
    };

    getFilteredTodo(filter: TodoFilter) {
        const todoStore = this.props[STORE_TODO] as TodoStore;
        switch (filter) {
            case TodoFilter.ACTIVE:
                return todoStore.activeTodos;
            case TodoFilter.COMPLETED:
                return todoStore.completedTodos;
            default:
                return todoStore.todos;
        }
    }

    render2() {
        const todoStore = this.props[STORE_TODO] as TodoStore;
        const {children} = this.props;
        const {filter} = this.state;
        const filteredTodos = this.getFilteredTodo(filter);

        const footer = todoStore.todos.length && (
            <Footer
                filter={filter}
                activeCount={todoStore.activeTodos.length}
                completedCount={todoStore.completedTodos.length}
                onClearCompleted={todoStore.clearCompleted}
                onChangeFilter={this.handleFilter}
            />
        );

        return (
            <div className={style.normal}>
                <Header addTodo={todoStore.addTodo}/>
                <TodoList
                    todos={filteredTodos}
                    completeAll={todoStore.completeAll}
                    deleteTodo={todoStore.deleteTodo}
                    editTodo={todoStore.editTodo}
                />
                {footer}
                {children}
            </div>
        );
    }


    @computed
    get renderBody(): React.ReactNode {
        const userStore = this.props[STORE_USER] as UserStore;

        return (
            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'flex-end'
                }}
            >
                <Table textAlign='right'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell style={{backgroundColor: '#e4781a'}}>לקוח</Table.HeaderCell>
                            <Table.HeaderCell>פעולות</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {userStore.users.map((user) => (
                            <Table.Row key={user.phoneNumber}>
                                <Table.Cell>
                                    {user.name}
                                </Table.Cell>
                                <Table.Cell>
                                    {user.phoneNumber}
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        );
    }

    @computed
    get renderHeader(): React.ReactNode {
        return (
            <div
                style={{
                    display: 'flex',
                    height: '15vh',
                    backgroundColor: '#525558',
                }}
            >
            </div>
        );
    }

    @computed
    get renderFooter(): React.ReactNode {
        return (
            <div
                className={style.greyColor}
                style={{
                    display: 'flex',
                    height: '7vh',
                    backgroundColor: '#525558',
                }}
            />
        );
    }

    render() {
        return (
            <div
                className={style.normal}
                style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {this.renderHeader}
                {this.renderBody}
                {this.renderFooter}
            </div>
        );
    }
}
