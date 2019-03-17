import api from './api';

export default {
  async list(page = 1, limit = 5) {
    const resp = await api.get(`/client?page=${page}&limit=${limit}`);
    return resp;
  },
  async create(item) {
    const resp = await api.post('/client', item);
    return resp;
  },

  async PaymentRequestUpdateEvent(id, item) {
    const resp = await await api.post(`/client/${id}`, item);
    return resp;
  },
};
