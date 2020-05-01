import { AuthenticatedSupliUser, SupliUser } from '../models/SuppliUser/suppliUser';
import api from './auth/index';

export const models = [AuthenticatedSupliUser, SupliUser];

export default api
