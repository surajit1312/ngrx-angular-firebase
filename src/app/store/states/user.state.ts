import { User } from '../../models/user.model';

/**
 * User State
 */
export interface UserState {
    loading: boolean;
    users: Array<User>;
    error: any;
}
