import api from './api';

export default {
  async list(page = 1) {
    const resp = await api.get(`/client?page=${page}`);
    return resp;
  },
  async listByName(page = 1, name) {
    const resp = await api.get(`/client?page=${page}&name=${name}`);
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
