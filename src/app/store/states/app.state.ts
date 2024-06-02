import { OrderState } from './order.state';
import { UserState } from './user.state';

export interface AppState {
    orders: OrderState;
    users: UserState;
}
