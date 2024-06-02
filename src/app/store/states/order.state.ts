import { Order } from '../../models/order.model';

/**
 * Order State
 */
export interface OrderState {
    loading: boolean;
    orders: Array<Order>;
    error: any;
}
